import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BookingsComponent } from './components/pages/bookings/bookings.component';
import { CommunityComponent } from './components/pages/community/community.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BookingConfirmationComponent } from './components/pages/booking-confirmation/booking-confirmation.component';
import { DashPointsPageComponent } from './components/pages/dash-points-page/dash-points-page.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { FindCompanionComponent } from './components/pages/find-companion/find-companion.component';
import { FundGetawaysComponent } from './components/pages/fund-getaways/fund-getaways.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightSuggestionFormComponent } from './components/partials/flight/flight-suggestion-form/flight-suggestion-form.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightListingComponent } from './components/partials/flight/flight-listing/flight-listing.component';
import { SubmittedDataServiceService } from './submitted-data-service.service';
import { RangeSliderDirective } from './range-slider.directive';
import { HotelSuggestionFormComponent } from './components/partials/hotels/hotel-suggestion-form/hotel-suggestion-form.component';
import { HotelListingComponent } from './components/partials/hotels/hotel-listing/hotel-listing.component';
import { HotelCardsComponent } from './components/partials/hotels/hotel-cards/hotel-cards.component';
import {FlightCardComponent} from './components/partials/flight/flight-card/flight-card.component';
import { TrainCardComponent } from './components/partials/train/train-card/train-card.component';
import { TrainClassesCardComponent } from './components/partials/train/train-classes-card/train-classes-card.component';
import { CabCardComponent } from './components/partials/cab/cab-card/cab-card.component';
import { TrainListingComponent } from './components/partials/train/train-listing/train-listing.component';
import { TrainSuggestionFormComponent } from './components/partials/train/train-suggestion-form/train-suggestion-form.component';
import { BusSuggestionFormComponent } from './components/partials/bus/bus-suggestion-form/bus-suggestion-form.component';
import { BusListingComponent } from './components/partials/bus/bus-listing/bus-listing.component';
import { CabSuggestionFormComponent } from './components/partials/cab/cab-suggestion-form/cab-suggestion-form.component';
import { CabListingComponent } from './components/partials/cab/cab-listing/cab-listing.component';
import { BusCardComponent } from './components/partials/bus/bus-card/bus-card.component';
import { BusSelectSeatsPopupComponent } from './components/partials/bus/bus-select-seats-popup/bus-select-seats-popup.component';
import { MoviesComponent } from './components/partials/movies/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { flightsHomeComponent } from './components/partials/flight/flights-home/flights-home.component';
import { FlightComparisionComponent } from './components/partials/flight/flight-comparision/flight-comparision.component';
import { ChatPopupComponent } from './components/partials/chat-popup/chat-popup.component';
import { FlightListingDetailComponent } from './components/partials/flight/flight-listing-detail/flight-listing-detail.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HireUsComponent } from './components/pages/hire-us/hire-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AirportService } from '../app/services/flights/airport-data.service';
import { HotelsHomeComponent } from './components/partials/hotels/hotels-home/hotels-home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { UserCardComponent } from './components/partials/community/user-card/user-card.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SuggestionFormComponent } from './components/partials/suggestion-form/suggestion-form.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingsComponent,
    CommunityComponent,
    LoginComponent,
    BookingConfirmationComponent,
    DashPointsPageComponent,
    ProfileComponent,
    FindCompanionComponent,
    FundGetawaysComponent,
    FlightSuggestionFormComponent,
    FlightListingComponent,
    RangeSliderDirective,
    HotelSuggestionFormComponent,
    HotelListingComponent,
    HotelCardsComponent,
    FlightCardComponent,
    TrainCardComponent,
    TrainClassesCardComponent,
    CabCardComponent,
    MoviesComponent,
    TrainListingComponent,
    TrainSuggestionFormComponent,
    BusSuggestionFormComponent,
    BusListingComponent,
    CabSuggestionFormComponent,
    CabListingComponent,
    BusCardComponent,
    BusSelectSeatsPopupComponent,
      flightsHomeComponent,
      FlightComparisionComponent,
      ChatPopupComponent,
      FlightListingDetailComponent,
      StarRatingComponent,
      HireUsComponent,
      HomeComponent,
      HotelsHomeComponent,
      FooterComponent,
      UserCardComponent,
      DashboardComponent,
      SuggestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    HttpClientModule,
    MatAutocompleteModule,
    GoogleMapsModule
  ],
  providers: [SubmittedDataServiceService,AirportService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
