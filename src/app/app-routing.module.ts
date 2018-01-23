import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashPageComponent } from './splash-page/splash-page.component';
import { RealtorRegisterComponent } from './realtor-register/realtor-register.component';
import { RealtorReleaseComponent } from './realtor-release/realtor-release.component';
import { RealtorRefundComponent } from './realtor-refund/realtor-refund.component';
import { RealtorCancelComponent } from './realtor-cancel/realtor-cancel.component';
import { RealtorStatusComponent } from './realtor-status/realtor-status.component';
import { BuyerDepositComponent } from './buyer-deposit/buyer-deposit.component';
import { BuyerStatusComponent } from './buyer-status/buyer-status.component';
import { AdminStatusComponent } from './admin-status/admin-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashPageComponent },
  { path: 'register', component: RealtorRegisterComponent },
  { path: 'release', component: RealtorReleaseComponent },
  { path: 'refund', component: RealtorRefundComponent },
  { path: 'cancel', component: RealtorCancelComponent },
  { path: 'rstatus', component: RealtorStatusComponent },
  { path: 'deposit', component: BuyerDepositComponent },
  { path: 'bstatus', component: BuyerStatusComponent },
  { path: 'astatus', component: AdminStatusComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
