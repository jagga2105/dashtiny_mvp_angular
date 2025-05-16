import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TravelInputDialogComponent } from '../../dialogs/travel-input-dialog/travel-input-dialog.component';

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

  showChatPopup = false;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
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
    { text: 'Events', img: '../../assets/music-fest.png' },
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

  features = [
    {
      icon: 'psychology',
      title: 'AI-Powered Planning',
      description: 'Get personalized travel recommendations and itineraries crafted by our AI assistant DAIna.'
    },
    {
      icon: 'groups',
      title: 'Travel Community',
      description: 'Connect with like-minded travelers, share experiences, and find travel companions.'
    },
    {
      icon: 'map',
      title: 'Smart Itineraries',
      description: 'Access optimized travel plans with local insights and real-time updates.'
    }
  ];

  communityStats = [
    { number: '10K', label: 'Active Members', icon: 'people' },
    { number: '50K', label: 'Trips Planned', icon: 'flight' },
    { number: '120', label: 'Countries Covered', icon: 'public' },
    { number: '4.9', label: 'User Rating', icon: 'star' }
  ];

  activeMembers = [
    { name: 'Alex Thompson', location: 'Paris, France', isOnline: true },
    { name: 'Sarah Chen', location: 'Tokyo, Japan', isOnline: false },
    { name: 'Marco Silva', location: 'Barcelona, Spain', isOnline: true },
    { name: 'Priya Patel', location: 'Mumbai, India', isOnline: true },
    { name: 'James Wilson', location: 'Sydney, Australia', isOnline: false },
    { name: 'Maria Garcia', location: 'Mexico City, Mexico', isOnline: true },
    { name: 'Yuki Tanaka', location: 'Kyoto, Japan', isOnline: true },
    { name: 'David Lee', location: 'Singapore', isOnline: false }
  ];

  recentTrips = [
    {
      destination: 'Bali Adventure',
      description: 'Island hopping & cultural exploration',
      date: 'Oct 15-22, 2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSNNOlQZDtq4ApuearKcLHrnO4QAjs9xCJkZPPi1lfxCBynkETmH4wENkgHL2g0Fb8L7dyQak4kKzbTCboSiqo1naHiVpLrle2L2BUl6w',
      members: ['Alex', 'Sarah', 'Marco'],
      totalMembers: 6
    },
    {
      destination: 'Swiss Alps Trek',
      description: 'Mountain hiking & scenic views',
      date: 'Sep 28-Oct 5, 2023',
      imageUrl: 'https://assets.headwater.com/switzerland/any/001f79/image-gc.jpg',
      members: ['John', 'Emma'],
      totalMembers: 4
    }
  ];

  communityHighlights = [
    {
      icon: 'auto_awesome',
      title: 'AI-Powered Matching',
      description: 'Find travel companions with similar interests'
    },
    {
      icon: 'security',
      title: 'Verified Members',
      description: 'Safe and trusted travel community'
    },
    {
      icon: 'diversity_3',
      title: 'Group Adventures',
      description: 'Join existing trips or create your own'
    },
    {
      icon: 'local_offer',
      title: 'Exclusive Deals',
      description: 'Access members-only travel discounts and packages'
    },
    {
      icon: 'forum',
      title: 'Travel Forums',
      description: 'Share tips and get advice from experienced travelers'
    },
    {
      icon: 'event',
      title: 'Local Meetups',
      description: 'Connect with travelers in your destination'
    },
    {
      icon: 'card_membership',
      title: 'Rewards Program',
      description: 'Earn points and unlock special perks'
    },
    {
      icon: 'rate_review',
      title: 'Verified Reviews',
      description: 'Authentic feedback from real travelers'
    }
  ];

  openTravelDialog(): void {
    const dialogRef = this.dialog.open(TravelInputDialogComponent, {
      width: '800px',
      height: '90vh',
      panelClass: 'travel-input-dialog',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.shouldSend) {
        this.openChatDemo();
      }
    });
  }

  openChatDemo(): void {
    this.showChatPopup = true;
  }

  closeChatPopup(): void {
    this.showChatPopup = false;
  }

  activeCardIndex: number = 0; // Track active card

  setActiveCard(index: number): void {
    this.activeCardIndex = index;
  }
}
