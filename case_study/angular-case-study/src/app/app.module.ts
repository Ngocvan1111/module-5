import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';

import { Task25DanhSachKhachHangComponent } from './component/customer/task25-danh-sach-khach-hang/task25-danh-sach-khach-hang.component';
import { Task26SuaThongTinKhachHangComponent } from './component/customer/task26-sua-thong-tin-khach-hang/task26-sua-thong-tin-khach-hang.component';
import { Task27ThemMoiKhachHangComponent } from './component/customer/task27-them-moi-khach-hang/task27-them-moi-khach-hang.component';
import { Task28ThemMoiHopDongComponent } from './component/contract/task28-them-moi-hop-dong/task28-them-moi-hop-dong.component';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {EditFacilityComponent} from './component/facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './component/facility/create-facility/create-facility.component';
import { Task29DanhSachHopDongComponent } from './component/contract/task29-danh-sach-hop-dong/task29-danh-sach-hop-dong.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DeleteModalCustomerComponent } from './component/customer/delete-modal-customer/delete-modal-customer.component';
import { DeleteModalContractComponent } from './component/contract/delete-modal-contract/delete-modal-contract.component';
import {HttpClientModule} from '@angular/common/http';

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
    Task29DanhSachHopDongComponent,
    HomeComponent,

    DeleteModalCustomerComponent,

    DeleteModalContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
