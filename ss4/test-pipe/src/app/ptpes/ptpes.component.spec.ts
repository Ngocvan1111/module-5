import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtpesComponent } from './ptpes.component';

describe('PtpesComponent', () => {
  let component: PtpesComponent;
  let fixture: ComponentFixture<PtpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtpesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
