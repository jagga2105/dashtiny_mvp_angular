import { TestBed } from '@angular/core/testing';

import { AirportService } from './airport-data.service';

describe('AirportDataService', () => {
  let service: AirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
