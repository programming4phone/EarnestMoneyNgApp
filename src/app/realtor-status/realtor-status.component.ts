import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-realtor-status',
  templateUrl: './realtor-status.component.html',
  styleUrls: ['./realtor-status.component.css']
})
export class RealtorStatusComponent implements OnInit {

  public inpUuid: string;
  public inpRealtorAccount: string;
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

  public getRealtorAgreementStatus() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('getRealtorAgreementStatus ');
    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('relator agreement status instance: ' + instance);
        return instance.realtorStatus.call(this.inpUuid, {from: this.inpRealtorAccount});
       })
      .then((value) => {
        console.log('Realtor status uuid: ' + value[0]);
        this._uuid = value[0];
        console.log('Realtor status _buyer: ' + value[1]);
        this._buyer = value[1];
        console.log('Realtor status _realtor: ' + value[2]);
        this._realtor = value[2];
        console.log('Realtor status _closingAgent: ' + value[3]);
        this._closingAgent = value[3];
        console.log('Realtor status _stage: ' + value[4]);
        this._stage = value[4];
        console.log('Realtor status _amount: ' + value[5]);
        this._amount = value[5];

         this.showPanel = true;
         this.showSpinner = false;
      })
      .catch((err) => {
        console.log('realtor status err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Realtor Agreement Status', detail: err.message });
      });
  }
}
