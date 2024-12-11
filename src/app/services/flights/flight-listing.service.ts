import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightData } from '../../data/flightData';
import {FlightList} from '../../models/flight/flightList';

@Injectable({
  providedIn: 'root'
})
export class FlightListingService {
  private _showFlightListing = new BehaviorSubject<boolean>(false);
  showFlightListing$ = this._showFlightListing.asObservable();

  setShowFlightListing(value: boolean): void {
    this._showFlightListing.next(value);
  }

  getShowFlightListing(): boolean {
    return this._showFlightListing.getValue();
  }
  getFlights(): FlightList[] {
    return FlightData;
  }
}
