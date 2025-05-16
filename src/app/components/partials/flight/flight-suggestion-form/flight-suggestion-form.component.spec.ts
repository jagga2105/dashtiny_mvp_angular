import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSuggestionFormComponent } from './flight-suggestion-form.component';

describe('FlightSuggestionFormComponent', () => {
  let component: FlightSuggestionFormComponent;
  let fixture: ComponentFixture<FlightSuggestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSuggestionFormComponent]
    });
    fixture = TestBed.createComponent(FlightSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
