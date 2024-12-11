import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPointsPageComponent } from './dash-points-page.component';

describe('DashPointsPageComponent', () => {
  let component: DashPointsPageComponent;
  let fixture: ComponentFixture<DashPointsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPointsPageComponent]
    });
    fixture = TestBed.createComponent(DashPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
