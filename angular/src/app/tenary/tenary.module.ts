import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenaryRoutingModule } from './tenary-routing.module';
import { TenaryComponent } from './tenary.component';


@NgModule({
  declarations: [
    TenaryComponent
  ],
  imports: [
    CommonModule,
    TenaryRoutingModule
  ]
})
export class TenaryModule { }
