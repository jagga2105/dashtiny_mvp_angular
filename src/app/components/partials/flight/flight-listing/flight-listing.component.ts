import { Component, Input } from '@angular/core';
import { FlightDetailsService } from '../../../../flight-details.service';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
import { FlightListingService } from '../../../../services/flights/flight-listing.service';
import { FlightList } from '../../../../models/flight/flightList';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.scss']
})
export class FlightListingComponent {
  @Input() submittedData: any;
  flights: FlightList[] = [];
  getData: any;
  accordionData: any[] = [];
  selectedRange: number = 50;
  selectedPriceRange: string;
  flightOneWayOrRound: 'oneWay' | 'roundTrip' = 'roundTrip';
  filteredFlights: FlightList[] = [];

  constructor(
    private flightListingService: FlightListingService,
    public submittedDataServiceService: SubmittedDataServiceService,
    public flightDetailsService: FlightDetailsService
  ) {}

  showListingDetails() {
    this.flightDetailsService.toggleDetails();
  }

  showListing() {
    this.submittedDataServiceService.toggleListing();
  }

  ngOnInit() {
    this.getData = this.submittedDataServiceService.getSubmittedData();
    this.flights = this.flightListingService.getFlights();
    console.log("from flight listing");
    console.log(this.flights);

    // Initially show all flights
    this.filteredFlights = this.flights;

    this.generateFilterData();
  }

  applyFilters(): void {
    // Get filter options from wherever you're storing them
    const selectedFilters = this.getAppliedFilters();

    // Apply filters to the flights array
    this.filteredFlights = this.flights.filter((flight) => {
      // Filter by Departure Time
      if (selectedFilters.departureTimes.length > 0 && !selectedFilters.departureTimes.includes(this.getDepartureTimeSlot(flight))) {
        return false;
      }

      // Filter by Stops
      if (selectedFilters.stops.length > 0 && !selectedFilters.stops.includes(flight.stops)) {
        return false;
      }

      // Filter by Airline
      if (selectedFilters.airlines.length > 0 && !selectedFilters.airlines.includes(flight.airlineName)) {
        return false;
      }

      return true;
    });
  }

  getAppliedFilters(): any {
    // This function should return the selected filter options
    // You can fetch this from wherever the filter values are stored
    // This is just a placeholder example, replace it with your actual implementation
    return {
      departureTimes: [], // Example: Departure Time filter
      stops: [0], // Example: Stops filter
      airlines: ['Airline1'] // Example: Airline filter
    };
  }

  generateFilterData(): void {
    // Stops
    const stopsSet = new Set<number>();
    const departureTimeItems = this.generateDepartureTimeItems();
    this.accordionData.push({ label: 'Departure Time', items: departureTimeItems });
    this.flights.forEach(flight => {
      stopsSet.add(flight.stops);
    });
    const stopsItems = Array.from(stopsSet).map(stop => stop === 0 ? 'Non-stop' : `${stop} Stop(s)`);
    this.accordionData.push({ label: 'Stops', items: stopsItems });

    const priceRangeItems = this.generatePriceRangeItems();
    this.accordionData.push({ label: 'Price', items: priceRangeItems, showSection: true });

    // Airline
    const airlinesSet = new Set<string>();
    this.flights.forEach(flight => {
      airlinesSet.add(flight.airlineName);
    });
    const airlineItems = Array.from(airlinesSet);
    this.accordionData.push({ label: 'Airline', items: airlineItems });

    // Add more filters as needed
  }

  generateDepartureTimeItems(): string[] {
    const timeSlots = ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'];
    const timeSlotItems: string[] = [];

    this.flights.forEach(flight => {
      const timeSlot = this.getDepartureTimeSlot(flight);
      if (!timeSlotItems.includes(timeSlot)) {
        timeSlotItems.push(timeSlot);
      }
    });

    return timeSlotItems;
  }

  getDepartureTimeSlot(flight: FlightList): string {
    const departureHour = parseInt(flight.departureTime.split(':')[0], 10);

    if (departureHour >= 0 && departureHour < 6) {
      return 'Early Morning';
    } else if (departureHour >= 6 && departureHour < 12) {
      return 'Morning';
    } else if (departureHour >= 12 && departureHour < 18) {
      return 'Afternoon';
    } else if (departureHour >= 18 && departureHour < 22) {
      return 'Evening';
    } else {
      return 'Night';
    }
  }

  generatePriceRangeItems(): { label: string, range: string }[] {
    const pricesSet = new Set<number>();
    this.flights.forEach(flight => {
      const price = this.extractPrice(flight.price);
      pricesSet.add(price);
    });

    const priceItems = Array.from(pricesSet);
    priceItems.sort((a, b) => a - b); // Sort from lowest to highest

    // Define your desired price ranges here
    const priceRanges = [
      { label: '1000 - 5000', range: '1000-5000' },
      { label: '5000 - 10000', range: '5000-10000' },
      { label: '10000 - 20000', range: '10000-20000' },
      { label: '20000 - 30000', range: '20000-30000' },
      { label: '30000 - 40000', range: '30000-40000' },
      { label: '40000 - 50000', range: '40000-50000' },
      { label: '50000 - 60000', range: '50000-60000' },
      { label: '60000 - 70000', range: '60000-70000' },
      { label: '70000 - 80000', range: '70000-80000' },
      { label: '80000 - 90000', range: '80000-90000' },
      { label: '90000 - 100000', range: '90000-100000' },
      // Add more ranges as needed...
    ];

    // Group prices into ranges
    const priceRangeItems = priceRanges.map(range => {
      const count = priceItems.filter(price => {
        const [min, max] = range.range.split('-').map(Number);
        return price >= min && price <= max;
      }).length;

      return {
        label: `${range.label} (${count})`,
        range: range.range
      };
    });

    return priceRangeItems;
  }

  extractPrice(price: string): number {
    // Ensure that the price can be parsed to a number
    const parsedPrice = parseFloat(price.replace(/[^\d.-]/g, ''));
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  }

  onPriceRangeChange(range: string): void {
    this.selectedPriceRange = range;
    // Handle the selected price range here
    console.log('Selected Price Range:', this.selectedPriceRange);
    this.applyFilters();
  }

  onRangeChange(range: number): void {
    this.selectedRange = range;
    // Handle the selected range here
    console.log('Selected Range:', this.selectedRange);
    this.applyFilters();
  }

  onFilterChange(label: string, item: string): void {
    // Handle the filter change here based on label and item
    console.log(`Filter Changed - Label: ${label}, Item: ${item}`);
    this.applyFilters();
  }

  onFlightOneWayOrRoundChange(selectedValue: 'oneWay' | 'roundTrip') {
    this.flightOneWayOrRound = selectedValue;
  }
}
