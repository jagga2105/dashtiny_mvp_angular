import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComparisionComponent } from './flight-comparision.component';

describe('FlightComparisionComponent', () => {
  let component: FlightComparisionComponent;
  let fixture: ComponentFixture<FlightComparisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightComparisionComponent]
    });
    fixture = TestBed.createComponent(FlightComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
