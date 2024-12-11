import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSuggestionFormComponent } from './train-suggestion-form.component';

describe('TrainSuggestionFormComponent', () => {
  let component: TrainSuggestionFormComponent;
  let fixture: ComponentFixture<TrainSuggestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainSuggestionFormComponent]
    });
    fixture = TestBed.createComponent(TrainSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
