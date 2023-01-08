import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component3Component } from './component3/component3/component3.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    DeleteModalComponent,
    Component3Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
