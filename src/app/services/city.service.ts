import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CityData {
  city: string;
  country: string;
  countryCode: string;
  region?: string;
  latitude?: number;
  longitude?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  // You can use any of these APIs based on your needs:
  // private apiUrl = 'https://api.api-ninjas.com/v1/city'; // Requires API key
  // private apiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'; // Requires API key
  private apiUrl = 'http://api.geonames.org/searchJSON'; // Free, requires username
  private username = 'your_username'; // Register at geonames.org

  constructor(private http: HttpClient) {}

  searchCities(query: string): Observable<CityData[]> {
    const params = {
      q: query,
      maxRows: '10',
      username: this.username,
      type: 'json',
      orderby: 'relevance'
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => {
        return response.geonames.map((item: any) => ({
          city: item.name,
          country: item.countryName,
          countryCode: item.countryCode,
          region: item.adminName1,
          latitude: item.lat,
          longitude: item.lng
        }));
      })
    );
  }
}
