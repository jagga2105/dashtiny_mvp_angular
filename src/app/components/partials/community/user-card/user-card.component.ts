import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface User {
  id: number;
  name: string;
  imageUrl: string;
  verified: boolean;
  upcomingTrips: UpcomingTrip[];
  pastExperiences: Experience[];
}

export interface UpcomingTrip {
  id: number;
  destination: string;
  startDate: Date;
  endDate: Date;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;
  @Output() connect: EventEmitter<User> = new EventEmitter<User>();
  @Output() follow: EventEmitter<User> = new EventEmitter<User>();

  connectWithUser(user: User) {
    this.connect.emit(user);
  }

  followUser(user: User) {
    this.follow.emit(user);
  }
  openUpcomingModal() {
    const upcomingModal = document.getElementById('upcomingTripsModal');
    if (upcomingModal) {
      upcomingModal.style.display = 'block';
    }
  }

  closeUpcomingModal() {
    const upcomingModal = document.getElementById('upcomingTripsModal');
    if (upcomingModal) {
      upcomingModal.style.display = 'none';
    }
  }

  openPastExperiencesModal() {
    const pastExperiencesModal = document.getElementById('pastExperiencesModal');
    if (pastExperiencesModal) {
      pastExperiencesModal.style.display = 'block';
    }
  }

  closePastExperiencesModal() {
    const pastExperiencesModal = document.getElementById('pastExperiencesModal');
    if (pastExperiencesModal) {
      pastExperiencesModal.style.display = 'none';
    }
  }
  onMouseEnter(event: Event) {
    const target = event.target as HTMLElement;
    const tooltip = target.querySelector('.tooltip') as HTMLElement;
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
  }

  onMouseLeave(event: Event) {
    const target = event.target as HTMLElement;
    const tooltip = target.querySelector('.tooltip') as HTMLElement;
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  }
}
