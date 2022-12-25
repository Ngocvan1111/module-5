import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListArticleComponent} from './list-article/list-article.component';

const routes: Routes = [
  {path: 'list-article', component: ListArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
