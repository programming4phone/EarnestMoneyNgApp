import { TestBed, inject } from '@angular/core/testing';

import { EarnestMoneyService } from './earnest-money.service';

describe('EarnestMoneyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarnestMoneyService]
    });
  });

  it('should be created', inject([EarnestMoneyService], (service: EarnestMoneyService) => {
    expect(service).toBeTruthy();
  }));
});
