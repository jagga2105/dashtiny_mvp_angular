import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSuggestionFormComponent } from './bus-suggestion-form.component';

describe('BusSuggestionFormComponent', () => {
  let component: BusSuggestionFormComponent;
  let fixture: ComponentFixture<BusSuggestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusSuggestionFormComponent]
    });
    fixture = TestBed.createComponent(BusSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
