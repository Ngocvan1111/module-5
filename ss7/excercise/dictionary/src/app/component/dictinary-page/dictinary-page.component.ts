import { Component, OnInit } from '@angular/core';
import {IWord} from '../../model/iword';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictinary-page',
  templateUrl: './dictinary-page.component.html',
  styleUrls: ['./dictinary-page.component.css']
})
export class DictinaryPageComponent implements OnInit {
  wordList: IWord[] =  [];

  constructor(private dictionaryService: DictionaryService) {
    this.wordList = dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
