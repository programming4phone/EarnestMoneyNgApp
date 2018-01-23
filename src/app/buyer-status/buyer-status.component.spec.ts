import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerStatusComponent } from './buyer-status.component';

describe('BuyerStatusComponent', () => {
  let component: BuyerStatusComponent;
  let fixture: ComponentFixture<BuyerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
