import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-realtor-refund',
  templateUrl: './realtor-refund.component.html',
  styleUrls: ['./realtor-refund.component.css']
})
export class RealtorRefundComponent implements OnInit {

  public inpUuid: string;
  public inpRealtorAccount: number;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _buyer: string;
  public _realtor: string;
  public _amount: number;

  constructor(private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  public refundFunds() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('refundFunds ');

    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        return instance.refund(this.inpUuid, {from: this.inpRealtorAccount}); 
      })
      .then((result) => {
         console.log('refundFunds result: ' + result);
         for (let i = 0; i < result.logs.length; i++) {
            const log: any = result.logs[i];

            if (log.event === 'Refunded') {
              const uuid: string = log.args._uuid;
              console.log('Refunded event log.args.uuid: ' + uuid);
              this._uuid = uuid;

              const buyer = log.args._buyer;
              console.log('Refunded event log.args._buyer: ' + buyer);
              this._buyer = buyer;

              const realtor = log.args._realtor;
              console.log('Refunded event log.args._realtor: ' + realtor);
              this._realtor = realtor;

              const amount = log.args._amount;
              console.log('Refunded event log.args._amount: ' + amount);
              this._amount = amount;

              this.showPanel = true;
              this.showSpinner = false;
              break;
            }
        }
      })
      .catch((err) => {
        console.log('refundFunds err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Realtor Refund Funds', detail: err.message });
      });
  }
}
