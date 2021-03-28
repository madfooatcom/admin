import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'', component: NotificationComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
