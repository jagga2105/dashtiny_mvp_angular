import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSuggestionFormComponent } from './hotel-suggestion-form.component';

describe('HotelSuggestionFormComponent', () => {
  let component: HotelSuggestionFormComponent;
  let fixture: ComponentFixture<HotelSuggestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelSuggestionFormComponent]
    });
    fixture = TestBed.createComponent(HotelSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
