import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListingComponent } from './flight-listing.component';

describe('FlightListingComponent', () => {
  let component: FlightListingComponent;
  let fixture: ComponentFixture<FlightListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightListingComponent]
    });
    fixture = TestBed.createComponent(FlightListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
