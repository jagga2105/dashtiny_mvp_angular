import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../data/world-locations';
import { INDIA_LOCATIONS } from '../data/india-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {}

  getIndianLocations(): Observable<Location> {
    return of(INDIA_LOCATIONS);
  }
}
