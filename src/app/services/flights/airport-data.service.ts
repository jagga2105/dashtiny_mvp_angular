import { Injectable } from '@angular/core';
import { AirportList } from '../../models/flight/airportList';
import { sample_airport } from 'src/app/data/airportData';

@Injectable({
  providedIn: 'root',
})
export class AirportService {

  constructor() {}

  getAirports(): AirportList[] {
    return sample_airport;
  }
}
