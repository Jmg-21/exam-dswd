import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchApiRoutingModule } from './fetch-api-routing.module';
import { FetchApiComponent } from './fetch-api.component';


@NgModule({
  declarations: [
    FetchApiComponent
  ],
  imports: [
    CommonModule,
    FetchApiRoutingModule
  ]
})
export class FetchApiModule { }
