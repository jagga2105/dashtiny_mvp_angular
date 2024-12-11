import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelListingService {
  private _showHotelListing = new BehaviorSubject<boolean>(false);
  showHotelListing$ = this._showHotelListing.asObservable();

  setShowFlightListing(value: boolean): void {
    this._showHotelListing.next(value);
  }

  getShowFlightListing(): boolean {
    return this._showHotelListing.getValue();
  }
}
