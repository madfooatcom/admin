import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadWalletComponent } from './mad-wallet.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'', component: MadWalletComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MadWalletComponent]
})
export class MadWalletModule { }
