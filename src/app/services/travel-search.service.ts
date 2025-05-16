import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelSearchService {
  private readonly HOTELS_API = 'https://hotels4.p.rapidapi.com/v2';
  
  constructor(private http: HttpClient) {}

  searchHotels(location: string, checkIn: string, checkOut: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.rapidApiKey,
      'X-RapidAPI-Host': environment.rapidApiHosts.hotels || 'hotels4.p.rapidapi.com'
    });

    return this.getDestinationId(location, headers).pipe(
      switchMap(id => {
        if (!id) return of([]);
        return this.searchByDestination(id, checkIn, checkOut, headers);
      }),
      catchError(() => of([]))
    );
  }

  private getDestinationId(location: string, headers: HttpHeaders): Observable<string> {
    return this.http.get(`${this.HOTELS_API}/locations/search`, {
      headers,
      params: { query: location, locale: 'en_IN' }
    }).pipe(
      map((response: any) => {
        const cityGroup = response.suggestions.find((s: any) => s.group === 'CITY_GROUP');
        return cityGroup?.entities[0]?.destinationId;
      })
    );
  }

  private searchByDestination(id: string, checkIn: string, checkOut: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(`${this.HOTELS_API}/properties/list`, {
      headers,
      params: {
        destinationId: id,
        checkIn,
        checkOut,
        adults1: '1',
        sortOrder: 'PRICE',
        pageNumber: '1',
        pageSize: '25'
      }
    }).pipe(
      map((response: any) => this.processHotelResults(response))
    );
  }

  private processHotelResults(response: any): any[] {
    try {
      return response.data.body.searchResults.results.map((hotel: any) => ({
        id: hotel.id,
        name: hotel.name,
        rating: hotel.starRating,
        price: hotel.ratePlan?.price?.current || 'Price not available',
        location: hotel.neighborhood?.name || hotel.address?.locality || '',
        image: hotel.optimizedThumbUrls?.srpDesktop || 'https://placehold.co/300x200',
        amenities: (hotel.amenities || []).slice(0, 5)
      }));
    } catch (error) {
      console.error('Error processing hotel results:', error);
      return [];
    }
  }
}
