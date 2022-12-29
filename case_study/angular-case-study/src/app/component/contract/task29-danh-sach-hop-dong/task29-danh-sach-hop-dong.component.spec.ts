import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task29DanhSachHopDongComponent } from './task29-danh-sach-hop-dong.component';

describe('Task29DanhSachHopDongComponent', () => {
  let component: Task29DanhSachHopDongComponent;
  let fixture: ComponentFixture<Task29DanhSachHopDongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task29DanhSachHopDongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task29DanhSachHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
