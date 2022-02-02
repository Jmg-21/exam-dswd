import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchApiComponent } from './fetch-api.component';

const routes: Routes = [{ path: '', component: FetchApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FetchApiRoutingModule { }
