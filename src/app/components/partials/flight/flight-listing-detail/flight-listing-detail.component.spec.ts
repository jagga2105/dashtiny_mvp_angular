import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListingDetailComponent } from './flight-listing-detail.component';

describe('FlightListingDetailComponent', () => {
  let component: FlightListingDetailComponent;
  let fixture: ComponentFixture<FlightListingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightListingDetailComponent]
    });
    fixture = TestBed.createComponent(FlightListingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
