import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';

const routes:Routes=[
  {path:'', component: ListComponent},
  {path:'details/:id', component: DetailsComponent},
  {path:'add', component: CreateAdminComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent, DetailsComponent, CreateAdminComponent]
})
export class AdminModule { }
