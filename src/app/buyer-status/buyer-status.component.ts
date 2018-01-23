import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-buyer-status',
  templateUrl: './buyer-status.component.html',
  styleUrls: ['./buyer-status.component.css']
})
export class BuyerStatusComponent implements OnInit {

  public inpUuid: string;
  public inpBuyerAccount: string;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _buyer: string;
  public _realtor: string;
  public _closingAgent: string;
  public _stage: number;
  public _amount: number;
  constructor(private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit() {
    this.showPanel = false;
  }

  public getBuyerAgreementStatus() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('getBuyerAgreementStatus ');
    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('buyer agreement status instance: ' + instance);
        return instance.buyerStatus.call(this.inpUuid, {from: this.inpBuyerAccount});
       })
      .then((value) => {
        console.log('Buyer status uuid: ' + value[0]);
        this._uuid = value[0];
        console.log('Buyer status _buyer: ' + value[1]);
        this._buyer = value[1];
        console.log('Buyer status _realtor: ' + value[2]);
        this._realtor = value[2];
        console.log('Buyer status _closingAgent: ' + value[3]);
        this._closingAgent = value[3];
        console.log('Buyer status _stage: ' + value[4]);
        this._stage = value[4];
        console.log('Buyer status _amount: ' + value[5]);
        this._amount = value[5];

         this.showPanel = true;
         this.showSpinner = false;
      })
      .catch((err) => {
        console.log('buyer status err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Buyer Agreement Status', detail: err.message });
      });
  }
}
