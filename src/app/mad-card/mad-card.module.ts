import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadCardComponent } from './mad-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'', component: MadCardComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MadCardComponent]
})
export class MadCardModule { }
