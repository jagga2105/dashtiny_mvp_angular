import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  preferencesForm: FormGroup;

  mealOptions = [
    'Local cuisine', 'International cuisine', 'Street food', 'Fine dining',
    'Vegetarian', 'Vegan', 'Gluten-free', 'No dietary restrictions'
  ];

  constructor(private fb: FormBuilder) {
    this.preferencesForm = this.fb.group({
      accommodation: [''], // Initialize with empty string or default value
      transport: [''],
      booking: [''],
      packing: ['']
    });
  }
  currentStep = 1;
  emailVerified = false;
  phoneVerified = false;
  showEmailOtpField = false;
  showPhoneOtpField = false;

  profile = {
    name: '',
    age: null,
    dob: '',
    gender: '',
    email: '',
    emailOtp: '',
    phone: '',
    phoneOtp: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  };

  steps = [
    { title: 'Basic information', description: 'Some basic information we need to know you' },
    { title: 'Travel preferences', description: 'Your travel style and preferences' },
    { title: 'Interests and activities', description: 'Your interests and activities' },
    { title: 'Travel Habits', description: 'Your travel habits, to create customized experience for you' },
    { title: 'Personal preferences', description: 'Additional preferences and personal travel styles' }
  ];
  travelerTypes = [
    { text: 'Solo', img: '../../assets/solo.png' },
    { text: 'Couple', img: '../../assets/couple.png' },
    { text: 'Family', img: '../../assets/family.png' },
    { text: 'Group', img: '../../assets/group.png' }
  ];

  getawayTypes = [
    { text: 'Beach', img: '../../assets/beach.png' },
    { text: 'Mountain', img: '../../assets/mountain.png' },
    { text: 'City', img: '../../assets/city.png' },
    { text: 'Countryside', img: '../../assets/countryside.png' },
    { text: 'Adventure', img: '../../assets/adventure.png' },
    { text: 'Relaxation', img: '../../assets/relaxation.png' },
  ];

  travelModes = [
    { text: 'Car', img: '../../assets/car.png' },
    { text: 'Plane', img: '../../assets/plane.png' },
    { text: 'Train', img: '../../assets/train.png' },
    { text: 'Bus', img: '../../assets/bus.png' },
    { text: 'Bike', img: '../../assets/bike.png' },
    { text: 'Walk', img: '../../assets/walk.png' },
  ];

  accommodationTypes = [
    { text: 'Hotel', img: '../../assets/hotel.png' },
    { text: 'Hostel', img: '../../assets/hostel.png' },
    { text: 'Airbnb', img: '../../assets/airbnb.png' },
    { text: 'Camping', img: '../../assets/camping.png' },
    { text: 'Resort', img: '../../assets/resort.png' },
  ];
  accommodationOptions = [
    'Budget', 'Mid-range', 'Luxury', 'Eco-friendly', 'Boutique', 'Hostel', 'Airbnb'
  ];



  transportOptions = [
    'Public transport', 'Rental car', 'Taxi/Uber', 'Biking', 'Walking'
  ];

  bookingOptions = [
    'Last-minute bookings', 'Well in advance', 'Package deals', 'DIY planning'
  ];

  packingOptions = [
    'Light packer', 'Over packer', 'Minimalist', 'Tech-savvy (gadgets)', 'Family packer'
  ];
  travelHabits = {
    smoking: '',
    drinking: ''
  };

  interests = [
    { text: 'Hiking', img: '../../assets/hiking.png' },
    { text: 'Swimming', img: '../../assets/swimming.png' },
    { text: 'Culture', img: '../../assets/culture.png' },
    { text: 'Food Drink', img: '../../assets/food-drink.png' },
    { text: 'Shopping', img: '../../assets/shopping.png' },
    { text: 'Nightlife', img: '../../assets/nightlife.png' },
    { text: 'Sports', img: '../../assets/sports.png' },
    { text: 'Spa', img: '../../assets/spa-and-relaxation.png' },
    {text: 'Events', img: '../../assets/music-fest.png' },
  { text: 'Comedy', img: '../../assets/comedy.png' },
  { text: 'Dance', img: '../../assets/dance.png' },
  { text: 'Movie', img: '../../assets/cinema.png' },
  ];

  activities = [
    { text: 'Sightseeing', img: '../../assets/sightseeing.png' },
    { text: 'Adventure Sports', img: '../../assets/adventure-sports.png' },
    { text: 'Relaxation', img: '../../assets/relaxation-p.png' },
    { text: 'Local Experiences', img: '../../assets/local-experiences.png' },
    { text: 'Historical Tours', img: '../../assets/historical-tours.png' },
    { text: 'Wildlife Safaris', img: '../../assets/wildlife-safaris.png' },
  ];
  favoriteDestinations: string[] = [];
  selectedOptions = {
    travelerTypes: [],
    getawayTypes: [],
    travelModes: [],
    accommodationTypes: [],
    interests: [],
    activities: []
  };
  addFavoriteDestination(): void {
    this.favoriteDestinations.push('');
  }

  // Function to remove favorite destination at specific index
  removeFavoriteDestination(index: number): void {
    this.favoriteDestinations.splice(index, 1);
  }
  toggleSelection(category: string, option: any) {
    const index = this.selectedOptions[category].indexOf(option);
    if (index > -1) {
      this.selectedOptions[category].splice(index, 1);
    } else {
      this.selectedOptions[category].push(option);
    }
  }

  isSelected(category: string, option: any): boolean {
    return this.selectedOptions[category].indexOf(option) > -1;
  }
  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  verifyEmail() {
    // Simulate email verification process
    this.showEmailOtpField = true;
  }

  confirmEmailOtp() {
    // Simulate OTP verification process
    if (this.profile.emailOtp === '1234') { // Replace '1234' with your OTP logic
      this.emailVerified = true;
      this.showEmailOtpField = false;
    }
  }

  verifyPhone() {
    // Simulate phone verification process
    this.showPhoneOtpField = true;
  }

  confirmPhoneOtp() {
    // Simulate OTP verification process
    if (this.profile.phoneOtp === '5678') { // Replace '5678' with your OTP logic
      this.phoneVerified = true;
      this.showPhoneOtpField = false;
    }
  }

  finish() {
    alert('Profile completed!');
    // Here, you can handle the final submission of the form
  }
  ngOnInit() {
    this.preferencesForm = this.fb.group({
      meals: new FormControl([]) // Initialize as FormControl for multi-select
    });
  }
  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('LoggedInUser');
    return !!user;
  }
}
