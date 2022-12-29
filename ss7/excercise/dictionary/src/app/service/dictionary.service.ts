import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [
    {word: 'dog', mean: 'Đây là con Chó'},
    {word: 'cat', mean: 'Đây là con Mèo'},
    {word: 'human', mean: 'Đây là con Người'},
    {word: 'chicken', mean: 'Đây là con Gà'},
    {word: 'bird', mean: 'Đây là con Chim'},
  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.wordList;
  }

  // tslint:disable-next-line:typedef
  findByWord(word: any) {
    // tslint:disable-next-line:no-shadowed-variable
    const temp = this.wordList.filter(element => element.word === word);
    if (temp.length === 0){
      return null;
    }
    return temp[0];
  }
}
