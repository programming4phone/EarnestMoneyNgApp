import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-realtor-release',
  templateUrl: './realtor-release.component.html',
  styleUrls: ['./realtor-release.component.css']
})
export class RealtorReleaseComponent implements OnInit {

  public inpUuid: string;
  public inpRealtorAccount: string;
  public inpClosingAgentAccount: string;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _buyer: string;
  public _realtor: string;
  public _closingAgent: string;
  public _amount: number;

  constructor(private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  public releaseFunds() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('releaseFunds ');

    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        return instance.release(this.inpUuid, this.inpClosingAgentAccount, {from: this.inpRealtorAccount}); 
      })
      .then((result) => {
         console.log('releaseFunds result: ' + result);
         for (let i = 0; i < result.logs.length; i++) {
            const log: any = result.logs[i];
            if (log.event === 'Released') {
              const uuid: string = log.args._uuid;
              console.log('Released event log.args.uuid: ' + uuid);
              this._uuid = uuid;

              const buyer = log.args._buyer;
              console.log('Released event log.args._buyer: ' + buyer);
              this._buyer = buyer;

              const realtor = log.args._realtor;
              console.log('Released event log.args._realtor: ' + realtor);
              this._realtor = realtor;
              
              const closingAgent = log.args._closingAgent;
              console.log('Released event log.args._closingAgent: ' + closingAgent);
              this._closingAgent = closingAgent;

              const amount = log.args._amount;
              console.log('Released event log.args._amount: ' + amount);
              this._amount = amount;

              this.showPanel = true;
              this.showSpinner = false;
              break;
            }
        }
      })
      .catch((err) => {
        console.log('releaseFunds err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Realtor Release Funds', detail: err.message });
      });
  }
}
