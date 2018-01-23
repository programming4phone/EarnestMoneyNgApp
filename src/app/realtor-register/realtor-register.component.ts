import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { UuidService } from '../services/uuid.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-realtor-register',
  templateUrl: './realtor-register.component.html',
  styleUrls: ['./realtor-register.component.css']
})
export class RealtorRegisterComponent implements OnInit {

  public inpRealtorAccount: string;
  public inpAmount: number;
  public generatedUuid: string;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _uuid: string;
  public _realtor: string;
  EarnestMoney: any;
 
  constructor(private earnestMoneyService: EarnestMoneyService, 
    private uuidService: UuidService) { }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  private registerAgreement() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('registerAgreement ');
    this.generatedUuid = this.uuidService.getUuid();

    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('registerAgreement instance: ' + instance);
        return instance.register(this.generatedUuid, {value: this.inpAmount, from: this.inpRealtorAccount});
      })
      .then((result) => {
         console.log('registerAgreement result: ' + result);
         for (let i = 0; i < result.logs.length; i++) {
            const log: any = result.logs[i];
            if (log.event === 'Registered') {

              const uuid: string = log.args._uuid;
              console.log('Registered event log.args.uuid: ' + uuid);
              this._uuid = uuid;

              const realtor = log.args._realtor;
              console.log('Registered event log.args._realtor: ' + realtor);
              this._realtor = realtor;
              this.showPanel = true;
              this.showSpinner = false;
              break;
            }
        }
      })
      .catch((err) => {
        console.log('registerAgreement err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Register Earnest Money Agreement', detail: err.message });
      });
  }
}
