import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips'; // Update this import
import { CityData } from '../../../models/city.model';
import { searchLocations } from '../../../data/world-locations';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../data/world-locations';
import { DatePipe } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // Add MatButtonToggleModule to your imports
import { GenerativeAiService } from '../../../services/generativeai.service'; // Add GenerativeAiService

@Component({
  selector: 'app-travel-input-dialog',
  templateUrl: './travel-input-dialog.component.html',
  styleUrls: ['./travel-input-dialog.component.scss']
})
export class TravelInputDialogComponent implements OnInit, OnDestroy {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  basicDetailsForm: FormGroup;
  preferencesForm: FormGroup;
  filteredSources: Observable<CityData[]>;
  filteredDestinations: Observable<CityData[]>;
  indianLocations: Location;
  showCustomBudget = false;
  selectedBudget: string = 'comfort';
  private subscriptions: Subscription[] = [];

  minStartDate = new Date(); // Today's date
  minEndDate = new Date(); // Will be updated based on start date

  cities = [
    // Major World Cities
    'New York, USA',
    'London, UK',
    'Paris, France',
    'Tokyo, Japan',
    'Dubai, UAE',
    'Singapore',
    'Sydney, Australia',
    'Toronto, Canada',
    'Barcelona, Spain',
    'Amsterdam, Netherlands',
    'Berlin, Germany',
    'Rome, Italy',
    'Hong Kong',
    'Bangkok, Thailand',
    'Istanbul, Turkey',
    'Cairo, Egypt',
    'Cape Town, South Africa',
    'Rio de Janeiro, Brazil',
    'Buenos Aires, Argentina',
    'Moscow, Russia',
    'Seoul, South Korea',
    'Beijing, China',
    'Mumbai, India',
    'Delhi, India',
    'Bangalore, India',
    'Auckland, New Zealand',
    'Vienna, Austria',
    'Stockholm, Sweden',
    'Zurich, Switzerland',
    'Vancouver, Canada',
    'San Francisco, USA',
    'Miami, USA',
    'Las Vegas, USA',
    'Mexico City, Mexico',
    'Dublin, Ireland',
    'Prague, Czech Republic',
    'Budapest, Hungary',
    'Athens, Greece',
    'Jerusalem, Israel',
    'Marrakech, Morocco',
    'Bali, Indonesia',
    'Maldives',
    'Hawaii, USA',
    'Venice, Italy',
    'Shanghai, China',
    'Madrid, Spain',
    'Copenhagen, Denmark',
    'Helsinki, Finland',
    'Oslo, Norway',
    'Brussels, Belgium'
  ];

  tripTypes = [
    { value: 'leisure', label: 'Leisure', icon: 'beach_access' },
    { value: 'adventure', label: 'Adventure', icon: 'hiking' },
    { value: 'romantic', label: 'Romantic', icon: 'favorite' },
    { value: 'business', label: 'Business', icon: 'business_center' },
    { value: 'backpacking', label: 'Backpacking', icon: 'backpack' },
    { value: 'luxury', label: 'Luxury', icon: 'spa' },
    { value: 'family', label: 'Family', icon: 'family_restroom' }
  ];

  travelModes = [
    { value: 'flight', label: 'Flight', icon: 'flight' },
    { value: 'train', label: 'Train', icon: 'train' },
    { value: 'bus', label: 'Bus', icon: 'directions_bus' },
    { value: 'car', label: 'Road Trip', icon: 'directions_car' }
  ];

  interests = [
    { value: 'nature', label: 'Nature', icon: 'park' },
    { value: 'adventure', label: 'Adventure', icon: 'terrain' },
    { value: 'history', label: 'History', icon: 'museum' },
    { value: 'food', label: 'Food', icon: 'restaurant' },
    { value: 'nightlife', label: 'Nightlife', icon: 'nightlife' },
    { value: 'shopping', label: 'Shopping', icon: 'shopping_bag' },
    { value: 'relaxation', label: 'Relaxation', icon: 'spa' },
    { value: 'culture', label: 'Cultural Experiences', icon: 'theater_comedy' }
  ];

