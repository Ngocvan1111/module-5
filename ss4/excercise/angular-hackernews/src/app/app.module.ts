import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { ListArticleComponent } from './list-article/list-article.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    ListArticleComponent,
    ImgComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
