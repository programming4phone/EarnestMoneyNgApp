import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorRegisterComponent } from './realtor-register.component';

describe('RealtorRegisterComponent', () => {
  let component: RealtorRegisterComponent;
  let fixture: ComponentFixture<RealtorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
