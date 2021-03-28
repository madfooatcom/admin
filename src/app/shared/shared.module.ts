import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelect2Module } from 'ng-select2';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgApexchartsModule } from 'ng-apexcharts';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    CommonModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // NgApexchartsModule,
    NgxPaginationModule,
    NgSelect2Module,
    CdkTableModule,
    NgbModule,
    HttpClientModule,
  ],
  exports:[
    TranslateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // NgApexchartsModule,
    NgxPaginationModule,
    NgSelect2Module,
    CdkTableModule,
    NgbModule,
    HttpClientModule,
  ],
  declarations: [LayoutComponent, NavbarComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [TranslateService],
})
export class SharedModule { }
