import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainListingComponent } from './train-listing.component';

describe('TrainListingComponent', () => {
  let component: TrainListingComponent;
  let fixture: ComponentFixture<TrainListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainListingComponent]
    });
    fixture = TestBed.createComponent(TrainListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
