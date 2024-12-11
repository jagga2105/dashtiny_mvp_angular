import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightDetailsService {
  showDetails = false;

  toggleDetails() {
    this.showDetails = true;
  }
}
