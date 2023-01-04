import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../../../model/facility/facility';
import {FacilityService} from '../../../../service/facility.service';

@Component({
  selector: 'app-delete-modal-facility',
  templateUrl: './delete-modal-facility.component.html',
  styleUrls: ['./delete-modal-facility.component.css']
})
export class DeleteModalFacilityComponent implements OnInit {
  @Input()
  facility: Facility = {id: 0,name: '', facilityType: {id: 0, name: ''}};
  @Output()
  emitter = new EventEmitter()
  constructor(private facilityService:FacilityService) { }

  ngOnInit(): void {
  }

  deleteFacility() {
    this.facilityService.deleteById(this.facility.id).subscribe(date => {
      this.emitter.emit("")
      alert('delete successfuly');
    })
  }
}
