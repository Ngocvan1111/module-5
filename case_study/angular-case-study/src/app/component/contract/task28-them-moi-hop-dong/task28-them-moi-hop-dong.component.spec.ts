import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task28ThemMoiHopDongComponent } from './task28-them-moi-hop-dong.component';

describe('Task28ThemMoiHopDongComponent', () => {
  let component: Task28ThemMoiHopDongComponent;
  let fixture: ComponentFixture<Task28ThemMoiHopDongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task28ThemMoiHopDongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task28ThemMoiHopDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
