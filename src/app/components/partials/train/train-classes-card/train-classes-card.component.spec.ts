import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainClassesCardComponent } from './train-classes-card.component';

describe('TrainClassesCardComponent', () => {
  let component: TrainClassesCardComponent;
  let fixture: ComponentFixture<TrainClassesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainClassesCardComponent]
    });
    fixture = TestBed.createComponent(TrainClassesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
