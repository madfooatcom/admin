import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AccountModule } from './account/account.module';
import { ConfigModule } from './config/config.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MadCardModule } from './mad-card/mad-card.module';
import { MadWalletModule } from './mad-wallet/mad-wallet.module';
import { NotificationModule } from './notification/notification.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CapsLimitModule } from './caps-limit/caps-limit.module';
import { AuthInterceptor } from './shared/services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AccountModule,
    ConfigModule,
    DashboardModule,
    MadCardModule,
    MadWalletModule,
    NotificationModule,
    TransactionModule,
    UserModule,
    WalletModule,
    CapsLimitModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS, 
  //   useClass: AuthInterceptor, 
  //   multi: true
  // }
],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
