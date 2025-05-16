import { TestBed } from '@angular/core/testing';

import { FlightListingService } from './flight-listing.service';

describe('FlightListingService', () => {
  let service: FlightListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
