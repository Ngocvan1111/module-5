import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalFacilityComponent } from './delete-modal-facility.component';

describe('DeleteModalFacilityComponent', () => {
  let component: DeleteModalFacilityComponent;
  let fixture: ComponentFixture<DeleteModalFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
