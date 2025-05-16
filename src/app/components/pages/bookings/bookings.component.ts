import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FlightDetailsService } from '../../../flight-details.service';
import { SubmittedDataServiceService } from '../../../submitted-data-service.service';
import { FlightListingService } from '../../../services/flights/flight-listing.service';
import { HotelListingService } from 'src/app/services/hotels/hotel-listing.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  showFlightListing = false;
  showHotelListing = false
  tabLabels = [
    { label: 'Flight', icon: 'flight' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Train', icon: 'train' },
    { label: 'Bus', icon: 'directions_bus' },
    { label: 'Cab', icon: 'local_taxi' },
    { label: 'Movie', icon: 'local_movies' },
    { label: 'Event', icon: 'event' },
  ];
  constructor(private renderer:Renderer2, public flightDetailsService: FlightDetailsService, private flightListingService: FlightListingService, private hotelListingService: HotelListingService, public submittedDataServiceService: SubmittedDataServiceService) { }
  @ViewChild('flightForm') flightForm: any;
  @ViewChild('hotelForm') hotelForm: any;
  @ViewChild('chatPopupModal', { static: false }) chatPopupModal: ElementRef;
  showChatPopup: boolean = false;


  openChatPopup() {
    this.showChatPopup = true;
    this.renderer.addClass(document.documentElement, 'no-scroll');
    setTimeout(() => {
      if (this.chatPopupModal) {
        const modal = this.chatPopupModal.nativeElement;
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    });
  }

  closeChatPopup() {
    if (this.chatPopupModal) {
      const modal = this.chatPopupModal.nativeElement;
      modal.style.display = 'none';
      modal.classList.remove('show');
    }

    this.showChatPopup = false;
    this.renderer.removeClass(document.documentElement, 'no-scroll');
  }
  activeTabIndex = 0;
  isFlightTabActive: boolean = true;
  isHotelTabActive: boolean = false;
  ngOnInit(): void {
    this.flightListingService.showFlightListing$.subscribe((showFlightListing) => {
      this.showFlightListing = showFlightListing;
    });
    this.hotelListingService.showHotelListing$.subscribe((showHotelListing) => {
            this.showHotelListing = showHotelListing;
            console.log(this.showHotelListing);
        });
  }
  setActiveTab(index: number) {
    this.activeTabIndex = index;
    if (index === 0) {
      this.showFlightHome = true;
      this.showHotelHome = false;
      this.isFlightTabActive = true;
      this.isHotelTabActive = false;
    } else if(index === 1) {
      this.showFlightHome = false;
      this.showHotelHome = true;
      this.isFlightTabActive = false;
      this.isHotelTabActive =true;
    }
    this.submittedDataServiceService.toggleListing()
  }
  showFlightHome: boolean = true;
  showHotelHome: boolean = true;
  hideFlightHome(): void {
    this.showFlightHome = false;
  }
  hideHotelHome(): void {
    this.showHotelHome = false;
  }
  showListingDetails() {
    this.flightDetailsService.toggleDetails();
  }
  toggleChatPopup() {
    this.showChatPopup = !this.showChatPopup;
  }
  getSuggestionForm(index: number) {
    switch (this.tabLabels[index].label) {
      case 'Flight':
        return this.flightForm;
        case 'Hotel':
          return this.hotelForm;
      default:
        return null;
    }
  }
}
