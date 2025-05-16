import { ComponentFixture, TestBed } from '@angular/core/testing';

import { flightsHomeComponent } from './flights-home.component';

describe('DashtinyHomeComponent', () => {
  let component: flightsHomeComponent;
  let fixture: ComponentFixture<flightsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [flightsHomeComponent]
    });
    fixture = TestBed.createComponent(flightsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
