import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task26SuaThongTinKhachHangComponent } from './task26-sua-thong-tin-khach-hang.component';

describe('Task26SuaThongTinKhachHangComponent', () => {
  let component: Task26SuaThongTinKhachHangComponent;
  let fixture: ComponentFixture<Task26SuaThongTinKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task26SuaThongTinKhachHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task26SuaThongTinKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
