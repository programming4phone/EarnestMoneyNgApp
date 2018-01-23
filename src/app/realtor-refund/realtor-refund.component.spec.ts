import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorRefundComponent } from './realtor-refund.component';

describe('RealtorRefundComponent', () => {
  let component: RealtorRefundComponent;
  let fixture: ComponentFixture<RealtorRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
