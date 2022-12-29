import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task25DanhSachKhachHangComponent } from './task25-danh-sach-khach-hang.component';

describe('Task25DanhSachKhachHangComponent', () => {
  let component: Task25DanhSachKhachHangComponent;
  let fixture: ComponentFixture<Task25DanhSachKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task25DanhSachKhachHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task25DanhSachKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
