import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task27ThemMoiKhachHangComponent } from './task27-them-moi-khach-hang.component';

describe('Task27ThemMoiKhachHangComponent', () => {
  let component: Task27ThemMoiKhachHangComponent;
  let fixture: ComponentFixture<Task27ThemMoiKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task27ThemMoiKhachHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task27ThemMoiKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
