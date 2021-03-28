import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './shared/services/auth-guard';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/main', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'mad-wallet',
        loadChildren: () => import('./mad-wallet/mad-wallet.module').then(m => m.MadWalletModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard],
        data: {
          userRoles: [] // All User Can Access but must be login
        }
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'mad-card',
        loadChildren: () => import('./mad-card/mad-card.module').then(m => m.MadCardModule)
      },
      {
        path: 'config',
        loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
      },
      {
        path: 'capslimit',
        loadChildren: () => import('./caps-limit/caps-limit.module').then(m => m.CapsLimitModule)
      },
    ],
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
