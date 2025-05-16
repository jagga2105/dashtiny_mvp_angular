import { Injectable } from '@angular/core';
import { PlacesList } from '../../models/hotels/placesList';
import { placesData } from '../../data/cityData';
@Injectable({
  providedIn: 'root'
})
export class CityDataService {

  constructor() { }
  getCities(): PlacesList[] {
    return placesData;
  }
}
