import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorCancelComponent } from './realtor-cancel.component';

describe('RealtorCancelComponent', () => {
  let component: RealtorCancelComponent;
  let fixture: ComponentFixture<RealtorCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
