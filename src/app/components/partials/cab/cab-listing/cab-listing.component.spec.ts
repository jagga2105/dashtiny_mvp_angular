import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabListingComponent } from './cab-listing.component';

describe('CabListingComponent', () => {
  let component: CabListingComponent;
  let fixture: ComponentFixture<CabListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabListingComponent]
    });
    fixture = TestBed.createComponent(CabListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
