import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
import {RangeSliderDirective} from '../../../../range-slider.directive';
import { Map, MapStyle, config, Marker } from '@maptiler/sdk';
import { HotelListingService } from 'src/app/services/hotels/hotel-listing.service';
@Component({
  selector: 'app-hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrls: ['./hotel-listing.component.scss']
})
export class HotelListingComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

@ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;
  getData: any;
  selectedRange: number = 500;
  accordionData: any[] = [
    {
      label: 'Popular Filters',
      items: ['Facilities for disabled guests', 'Holiday homes', 'Club Cubana', 'Toilet paper','Saturday Night Market','Free WiFi','Room service','Seating Area']
    },
    {
      label: 'Property Rating',
      items: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars', 'Unrated']
    },
    {
      label: 'Hotel Price',
      items: [1000],
      showSection: true
    },
    {
      label: 'Fun things to do',
      items: ['Beach', 'Bicycle rental', 'Fishing', 'Massage', 'Bike tours']
    },

    {
      label: 'Facilities',
      items: ['Parking','Restaurant','Pets allowed','Fitness centre','Airport shuttle','Non-smoking rooms','Facilities for disabled guests','Family rooms','Spa and wellness centre','Electric vehicle charging station','Swimming Pool']
    },

  {
    label: 'Room facilities',
    items: ['Private pool','Sea view','Air conditioning','Private bathroom','Kitchen/kitchenette','Balcony','Hot tub','TV','Shower','Refrigerator','Lake view','Pool with a view','Spa bath','Mountain view']
  },

  {
    label: 'Brands',
    items: ['OYO Rooms','FabHotels','StayVista','The Indian Hotels Co Ltd','Treebo Hotels','Radisson Hotels','Royal Orchid Hotels','Saffron Stays','Eko Stay','Novotel','Fairfield Inn','Holiday Inn Hotels & Resorts','Doubletree by Hilton','ibis Styles','Country Inn & Suites by Radisson','Radisson','Alila Hotels','The Hosteller','Ramada','Mercure']

  },
  {
    label: 'Property type',
    items:['Hotels','Apartments','Villas','Guest houses','Resorts','Hostels','Homestays','Holiday homes','Bed and breakfasts','Luxury tents','Country house','Chalets','Holiday parks','Lodges','Farm stays','Campsites','Motels']
  }

  ];

  onRangeChange(range: number): void {
    this.selectedRange = range;
  }
  constructor(private hotelListingService: HotelListingService, public submittedDataServiceService: SubmittedDataServiceService) { }
  ngOnInit() {
    this.getData = this.submittedDataServiceService.getSubmittedData();
    config.apiKey = 'fkeliYVYNI0EGeqQy1HE';
  }
  showListing() {
    this.submittedDataServiceService.toggleListing();
  }
  ngAfterViewInit() {
    const initialState = { lng: 79.65, lat: 29.59, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    new Marker({color: "#FF0000"})
      .setLngLat([79.65, 29.59])
      .addTo(this.map);
  }
  ngOnDestroy() {
    this.map?.remove();
  }
}