  travelHabits = [
    {
      label: 'Daily Schedule',
      control: 'schedule',
      options: [
        { value: 'early', label: 'Early Riser', icon: 'wb_sunny' },
        { value: 'night', label: 'Night Owl', icon: 'nights_stay' }
      ]
    },
    {
      label: 'Travel Pace',
      control: 'pace',
      options: [
        { value: 'fast', label: 'Fast-paced', icon: 'directions_run' },
        { value: 'relaxed', label: 'Relaxed', icon: 'self_improvement' }
      ]
    },
    {
      label: 'Group Size',
      control: 'group',
      options: [
        { value: 'solo', label: 'Solo', icon: 'person' },
        { value: 'group', label: 'Group', icon: 'groups' }
      ]
    }
  ];

  budgetPresets = [
    { label: 'Budget', value: 10000 },
    { label: 'Moderate', value: 25000 },
    { label: 'Luxury', value: 75000 }
  ];

  budgetOptions = [
    {
      label: 'Budget',
      value: 'budget',
      icon: '₹',
      color: 'linear-gradient(135deg, #20bf6b, #0fb9b1)',
      range: { min: 5000, max: 15000 },
      perDay: 2500,
      features: [
        { icon: 'hotel', text: 'Basic accommodations' },
        { icon: 'directions_bus', text: 'Public transport' },
        { icon: 'restaurant', text: 'Local cuisine' }
      ]
    },
    {
      label: 'Comfort',
      value: 'comfort',
      icon: '₹₹',
      color: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
      range: { min: 15000, max: 50000 },
      perDay: 5000,
      features: [
        { icon: 'hotel', text: '3-4 star hotels' },
        { icon: 'local_taxi', text: 'Mix of transport options' },
        { icon: 'restaurant', text: 'Mid-range restaurants' }
      ]
    },
    {
      label: 'Luxury',
      value: 'luxury',
      icon: '₹₹₹',
      color: 'linear-gradient(135deg, #8e44ad, #c0392b)',
      range: { min: 50000, max: 200000 },
      perDay: 15000,
      features: [
        { icon: 'stars', text: '4-5 star hotels' },
        { icon: 'flight_class', text: 'Premium transport' },
        { icon: 'restaurant_menu', text: 'Fine dining' }
      ]
    }
  ];

  currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' }
  ];

  sectionIcons = {
    location: 'explore',
    dates: 'event',
    budget: 'account_balance_wallet',
    interests: 'star',
    habits: 'psychology',
    preferences: 'settings'
  };

  stopoverTags: string[] = [];
  itineraryTypes = [
    { value: 'daily', label: 'Day-wise Itinerary', icon: 'calendar_today' },
    { value: 'hourly', label: 'Hour-by-hour Schedule', icon: 'schedule' }
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TravelInputDialogComponent>, // Make dialogRef public
    private locationService: LocationService,
    private datePipe: DatePipe, // Add DatePipe
    private generativeAiService: GenerativeAiService // Add GenerativeAiService
  ) {
    this.createForms();
    
    dialogRef.updateSize('800px', '90vh'); // Set fixed height
    dialogRef.addPanelClass('travel-input-dialog-container');
    
    dialogRef.disableClose = true;
    
    dialogRef.updatePosition({ top: '5vh' });
  }

  private createForms() {
    this.basicDetailsForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budgetStart: [5000, Validators.required],
      budgetEnd: [200000, Validators.required],
      budgetRange: ['moderate', Validators.required],
      customBudget: [null],
      budgetAmount: [null, [Validators.required, Validators.min(0)]],
      currency: ['INR', Validators.required],
      interests: [[], [Validators.required, Validators.minLength(1)]],
      schedule: ['', Validators.required],
      pace: ['', Validators.required],
      group: ['', Validators.required],
      tripType: ['solo'], // Default value
      travelMode: ['auto'], // Default value
      stopovers: [[]],  // For stopover locations
      itineraryType: ['daily', Validators.required] // Default to daily
    });

    this.preferencesForm = this.fb.group({
      tripType: ['', Validators.required],
      travelMode: ['', Validators.required],
      interests: [[], Validators.required],
      travelHabits: this.fb.group({
        schedule: [''],
        pace: [''],
        group: ['']
      })
    });
  }

  toggleCustomBudget() {
    this.showCustomBudget = !this.showCustomBudget;
    if (!this.showCustomBudget) {
      this.basicDetailsForm.get('customBudget')?.reset();
    }
  }

  getBudgetRange(): { min: number; max: number } {
    const range = this.basicDetailsForm.get('budgetRange')?.value;
    const custom = this.basicDetailsForm.get('customBudget')?.value;

    if (this.showCustomBudget && custom) {
      return { min: custom * 0.9, max: custom * 1.1 };
    }

    switch (range) {
      case 'budget':
        return { min: 5000, max: 15000 };
      case 'moderate':
        return { min: 15000, max: 50000 };
      case 'luxury':
        return { min: 50000, max: 200000 };
      default:
        return { min: 15000, max: 50000 };
    }
  }

  getBudgetCategory(): string {
    const amount = this.basicDetailsForm.get('budgetAmount')?.value;
    if (amount <= 15000) return 'budget';
    if (amount <= 50000) return 'moderate';
    return 'luxury';
  }

  getBudgetCategoryLabel(): string {
    const category = this.getBudgetCategory();
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  selectBudgetPreset(value: number): void {
    this.basicDetailsForm.patchValue({ budgetAmount: value });
  }

  isPresetActive(value: number): boolean {
    return this.basicDetailsForm.get('budgetAmount')?.value === value;
  }

  calculateDailyBudget(): number {
    const amount = this.basicDetailsForm.get('budgetAmount')?.value || 0;
    const startDate = this.basicDetailsForm.get('startDate')?.value;
    const endDate = this.basicDetailsForm.get('endDate')?.value;
    
    if (!startDate || !endDate) return amount;
    
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return Math.round(amount / Math.max(1, days));
  }

  getBudgetBreakdown(): any[] {
    const totalBudget = this.basicDetailsForm.get('budgetAmount')?.value || 0;
    
    return [
      {
        label: 'Accommodation',
        percentage: 40,
        amount: totalBudget * 0.4,
        color: '#2196f3'
      },
      {
        label: 'Transportation',
        percentage: 25,
        amount: totalBudget * 0.25,
        color: '#4caf50'
      },
      {
        label: 'Food & Dining',
        percentage: 20,
        amount: totalBudget * 0.2,
        color: '#ff9800'
      },
      {
        label: 'Activities',
        percentage: 10,
        amount: totalBudget * 0.1,
        color: '#9c27b0'
      },
      {
        label: 'Miscellaneous',
        percentage: 5,
        amount: totalBudget * 0.05,
        color: '#607d8b'
      }
    ];
  }

  ngOnInit() {
    this.setupCityAutocomplete();
    this.setupDateValidation();
    
    const locationsSub = this.locationService.getIndianLocations()
      .subscribe((locations) => {
        this.indianLocations = locations;
      });
    
    this.subscriptions.push(locationsSub);
  }

  private setupCityAutocomplete() {
    this.filteredSources = this.basicDetailsForm.get('source')!.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        console.log('Source autocomplete value:', value);
        if (!value || typeof value !== 'string') {
          console.log('Invalid source value, returning empty array');
          return [];
        }
        const searchTerm = value.slice(0, 50);
        console.log('Searching locations with term:', searchTerm);
        const locations = searchLocations(searchTerm);
        console.log('Found locations:', locations);
        return this.transformLocations(locations);
      })
    );

    this.filteredDestinations = this.basicDetailsForm.get('destination')!.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        console.log('Destination autocomplete value:', value);
        if (!value || typeof value !== 'string') {
          console.log('Invalid destination value, returning empty array');
          return [];
        }
        const searchTerm = value.slice(0, 50);
        console.log('Searching locations with term:', searchTerm);
        const locations = searchLocations(searchTerm);
        console.log('Found locations:', locations);
        return this.transformLocations(locations);
      })
    );
  }

  private setupDateValidation() {
    const dateSub = this.basicDetailsForm.get('startDate')?.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(date => {
        if (date) {
          this.minEndDate = new Date(date);
          const currentEndDate = this.basicDetailsForm.get('endDate')?.value;
          if (currentEndDate && new Date(currentEndDate) < new Date(date)) {
            this.basicDetailsForm.patchValue({
              endDate: date
            });
          }
        }
      });
    
    if (dateSub) this.subscriptions.push(dateSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  startDateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    return date >= this.minStartDate;
  };

  endDateFilter = (date: Date | null): boolean => {
    if (!date) return false;
    return date >= this.minEndDate;
  };

  private transformLocations(locations: any[]): CityData[] {
    console.log('Transforming locations:', locations);
    const transformed = locations.map(loc => {
      console.log('Transforming location:', loc);
      const cityData = {
        name: loc.name,
        city: loc.name,
        country: loc.code || '',
        searchText: loc.searchText,
        coordinates: loc.coordinates,
        parent: loc.parent || '',
        type: loc.type
      };
      console.log('Transformed to:', cityData);
      return cityData;
    });
    console.log('All locations transformed:', transformed);
    return transformed;
  }

  displayFn(location: CityData | null): string {
    if (!location) return '';
    return location.parent 
      ? `${location.city}, ${location.parent}`
      : `${location.city}, ${location.country}`;
  }

  private _filter(value: string): string[] {
    const filterValue = value?.toLowerCase() || '';
    return this.cities.filter(city =>
      city.toLowerCase().includes(filterValue)
    );
  }

  private formatDate(date: Date): string {
    if (!date) return '';
    
    try {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  }

  async generatePrompt() {
    console.log('Generate Prompt Called - Form Valid:', this.basicDetailsForm.valid);
    
    if (!this.basicDetailsForm.valid) {
      console.error('Form validation errors:', this.basicDetailsForm.errors);
      return;
    }

    try {
      const formData = this.basicDetailsForm.value;
      console.log('Form Data:', formData);

      const sourceLocation = typeof formData.source === 'string' ? formData.source : formData.source?.city;
      const destLocation = typeof formData.destination === 'string' ? formData.destination : formData.destination?.city;
      
      const startDate = this.formatDate(formData.startDate);
      const endDate = this.formatDate(formData.endDate);

      const formattedData = {
        source: sourceLocation,
        destination: destLocation,
        dates: {
          start: startDate,
          end: endDate
        },
        budget: {
          amount: formData.budgetAmount,
          currency: formData.currency
        },
        interests: formData.interests,
        preferences: {
          tripType: formData.tripType,
          travelMode: formData.travelMode,
          group: formData.group,
          pace: formData.pace,
          schedule: formData.schedule
        }
      };

      console.log('Formatted data:', formattedData);

      const prompt = `Create a detailed travel itinerary with this data:
${JSON.stringify(formattedData, null, 2)}

Please provide the response in this exact JSON format:
{
  "type": "itinerary",
  "message": "${sourceLocation} to ${destLocation} Trip",
  "data": {
    "totalTripDuration": "",
    "estimatedBudget": {
      "total": ${formData.budgetAmount},
      "breakdown": []
    },
    "totalDistance": "",
    "departure": {
      "location": "${sourceLocation}",
      "date": "${startDate}",
      "time": "09:00",
      "weather": {
        "temperature": "",
        "condition": ""
      }
    },
    "arrival": {
      "location": "${destLocation}",
      "date": "${endDate}",
      "time": "18:00",
      "weather": {
        "temperature": "",
        "condition": ""
      }
    },
    "dailyItinerary": []
  }
}`;

      // Close dialog before generating text to prevent double responses
      this.dialogRef.close({
        prompt,
        preferences: formData,
        shouldSend: true
      });

      // Remove the generateText call from here as it will be handled in chat-popup
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get tripDuration(): number {
    const start = this.basicDetailsForm.get('startDate')?.value;
    const end = this.basicDetailsForm.get('endDate')?.value;
    if (!start || !end) return 0;
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  }

  isSelectedBudget(value: string): boolean {
    return this.selectedBudget === value;
  }

  selectBudget(value: string): void {
    this.selectedBudget = value;
    this.basicDetailsForm.patchValue({ budgetType: value });
    const selected = this.budgetOptions.find(opt => opt.value === value);
    if (selected) {
      this.basicDetailsForm.patchValue({
        budgetMin: selected.range.min,
        budgetMax: selected.range.max
      });
    }
  }

  get selectedCurrencySymbol(): string {
    const currency = this.currencies.find(c => c.code === this.basicDetailsForm.get('currency')?.value);
    return currency?.symbol || '₹';
  }

  get selectedInterestsText(): string {
    const selected = this.basicDetailsForm.get('interests')?.value || [];
    if (selected.length === 0) return 'Select interests';
    if (selected.length <= 2) {
      return selected.map(s => this.interests.find(i => i.value === s)?.label).join(', ');
    }
    return `${selected.length} interests selected`;
  }

  addStopover(event: MatChipInputEvent): void { // Update parameter type
    const value = (event.value || '').trim();
    
    if (value) {
      this.stopoverTags.push(value);
      this.basicDetailsForm.get('stopovers')?.setValue(this.stopoverTags);
    }

    event.chipInput?.clear();
  }

  removeStopover(stopover: string): void {
    const index = this.stopoverTags.indexOf(stopover);
    if (index >= 0) {
      this.stopoverTags.splice(index, 1);
      this.basicDetailsForm.get('stopovers')?.setValue(this.stopoverTags);
    }
  }
}
