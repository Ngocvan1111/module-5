import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-pipe';
  birthday = new Date(1998,3,15);
  toggle = true;
  get format(){
    return this.toggle?'shortDate':'fullDate';}
  toggleFormat(){this.toggle = !this.toggle;}
}
