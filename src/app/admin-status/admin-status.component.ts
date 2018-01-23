import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { EarnestMoneyService } from '../services/earnest-money.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin-status',
  templateUrl: './admin-status.component.html',
  styleUrls: ['./admin-status.component.css']
})
export class AdminStatusComponent implements OnInit {

  public inpAdminAccount1: string;
  public inpAdminAccount2: string;
  public inpUserAccount: string;
  public msgs: Message[] = [];
  public showPanel: boolean;
  public showSpinner: boolean;
  public _balance: number;
  EarnestMoney: any;
 
  constructor(private earnestMoneyService: EarnestMoneyService) {
  }

  ngOnInit() {
    this.showPanel = false;
    this.showSpinner = false;
    console.log(this);
  }

  public getUserAccountBalance() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('getUserAccountBalance ');
    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('admin status instance: ' + instance);
        return instance.getAccountBalance.call(this.inpUserAccount,{from: this.inpAdminAccount1});
       })
      .then((balance) => {
         this._balance = balance.toNumber()
         console.log('user account: ' + this.inpAdminAccount1);
         console.log('account balance: ' + this._balance);
         this.showPanel = true;
         this.showSpinner = false;
      })
      .catch((err) => {
        console.log('admin status err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Admin Status - Get Account Balance', detail: err.message });
      });
  }

  public getContractBalance() {
    this.showPanel = false;
    this.showSpinner = true;
    console.log('getContractBalance ');
    this.earnestMoneyService.getEarnestMoney().at(environment.contractDeploymentAddress)
      .then((instance) => {
        console.log('admin status instance: ' + instance);
        return instance.getContractBalance.call({from:this.inpAdminAccount2});
       })
      .then((balance) => {
         this._balance = balance.toNumber()
         console.log('contract balance: ' + this._balance);
         this.showPanel = true;
         this.showSpinner = false;
      })
      .catch((err) => {
        console.log('admin status err: ' + err);
        this.showSpinner = false;
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Admin Status - Get Contract Balance', detail: err.message });
      });
  }


}
