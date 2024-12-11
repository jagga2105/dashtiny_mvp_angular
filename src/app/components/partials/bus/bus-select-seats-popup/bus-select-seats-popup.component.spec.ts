import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSelectSeatsPopupComponent } from './bus-select-seats-popup.component';

describe('BusSelectSeatsPopupComponent', () => {
  let component: BusSelectSeatsPopupComponent;
  let fixture: ComponentFixture<BusSelectSeatsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusSelectSeatsPopupComponent]
    });
    fixture = TestBed.createComponent(BusSelectSeatsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
