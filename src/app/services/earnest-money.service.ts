import {Injectable} from '@angular/core';

@Injectable()
export class EarnestMoneyService {
  EarnestMoney: any;
  web3: any;

  constructor() {}

  public getWeb3(): any {
    return this.web3;
  }

  public setWeb3(web3: any) {
    this.web3 = web3;
  }

  public getEarnestMoney(): any {
    return this.EarnestMoney;
  }

  public setEarnestMoney(EarnestMoney: any) {
    this.EarnestMoney = EarnestMoney;
  }
}
