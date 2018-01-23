import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RealtorRegisterComponent } from './realtor-register/realtor-register.component';
import { RealtorReleaseComponent } from './realtor-release/realtor-release.component';
import { RealtorRefundComponent } from './realtor-refund/realtor-refund.component';
import { RealtorCancelComponent } from './realtor-cancel/realtor-cancel.component';
import { RealtorStatusComponent } from './realtor-status/realtor-status.component';
import { BuyerDepositComponent } from './buyer-deposit/buyer-deposit.component';
import { BuyerStatusComponent } from './buyer-status/buyer-status.component';

import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { GrowlModule } from 'primeng/components/growl/growl';
import { PanelModule } from 'primeng/components/panel/panel';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { ProgressSpinnerModule } from 'primeng/components/progressspinner/progressspinner';
import { AdminStatusComponent } from './admin-status/admin-status.component';
import { StagePipePipe } from './pipes/stage-pipe/stage-pipe.pipe';

import { EarnestMoneyService } from './services/earnest-money.service';
import { UuidService } from './services/uuid.service';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    RealtorRegisterComponent,
    RealtorReleaseComponent,
    RealtorRefundComponent,
    RealtorCancelComponent,
    RealtorStatusComponent,
    BuyerDepositComponent,
    BuyerStatusComponent,
    AdminStatusComponent,
    StagePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    PanelModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [EarnestMoneyService, UuidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
