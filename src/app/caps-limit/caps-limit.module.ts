import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddEditCapsLimitComponent } from './add-edit-capsLimit/add-edit-capsLimit.component';

const routes: Routes = [{
  path: '', component: ListComponent
},
{
  path: 'details/:id', component: DetailsComponent
},
{
  path: 'add', component: AddEditCapsLimitComponent, data :{ pageMood:'add'}
},
{
  path: 'edit/:id', component: AddEditCapsLimitComponent, data :{ pageMood:'edit'}
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ListComponent, DetailsComponent, AddEditCapsLimitComponent]
})
export class CapsLimitModule { }
