import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListingComponent } from './components/partials/flight/flight-listing/flight-listing.component';
import { HotelListingComponent } from './components/partials/hotels/hotel-listing/hotel-listing.component';
import { TrainListingComponent } from './components/partials/train/train-listing/train-listing.component';
import { BusListingComponent } from './components/partials/bus/bus-listing/bus-listing.component';
import { CabListingComponent } from './components/partials/cab/cab-listing/cab-listing.component';
import { flightsHomeComponent } from './components/partials/flight/flights-home/flights-home.component';
import { BookingsComponent } from './components/pages/bookings/bookings.component';
import { CommunityComponent } from './components/pages/community/community.component';
import { HireUsComponent } from './components/pages/hire-us/hire-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BookingConfirmationComponent } from './components/pages/booking-confirmation/booking-confirmation.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const routes: Routes = [
  { path: 'flight', component: FlightListingComponent },
  { path: 'hotel', component: HotelListingComponent },
  { path: 'train', component: TrainListingComponent },
  { path: 'bus', component: BusListingComponent },
  { path: 'cab', component: CabListingComponent },
  { path: '', component: HomeComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'hire-us', component: HireUsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'confirmation', component: BookingConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
