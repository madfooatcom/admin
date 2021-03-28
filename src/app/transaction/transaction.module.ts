import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  { path:'', component: ListComponent},
  { path:'details/:id', component: DetailsComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ListComponent, DetailsComponent]
})
export class TransactionModule { }
