import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCompanionComponent } from './find-companion.component';

describe('FindCompanionComponent', () => {
  let component: FindCompanionComponent;
  let fixture: ComponentFixture<FindCompanionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindCompanionComponent]
    });
    fixture = TestBed.createComponent(FindCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
