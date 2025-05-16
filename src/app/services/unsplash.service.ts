import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private readonly API_URL = 'https://api.unsplash.com/search/photos';
  
  constructor(private http: HttpClient) {}

  searchPhotos(query: string, count: number = 1): Observable<string[]> {
    const params = {
      query,
      client_id: environment.unsplashAccessKey,
      per_page: count,
      orientation: 'landscape'
    };

    return this.http.get(this.API_URL, { params }).pipe(
      map((response: any) => {
        return response.results.map((photo: any) => photo.urls.regular);
      })
    );
  }
}
