import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-buyer-deposit',
  templateUrl: './buyer-deposit.component.html',
  styleUrls: ['./buyer-deposit.component.css']
})
export class BuyerDepositComponent implements OnInit {

  public inpBuyerAccount: string;
  public inpUuid: string;
  public inpAmount: number;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _buyer: string;
  public _realtor: string;
  public _amount: number;
  EarnestMoney: any;

  constructor(private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  public depositFunds() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('depositFunds ');

    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('depositFunds instance: ' + instance);
        return instance.deposit(this.inpUuid, {value: this.inpAmount, from: this.inpBuyerAccount});
      })
      .then((result) => {
         console.log('depositFunds result: ' + result);
         for (let i = 0; i < result.logs.length; i++) {
            const log: any = result.logs[i];
            if (log.event === 'Deposited') {

              const uuid: string = log.args._uuid;
              console.log('Deposited event log.args.uuid: ' + uuid);
              this._uuid = uuid;

              const buyer = log.args._buyer;
              console.log('Deposited event log.args._buyer: ' + buyer);
              this._buyer = buyer;

              const realtor = log.args._realtor;
              console.log('Deposited event log.args._realtor: ' + realtor);
              this._realtor = realtor;

              const amount = log.args._amount;
              console.log('Deposited event log.args._amount: ' + amount);
              this._amount = amount;

              this.showPanel = true;
              this.showSpinner = false;
              break;
            }
        }
      })
      .catch((err) => {
        console.log('depositFunds err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Buyer Deposit Funds', detail: err.message });
      });
  }
}
