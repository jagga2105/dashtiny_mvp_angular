import { Component, Input, OnChanges, AfterViewInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { TravelSearchService } from '../../../services/travel-search.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-suggestion-panel',
  templateUrl: './suggestion-panel.component.html',
  styleUrls: ['./suggestion-panel.component.scss']
})
export class SuggestionPanelComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() itineraryData: any;
  @ViewChild('categoryNav') categoryNav!: ElementRef;
  private observer: IntersectionObserver | null = null;
  
  isScrollStart = true;
  isScrollEnd = false;
  activeCategory = 'transport';

  categories = [
    { id: 'transport', name: 'Transport', icon: 'commute' },
    { id: 'accommodation', name: 'Stay', icon: 'hotel' },
    { id: 'activities', name: 'Activities', icon: 'local_activity' },
    { id: 'entertainment', name: 'Entertainment', icon: 'movie' }
  ];

  transportModes: any[] = [];
  accommodationTypes: any[] = [];
  activityCategories: any[] = [];
  entertainmentTypes: any[] = [];

  constructor(private travelSearch: TravelSearchService) {}

  ngOnChanges() {
    if (this.itineraryData?.data) {
      this.updateSuggestions();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initScrollObserver();
    });
  }

  private initScrollObserver() {
    if (!this.categoryNav?.nativeElement) return;

    this.checkScroll();
    this.categoryNav.nativeElement.addEventListener('scroll', () => {
      this.checkScroll();
    });
  }

  private checkScroll() {
    if (!this.categoryNav?.nativeElement) return;

    const { scrollLeft, scrollWidth, clientWidth } = this.categoryNav.nativeElement;
    this.isScrollStart = scrollLeft <= 0;
    this.isScrollEnd = scrollLeft + clientWidth >= scrollWidth;
  }

  ngOnDestroy() {
    if (this.categoryNav?.nativeElement) {
      this.categoryNav.nativeElement.removeEventListener('scroll', this.checkScroll);
    }
  }

  scrollCategories(direction: 'left' | 'right') {
    const container = this.categoryNav.nativeElement;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    setTimeout(() => this.checkScroll(), 300);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    if (event.target === this.categoryNav.nativeElement) {
      this.checkScroll();
    }
  }

  private updateSuggestions() {
    const data = this.itineraryData.data;
    
    if (data.transportation) {
      this.updateTransportOptions(data);
    }
    
    if (data.estimatedBudget && data.arrival) {
      this.updateAccommodationOptions(data);
    }
    
    if (data.dailyItinerary) {
      this.updateActivityOptions(data);
    }
  }

  private generateFlightOptions(data: any) {
    const budget = data.estimatedBudget.total * 0.3;
    return [
      {
        name: 'IndiGo',
        price: Math.round(budget * 0.8),
        duration: '2h 30m',
        rating: 4.2,
        features: ['Direct', 'Meals Available', 'Free Cancellation']
      },
      {
        name: 'Air India',
        price: Math.round(budget),
        duration: '2h 15m',
        rating: 4.0,
        features: ['1 Stop', 'Meals Included', 'Extra Legroom']
      }
    ];
  }

  private generateAccommodationOptions(data: any) {
    const budget = data.estimatedBudget.total * 0.4;
    const duration = parseInt(data.totalTripDuration);
    const dailyBudget = Math.round(budget / duration);
    
    this.accommodationTypes = [{
      category: 'Hotels',
      hotels: [
        {
          name: 'Luxury Hotel',
          rating: 4.8,
          price: dailyBudget,
          location: data.arrival.location,
          image: 'https://placehold.co/300x200',
          amenities: ['Pool', 'Spa', 'Restaurant']
        },
        {
          name: 'Business Hotel',
          rating: 4.2,
          price: Math.round(dailyBudget * 0.8),
          location: data.arrival.location,
          image: 'https://placehold.co/300x200',
          amenities: ['WiFi', 'Breakfast', 'Parking']
        }
      ]
    }];
  }

  private updateTransportOptions(data: any) {
    this.transportModes = [{
      type: 'Flights',
      options: this.generateFlightOptions(data)
    }];
  }

  private async updateAccommodationOptions(data: any) {
    if (data.arrival?.date && data.departure?.date) {
      try {
        const hotels = await firstValueFrom(this.travelSearch.searchHotels(
          data.arrival.location,
          data.departure.date,
          data.arrival.date
        ));

        if (hotels.length) {
          this.accommodationTypes = [{
            category: 'Hotels',
            hotels: hotels
          }];
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
        // Fallback to static data
        this.generateAccommodationOptions(data);
      }
    }
  }

  private updateActivityOptions(data: any) {
    const activities = data.dailyItinerary
      .flatMap((day: any) => day.activities)
      .filter((activity: any) => activity.estimatedCost > 0);

    this.activityCategories = [{
      name: 'Recommended Activities',
      activities: activities.map(this.mapActivity)
    }];
  }

  private mapActivity(activity: any) {
    return {
      name: activity.activity,
      rating: 4.5,
      price: activity.estimatedCost,
      duration: activity.time,
      image: activity.image || 'https://placehold.co/300x200'
    };
  }
}
