import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalContractComponent } from './delete-modal-contract.component';

describe('DeleteModalContractComponent', () => {
  let component: DeleteModalContractComponent;
  let fixture: ComponentFixture<DeleteModalContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
