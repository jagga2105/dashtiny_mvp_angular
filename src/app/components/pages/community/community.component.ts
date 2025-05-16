import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TravelInputDialogComponent } from '../../dialogs/travel-input-dialog/travel-input-dialog.component';

interface Getaway {
  id: number;
  destination: string;
  startDate: Date;
  endDate: Date;
}

interface User {
  id: number;
  name: string;
  imageUrl: string;
  verified: boolean;
  upcomingTrips: Getaway[];
  pastExperiences: Experience[];
}

interface Experience {
  id: number;
  title: string;
  description: string;
}
interface GetawayNearYou {
  id: number;
  tripUser: GetawayUser;
  type: string;
  location: string;
  startDate: Date,
  endDate: Date,
  isLiked: boolean;
  description: string;
  imageUrl: string;
}
interface SuggestedGetaway {
  name: string;
  date: string;
  destination: string;
  progress: number;
  availableSeats: number;
  images: string[];
}
export interface GetawayUser {
  id: number;
  name: string;
  imageUrl: string;
  verified: boolean;
}

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  getaways: SuggestedGetaway[] = [
    {
      name: 'John Doe',
      date: 'July 5, 2024',
      destination: 'Paris, France',
      progress: 50,
      availableSeats: 3,
      images: ['../../../../assets/places/buckingham-palace.jpg']
    },
    {
      name: 'Jane Smith',
      date: 'August 12, 2024',
      destination: 'Tokyo, Japan',
      progress: 75,
      availableSeats: 5,
      images: ['../../../../assets/places/buckingham-palace.jpg', '../../../../assets/places/london-eye.jpg']
    },
    {
      name: 'Alice Johnson',
      date: 'September 20, 2024',
      destination: 'Sydney, Australia',
      progress: 30,
      availableSeats: 2,
      images: ['../../../../assets/places/buckingham-palace.jpg', '../../../../assets/places/london-eye.jpg']
    }
  ];
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      imageUrl: '../../../../assets/users/1.jpg',
      verified: true,
      upcomingTrips: [
        {
          id: 1,
          destination: 'Paris',
          startDate: new Date('2024-04-10'),
          endDate: new Date('2024-04-15'),
        },
        {
          id: 2,
          destination: 'London',
          startDate: new Date('2024-05-15'),
          endDate: new Date('2024-05-20'),
        },
      ],
      pastExperiences: [
        {
          id: 1,
          title: 'Amazing Getaway to Thailand',
          description: 'Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          title: 'Exploring Rome',
          description: 'Consectetur adipiscing elit.',
        },
      ],
    },
    {
      id: 2,
      name: 'Alice Smith',
      imageUrl: '../../../../assets/users/2.jpg',
      verified: true,
      upcomingTrips: [
        {
          id: 1,
          destination: 'Tokyo',
          startDate: new Date('2024-03-25'),
          endDate: new Date('2024-03-30'),
        },
        {
          id: 2,
          destination: 'Sydney',
          startDate: new Date('2024-07-12'),
          endDate: new Date('2024-07-17'),
        },
      ],
      pastExperiences: [
        {
          id: 1,
          title: 'Safari in Africa',
          description: 'Vivamus consectetur sem id urna efficitur ultrices.',
        },
        {
          id: 2,
          title: 'Skiing in the Alps',
          description: 'Nulla facilisi. Integer at venenatis leo.',
        },
      ],
    },
    {
      id: 3,
      name: 'Michael Brown',
      imageUrl: '../../../../assets/users/3.jpg',
      verified: true,
      upcomingTrips: [
        {
          id: 1,
          destination: 'New York',
          startDate: new Date('2024-06-20'),
          endDate: new Date('2024-06-25'),
        },
        {
          id: 2,
          destination: 'Los Angeles',
          startDate: new Date('2024-08-08'),
          endDate: new Date('2024-08-13'),
        },
      ],
      pastExperiences: [
        {
          id: 1,
          title: 'Backpacking in Europe',
          description:
            'Praesent ullamcorper pharetra tellus, ac suscipit lorem dignissim sit amet.',
        },
        {
          id: 2,
          title: 'Cultural Exploration in Asia',
          description:
            'Vestibulum gravida, sem nec ultrices consequat, est turpis rutrum velit.',
        },
      ],
    },
    {
      id: 4,
      name: 'Emily Johnson',
      imageUrl: '../../../../assets/users/4.jpg',
      verified: false,
      upcomingTrips: [
        {
          id: 1,
          destination: 'Barcelona',
          startDate: new Date('2024-05-30'),
          endDate: new Date('2024-06-04'),
        },
        {
          id: 2,
          destination: 'Amsterdam',
          startDate: new Date('2024-07-18'),
          endDate: new Date('2024-07-23'),
        },
      ],
      pastExperiences: [
        {
          id: 1,
          title: 'Road Getaway Across USA',
          description:
            'Maecenas ac scelerisque libero, sit amet rhoncus lacus.',
        },
        {
          id: 2,
          title: 'Island Hopping in Greece',
          description:
            'Etiam commodo augue nec justo fermentum, eget euismod nunc iaculis.',
        },
      ],
    },
    {
      id: 5,
      name: 'David Wilson',
      imageUrl: '../../../../assets/users/5.jpg',
      verified: true,
      upcomingTrips: [
        {
          id: 1,
          destination: 'Dubai',
          startDate: new Date('2024-04-05'),
          endDate: new Date('2024-04-10'),
        },
        {
          id: 2,
          destination: 'Singapore',
          startDate: new Date('2024-07-25'),
          endDate: new Date('2024-07-30'),
        },
      ],
      pastExperiences: [
        {
          id: 1,
          title: 'Mountaineering in the Himalayas',
          description: 'Ut sed justo libero. Suspendisse id varius urna.',
        },
        {
          id: 2,
          title: 'Cruising the Mediterranean',
          description: 'Vivamus id tortor ac lectus dapibus hendrerit.',
        },
      ]
    },
    {
      id: 6,
      name: 'Sophia Martinez',
      imageUrl: '../../../../assets/users/6.jpg',
      verified: true,
      upcomingTrips: [
        { id: 1, destination: 'Rio de Janeiro', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') },
        { id: 2, destination: 'Bali', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') }
      ],
      pastExperiences: [
        { id: 1, title: 'Exploring Ancient Ruins in Peru', description: 'Curabitur ut finibus felis. Phasellus sit amet vehicula turpis.' },
        { id: 2, title: 'Diving in the Great Barrier Reef', description: 'In et risus vel urna pulvinar laoreet.' }
      ]
    },
    {
      id: 7,
      name: 'Oliver Taylor',
      imageUrl: '../../../../assets/users/7.jpg',
      verified: true,
      upcomingTrips: [
        { id: 1, destination: 'Munich', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') },
        { id: 2, destination: 'Rome', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') }
      ],
      pastExperiences: [
        { id: 1, title: 'Cross-Country Road Getaway', description: 'Nunc commodo sem eu quam congue, ut finibus sem fringilla.' },
        { id: 2, title: 'Trekking in the Himalayas', description: 'Fusce malesuada lorem et tortor fermentum venenatis.' }
      ]
    },
    {
      id: 8,
      name: 'Emma Davis',
      imageUrl: '../../../../assets/users/8.jpg',
      verified: true,
      upcomingTrips: [
        { id: 1, destination: 'Florence', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') },
        { id: 2, destination: 'Prague', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') }
      ],
      pastExperiences: [
        { id: 1, title: 'Camping in the Redwoods', description: 'Sed ultricies libero sit amet iaculis bibendum.' },
        { id: 2, title: 'Exploring the Grand Canyon', description: 'Nam lacinia augue et vehicula finibus.' }
      ]
    },
    {
      id: 9,
      name: 'William Clark',
      imageUrl: '../../../../assets/users/9.jpg',
      verified: true,
      upcomingTrips: [
        { id: 1, destination: 'Istanbul', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') },
        { id: 2, destination: 'Moscow', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') }
      ],
      pastExperiences: [
        { id: 1, title: 'Sailing in the Caribbean', description: 'Pellentesque habitant morbi tristique senectus et netus et males.'},
        { id: 2, title: 'Exploring the Grand Canyon', description: 'Nam lacinia augue et vehicula finibus.' }
      ]
    },
    {
      id: 10,
      name: 'David Wilson',
      imageUrl: '../../../../assets/users/10.jpg',
      verified: true,
      upcomingTrips: [
        { id: 1, destination: 'Dubai', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') },
        { id: 2, destination: 'Singapore', startDate: new Date('2024-07-25'),
        endDate: new Date('2024-07-30') }
      ],
      pastExperiences: [
        { id: 1, title: 'Mountaineering in the Himalayas', description: 'Ut sed justo libero. Suspendisse id varius urna.' },
        { id: 2, title: 'Cruising the Mediterranean', description: 'Vivamus id tortor ac lectus dapibus hendrerit.' }
      ]
    }
  ];
  tripsNearYou: GetawayNearYou[] = [
    {
      id: 1,
      tripUser: {
        id: 1,
        name: 'John Doe',
        imageUrl: '../../../../assets/users/1.jpg',
        verified: true,
      },
      type: 'Solo Getaway',
      isLiked: false,
      location: 'Paris',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Explore the beautiful city of Paris!',
      imageUrl: '../../../../assets/trips/1.jpg'
    },
    {
      id: 2,
      tripUser: {
        id: 2,
        name: 'Alice Smith',
        imageUrl: '../../../../assets/users/2.jpg',
        verified: false,
      },
      type: 'Family Vacation',
      isLiked: false,
      location: 'London',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Enjoy a family trip to London!',
      imageUrl: '../../../../assets/trips/2.jpg'
    },
    {
      id: 3,
      tripUser: {
        id: 3,
        name: 'Emily Johnson',
        imageUrl: '../../../../assets/users/3.jpg',
        verified: true,
      },
      type: 'Adventure Getaway',
      isLiked: false,
      location: 'New York',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Join me for an adventurous journey in New York!',
      imageUrl: '../../../../assets/trips/3.jpg'
    },
    {
      id: 4,
      tripUser: {
        id: 4,
        name: 'Michael Brown',
        imageUrl: '../../../../assets/users/4.jpg',
        verified: false,
      },
      type: 'Group Tour',
      isLiked: false,
      location: 'Tokyo',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Explore the vibrant culture of Tokyo with a group!',
      imageUrl: '../../../../assets/trips/4.jpg'
    },
    {
      id: 5,
      tripUser: {
        id: 5,
        name: 'Sophia Lee',
        imageUrl: '../../../../assets/users/5.jpg',
        verified: true,
      },
      type: 'Road Getaway',
      isLiked: false,
      location: 'California',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'A scenic road trip through California!',
      imageUrl: '../../../../assets/trips/5.jpg'
    },
    {
      id: 6,
      tripUser: {
        id: 6,
        name: 'Ethan Wilson',
        imageUrl: '../../../../assets/users/6.jpg',
        verified: true,
      },
      type: 'Hiking Expedition',
      isLiked: false,
      location: 'Swiss Alps',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Experience the beauty of the Swiss Alps!',
      imageUrl: '../../../../assets/trips/6.jpg'
    },
    {
      id: 7,
      tripUser: {
        id: 7,
        name: 'Olivia Garcia',
        imageUrl: '../../../../assets/users/7.jpg',
        verified: false,
      },
      type: 'Cultural Immersion',
      isLiked: false,
      location: 'Kyoto',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Immerse yourself in the rich culture of Kyoto!',
      imageUrl: '../../../../assets/trips/7.jpg'
    },
    {
      id: 8,
      tripUser: {
        id: 8,
        name: 'William Clark',
        imageUrl: '../../../../assets/users/8.jpg',
        verified: true,
      },
      type: 'Beach Vacation',
      isLiked: false,
      location: 'Maldives',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Relax and unwind on the pristine beaches of the Maldives!',
      imageUrl: '../../../../assets/trips/8.jpg'
    },
    {
      id: 9,
      tripUser: {
        id: 9,
        name: 'Ava Anderson',
        imageUrl: '../../../../assets/users/9.jpg',
        verified: false,
      },
      type: 'Skiing Getaway',
      isLiked: false,
      location: 'Aspen',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Hit the slopes in Aspen for an unforgettable skiing adventure!',
      imageUrl: '../../../../assets/trips/9.jpg'
    },
    {
      id: 10,
      tripUser: {
        id: 10,
        name: 'Liam Martin',
        imageUrl: '../../../../assets/users/10.jpg',
        verified: true,
      },
      isLiked: false,
      type: 'Luxury Cruise',
      location: 'Caribbean',
      startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15'),
      description: 'Sail the Caribbean seas on a luxurious cruise!',
      imageUrl: '../../../../assets/trips/10.jpg'
    }
  ];

  // Add active card tracking
  activeCardIndex: number = 0;

  // Add community features
  communityFeatures = [
    {
      icon: 'group',
      title: 'Find Travel Buddies',
      desc: 'Connect with like-minded travelers and plan adventures together'
    },
    {
      icon: 'explore',
      title: 'Join Group Trips',
      desc: 'Discover and join exciting group travel experiences'
    },
    {
      icon: 'forum',
      title: 'Share Experiences',
      desc: 'Share your travel stories and get tips from fellow travelers'
    }
  ];

  // Add trip type icons mapping
  private tripTypeIcons: { [key: string]: string } = {
    'adventure': 'hiking',
    'cultural': 'museum',
    'beach': 'beach_access',
    'city': 'location_city',
    'nature': 'park',
    'default': 'place'
  };

  constructor(private dialog: MatDialog) {}

  // Add method to set active card
  setActiveCard(index: number): void {
    this.activeCardIndex = index;
  }

  // Add method to get trip type icon
  getTripTypeIcon(type: string): string {
    return this.tripTypeIcons[type.toLowerCase()] || this.tripTypeIcons['default'];
  }

  // Add method to open travel dialog
  openTravelDialog(): void {
    const dialogRef = this.dialog.open(TravelInputDialogComponent, {
      width: '800px',
      height: '90vh',
      panelClass: 'travel-input-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Travel dialog closed with result:', result);
      }
    });
  }

  slidePrevious() {
    const element: HTMLElement | null = document.getElementById('carouselExample');
    if (element) {
      (element as any).carousel('prev');
    }
  }

  // Method to slide to the next item
  slideNext() {
    const element: HTMLElement | null = document.getElementById('carouselExample');
    if (element) {
      (element as any).carousel('next');
    }
  }

  connectWithUser(user: User) {
    // Implement your connect logic here...
    console.log('Connect with user:', user);
  }
  bookIndividual() {
    // Implement your logic for individual booking here
    console.log('Booking for Individual');
  }

  bookGroup() {
    // Implement your logic for group booking here
    console.log('Booking for Group');
  }

  followUser(user: User) {
    // Implement your follow logic here...
    console.log('Follow user:', user);
  }
  connectWithTripUser(tripUser: GetawayUser) {
    // Implement your logic to connect with the trip user
    console.log('Connecting with user:', tripUser);
  }

  showTripDetails(trip: GetawayNearYou) {
    // Implement your logic to show trip details
    console.log('Showing details for trip:', trip);
  }
  toggleLike(trip: GetawayNearYou) {
    trip.isLiked = !trip.isLiked;
  }
  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('LoggedInUser');
    return !!user;
  }
}

