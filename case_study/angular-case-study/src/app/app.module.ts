import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { Task25DanhSachKhachHangComponent } from './task25-danh-sach-khach-hang/task25-danh-sach-khach-hang.component';
import { Task26SuaThongTinKhachHangComponent } from './task26-sua-thong-tin-khach-hang/task26-sua-thong-tin-khach-hang.component';
import { Task27ThemMoiKhachHangComponent } from './task27-them-moi-khach-hang/task27-them-moi-khach-hang.component';
import { Task28ThemMoiHopDongComponent } from './task28-them-moi-hop-dong/task28-them-moi-hop-dong.component';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Task25DanhSachKhachHangComponent,
    Task26SuaThongTinKhachHangComponent,
    Task27ThemMoiKhachHangComponent,
    Task28ThemMoiHopDongComponent,
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
