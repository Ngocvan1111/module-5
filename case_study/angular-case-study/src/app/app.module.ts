import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ListFacilityComponent } from './common/list-facility/list-facility.component';
import { EditFacilityComponent } from './common/edit-facility/edit-facility.component';
import { CreateFacilityComponent } from './common/create-facility/create-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
