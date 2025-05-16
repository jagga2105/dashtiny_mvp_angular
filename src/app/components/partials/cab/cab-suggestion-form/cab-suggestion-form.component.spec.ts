import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabSuggestionFormComponent } from './cab-suggestion-form.component';

describe('CabSuggestionFormComponent', () => {
  let component: CabSuggestionFormComponent;
  let fixture: ComponentFixture<CabSuggestionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabSuggestionFormComponent]
    });
    fixture = TestBed.createComponent(CabSuggestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
