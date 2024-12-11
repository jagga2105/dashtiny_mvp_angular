import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundGetawaysComponent } from './fund-getaways.component';

describe('FundGetawaysComponent', () => {
  let component: FundGetawaysComponent;
  let fixture: ComponentFixture<FundGetawaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundGetawaysComponent]
    });
    fixture = TestBed.createComponent(FundGetawaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
