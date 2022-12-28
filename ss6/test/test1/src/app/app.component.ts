import { Component } from '@angular/core';
import {Book} from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = {name: '123', year: 1994, stars: null};
  books: Book[] = [];
  title = 'test1';

  // tslint:disable-next-line:typedef
  addBook(value: any) {
  this.books.push(value);

  }
}
