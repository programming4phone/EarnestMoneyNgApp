import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorStatusComponent } from './realtor-status.component';

describe('RealtorStatusComponent', () => {
  let component: RealtorStatusComponent;
  let fixture: ComponentFixture<RealtorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
