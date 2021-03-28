import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'', component: WalletComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WalletComponent]
})
export class WalletModule { }
