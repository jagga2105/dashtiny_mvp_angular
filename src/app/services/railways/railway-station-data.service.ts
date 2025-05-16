import { Injectable } from '@angular/core';
import { RailwayStationList } from '../../models/train/railwayStationList';
import { sample_railwayStations } from '../../data/railwayStationData';
@Injectable({
  providedIn: 'root'
})
export class RailwayStationDataService {
  constructor() {}
  getRailwayStation(): RailwayStationList[] {
    return sample_railwayStations;
  }
}
