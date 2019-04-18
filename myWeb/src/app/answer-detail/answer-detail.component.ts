import { Component, OnInit } from '@angular/core';
import {Answer, Comment, Question, UserInfo} from '../shared/get-question.service';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.less']
})
export class AnswerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getMouseleave(event, i) {
    $($('.answer .takeUp')[i]).hide();
  }
  getMouseEnter(event, i) {
    const test = $(event.currentTarget).find('.answer').is('.is-collapsed');
    if (!test) {
      $($('.answer .takeUp')[i]).show();
    } else {
      $($('.answer .takeUp')[i]).hide();
    }
  }
}
