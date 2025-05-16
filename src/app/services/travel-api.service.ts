import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelApiService {
  // Free Travel APIs
  private readonly AMADEUS_API = 'https://test.api.amadeus.com/v2';
  private readonly RAPID_API = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap';
  
  constructor(private http: HttpClient) {}

  searchFlights(from: string, to: string, date: string): Observable<any> {
    // Using RapidAPI Travel API
    const headers = {
      'X-RapidAPI-Key': environment.rapidApiKey,
      'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
    };

    return this.http.get(this.RAPID_API, {
      headers,
      params: {
        origin: from,
        destination: to,
        depart_date: date,
        currency: 'INR'
      }
    });
  }

  searchHotels(city: string, checkIn: string, checkOut: string): Observable<any> {
    // Using Hotels API from RapidAPI
    const headers = {
      'X-RapidAPI-Key': environment.rapidApiKey,
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    };

    return this.http.get('https://hotels4.p.rapidapi.com/properties/list', {
      headers,
      params: {
        destinationId: city,
        pageNumber: '1',
        pageSize: '10',
        checkIn,
        checkOut,
        adults1: '1'
      }
    });
  }
}
