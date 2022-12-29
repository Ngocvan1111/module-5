import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictinaryDetailComponent} from './component/dictinary-detail/dictinary-detail.component';
import {DictinaryPageComponent} from './component/dictinary-page/dictinary-page.component';

const routes: Routes = [
  {path: 'detail/:word', component: DictinaryDetailComponent},
  {path: 'detail', component: DictinaryDetailComponent},
  {path: '', component: DictinaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
