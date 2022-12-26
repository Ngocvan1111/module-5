import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { Task25DanhSachKhachHangComponent } from './component/task25-danh-sach-khach-hang/task25-danh-sach-khach-hang.component';
import { Task26SuaThongTinKhachHangComponent } from './component/task26-sua-thong-tin-khach-hang/task26-sua-thong-tin-khach-hang.component';
import { Task27ThemMoiKhachHangComponent } from './component/task27-them-moi-khach-hang/task27-them-moi-khach-hang.component';
import { Task28ThemMoiHopDongComponent } from './component/task28-them-moi-hop-dong/task28-them-moi-hop-dong.component';
import {ListFacilityComponent} from './component/list-facility/list-facility.component';
import {EditFacilityComponent} from './component/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './component/create-facility/create-facility.component';
import { Task29DanhSachHopDongComponent } from './component/task29-danh-sach-hop-dong/task29-danh-sach-hop-dong.component';

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
    CreateFacilityComponent,
    Task29DanhSachHopDongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
