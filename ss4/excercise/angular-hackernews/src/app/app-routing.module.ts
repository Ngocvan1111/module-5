import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListArticleComponent} from './list-article/list-article.component';
import {ArticleComponent} from './article/article.component';
import {ImgComponent} from './img/img.component';


const routes: Routes = [
  {path: '', component: ImgComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'list-article', component: ListArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
