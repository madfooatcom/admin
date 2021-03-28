import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConfigDetailsComponent } from './config-details/config-details.component';
import { PasswordRulesComponent } from './password-rules/password-rules.component';
import { ListParamterComponent } from './list-paramter/list-paramter.component';

const routes: Routes = [{
  path: '', component: ConfigComponent
},
{
  path: 'details', component: ConfigDetailsComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ConfigComponent, ConfigDetailsComponent, PasswordRulesComponent, ListParamterComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConfigModule { }
