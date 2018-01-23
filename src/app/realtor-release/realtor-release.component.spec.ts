import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorReleaseComponent } from './realtor-release.component';

describe('RealtorReleaseComponent', () => {
  let component: RealtorReleaseComponent;
  let fixture: ComponentFixture<RealtorReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
