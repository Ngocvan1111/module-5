import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {HomeComponent} from './component/home/home.component';
import {Task29DanhSachHopDongComponent} from './component/contract/task29-danh-sach-hop-dong/task29-danh-sach-hop-dong.component';
import {Task25DanhSachKhachHangComponent} from './component/customer/task25-danh-sach-khach-hang/task25-danh-sach-khach-hang.component';
import {Task27ThemMoiKhachHangComponent} from './component/customer/task27-them-moi-khach-hang/task27-them-moi-khach-hang.component';
import {Task26SuaThongTinKhachHangComponent} from './component/customer/task26-sua-thong-tin-khach-hang/task26-sua-thong-tin-khach-hang.component';
import {CreateFacilityComponent} from './component/facility/create-facility/create-facility.component';
import {Task28ThemMoiHopDongComponent} from './component/contract/task28-them-moi-hop-dong/task28-them-moi-hop-dong.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-facility', component: ListFacilityComponent},
  {path: 'task29-danh-sach-hop-dong', component: Task29DanhSachHopDongComponent},
  {path: 'task25-danh-sach-khach-hang', component: Task25DanhSachKhachHangComponent},
  {path: 'add-new-customer', component: Task27ThemMoiKhachHangComponent},
  {path: 'edit-customer', component: Task26SuaThongTinKhachHangComponent},
  {path: 'create-facility', component: CreateFacilityComponent},
  {path: 'create-contract', component: Task28ThemMoiHopDongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
