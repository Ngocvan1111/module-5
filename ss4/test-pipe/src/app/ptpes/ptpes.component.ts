import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptpes',
  templateUrl: './ptpes.component.html',
  styleUrls: ['./ptpes.component.css']
})
export class PtpesComponent implements OnInit {
  dateToday: string | undefined;
  name: string | undefined;


  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Simplilearn"
  }

}
