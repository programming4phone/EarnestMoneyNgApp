import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-realtor-cancel',
  templateUrl: './realtor-cancel.component.html',
  styleUrls: ['./realtor-cancel.component.css']
})
export class RealtorCancelComponent implements OnInit {

  public inpUuid: string;
  public inpRealtorAccount: number;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _realtor: string;

  constructor(private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  public cancelAgreement() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('cancelAgreement ');

    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        return instance.cancel(this.inpUuid, {from: this.inpRealtorAccount});
      })
      .then((result) => {
         console.log('cancelAgreement result: ' + result);
         for (let i = 0; i < result.logs.length; i++) {
            const log: any = result.logs[i];

            if (log.event === 'Cancelled') {
              const uuid: string = log.args._uuid;
              console.log('Cancelled event log.args.uuid: ' + uuid);
              this._uuid = uuid;

              const realtor = log.args._realtor;
              console.log('Cancelled event log.args._realtor: ' + realtor);
              this._realtor = realtor;

              this.showPanel = true;
              this.showSpinner = false;
              break;
            }
        }
      })
      .catch((err) => {
        console.log('cancelAgreement err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Realtor Cancel Agreement', detail: err.message });
      });

  }
}