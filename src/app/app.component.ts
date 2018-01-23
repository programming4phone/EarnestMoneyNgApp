import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { MenuItem } from 'primeng/components/common/menuitem';
import { EarnestMoneyService } from './services/earnest-money.service';

const Web3 = require('web3');
const contract = require('truffle-contract');
const earnestmoney_artifacts = require('./contracts/EarnestMoney.json');

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  EarnestMoney: any = contract(earnestmoney_artifacts);
  items: MenuItem[];
  web3: any;
  title = 'Earnest Money Agreements';

  constructor(private _ngZone: NgZone, private earnestMoneyService: EarnestMoneyService) { }

  ngOnInit(): void {
       this.items = [
                {label: 'Home', icon: 'fa-home', routerLink: ['/home']},
                {label: 'Register Agreement', icon: 'fa-sign-in', routerLink: ['/register']},
                {label: 'Release', icon: 'fa-mail-forward', routerLink: ['/release']},
                {label: 'Refund', icon: 'fa-mail-reply', routerLink: ['/refund']},
                {label: 'Cancel Agreement', icon: 'fa-remove', routerLink: ['/cancel']},
                {label: 'Realtor Status', icon: 'fa-info', routerLink: ['/rstatus']},
                {label: 'Deposit', icon: ' fa-share-square-o', routerLink: ['/deposit']},
                {label: 'Buyer Status', icon: 'fa-info', routerLink: ['/bstatus']},
                {label: 'Admin Status', icon: 'fa-info', routerLink: ['/astatus']}
              ];
  }

  @HostListener('window:load')
  windowLoaded() {
    this.checkAndInstantiateWeb3();
    this.onReady();
  }

  checkAndInstantiateWeb3 = () => {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      console.warn(
        'Using web3 detected from external source. If you find that your accounts don\'t appear ' +
        'ensure you\'ve configured that source properly. If using MetaMask, see the following link. ' +
        'Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        'No web3 detected. Falling back to Ganache test http://127.0.0.1:7545. ' +
        'You should remove this fallback when you deploy live, as it\'s inherently insecure. ' +
        'Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    }
    console.log('web3:' + this.web3);
  }

  onReady = () => {
    // Bootstrap the EarnestMoney abstraction for Use.
    this.EarnestMoney.setProvider(this.web3.currentProvider);
    console.log('EarnestMoney:' + this.EarnestMoney);

    // This is run from window:load and ZoneJS is not aware of it we need to use _ngZone.run()
    this._ngZone.run(() => {
      this.earnestMoneyService.setWeb3(this.web3);
      this.earnestMoneyService.setEarnestMoney(this.EarnestMoney);
    });
  }

}
