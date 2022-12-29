import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictinaryPageComponent } from './component/dictinary-page/dictinary-page.component';
import { DictinaryDetailComponent } from './component/dictinary-detail/dictinary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictinaryPageComponent,
    DictinaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
