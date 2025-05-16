import { TestBed } from '@angular/core/testing';

import { RailwayStationDataService } from './railway-station-data.service';

describe('RailwayStationDataService', () => {
  let service: RailwayStationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailwayStationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
