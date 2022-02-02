import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenaryComponent } from './tenary.component';

const routes: Routes = [{ path: '', component: TenaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenaryRoutingModule { }
