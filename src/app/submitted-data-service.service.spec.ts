import { TestBed } from '@angular/core/testing';

import { SubmittedDataServiceService } from './submitted-data-service.service';

describe('SubmittedDataServiceService', () => {
  let service: SubmittedDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmittedDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
