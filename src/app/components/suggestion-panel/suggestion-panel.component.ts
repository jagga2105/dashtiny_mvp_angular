import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-suggestion-panel',
  templateUrl: 'suggestion-panel.component.html',
  styleUrls: ['suggestion-panel.component.scss']
})
export class SuggestionPanelComponent implements OnChanges {
  @Input() itineraryData: any;

  commuteOptions = [
    {
      type: 'Flight',
      provider: 'IndiGo',
      image: 'assets/images/flight.jpg',
      price: '₹4,500',
      details: 'Direct flight, 2h 15m'
    },
    {
      type: 'Cab',
      provider: 'Uber Premium',
      image: 'assets/images/cab.jpg',
      price: '₹2,200',
      details: 'SUV, 4 seats'
    },
    {
      type: 'Train',
      provider: 'Rajdhani Express',
      image: 'assets/images/train.jpg',
      price: '₹1,800',
      details: 'AC First Class'
    }
  ];

  accommodations = [
    {
      type: 'Hotel',
      name: 'The Grand Plaza',
      image: 'assets/images/hotel.jpg',
      price: '₹8,500/night',
      rating: 4.5,
      amenities: ['Pool', 'Spa', 'Restaurant']
    },
    {
      type: 'Airbnb',
      name: 'Luxury Beach Villa',
      image: 'assets/images/airbnb.jpg',
      price: '₹6,200/night',
      rating: 4.8,
      amenities: ['Kitchen', 'Beach View', 'WiFi']
    },
    {
      type: 'Resort',
      name: 'Mountain View Resort',
      image: 'assets/images/resort.jpg',
      price: '₹12,000/night',
      rating: 4.7,
      amenities: ['All Inclusive', 'Activities', 'Spa']
    }
  ];

  events = [
    {
      type: 'Music Festival',
      name: 'Summer Beats 2024',
      image: 'assets/images/music-fest.jpg',
      date: 'May 20-22, 2024',
      price: '₹2,500',
      location: 'Beach Park'
    },
    {
      type: 'Food Festival',
      name: 'Taste of Culture',
      image: 'assets/images/food-fest.jpg',
      date: 'May 18-19, 2024',
      price: '₹500',
      location: 'City Center'
    },
    {
      type: 'Art Exhibition',
      name: 'Modern Masters',
      image: 'assets/images/art-exhibit.jpg',
      date: 'May 15-25, 2024',
      price: '₹800',
      location: 'Art Gallery'
    }
  ];

  ngOnChanges() {
    if (this.itineraryData) {
      // Here you would typically fetch real suggestions based on itinerary data
      this.updateSuggestions();
    }
  }

  private updateSuggestions() {
    // In a real implementation, you would:
    // 1. Parse dates from itinerary
    // 2. Call APIs to get real transport options
    // 3. Fetch actual accommodations
    // 4. Get events happening during the stay
  }
}
