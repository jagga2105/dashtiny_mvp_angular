import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardsComponent } from './hotel-cards.component';

describe('HotelCardsComponent', () => {
  let component: HotelCardsComponent;
  let fixture: ComponentFixture<HotelCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelCardsComponent]
    });
    fixture = TestBed.createComponent(HotelCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
