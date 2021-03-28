import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MadDashboardComponent } from './mad-dashboard/mad-dashboard.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'main', component: DashboardComponent },
  { path: 'mad-dashboard', component: MadDashboardComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DashboardComponent, MadDashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
