import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from './component/list-facility/list-facility.component';
import {HomeComponent} from './component/home/home.component';
import {Task29DanhSachHopDongComponent} from './component/task29-danh-sach-hop-dong/task29-danh-sach-hop-dong.component';
import {Task25DanhSachKhachHangComponent} from './component/task25-danh-sach-khach-hang/task25-danh-sach-khach-hang.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list-facility', component: ListFacilityComponent},
  {path: 'task29-danh-sach-hop-dong', component: Task29DanhSachHopDongComponent},
  {path: 'task25-danh-sach-khach-hang', component: Task25DanhSachKhachHangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
