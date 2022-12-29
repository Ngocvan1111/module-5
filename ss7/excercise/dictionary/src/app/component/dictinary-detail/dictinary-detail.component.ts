import { Component, OnInit } from '@angular/core';
import {IWord} from '../../model/iword';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictinary-detail',
  templateUrl: './dictinary-detail.component.html',
  styleUrls: ['./dictinary-detail.component.css']
})
export class DictinaryDetailComponent implements OnInit {
    // word: IWord = {word: 'dog', mean: 'con dog'};
    word: IWord = {word: '', mean: ''} ;
  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(data => {
      console.log(data);
      const word = data.get('word');
      console.log(word);
      if (word != null) {
        // @ts-ignore
        this.word = this.dictionaryService.findByWord(word);
        console.log(this.word);
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

}
