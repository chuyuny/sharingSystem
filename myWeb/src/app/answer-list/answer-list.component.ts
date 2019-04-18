import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Answer, Comment, Question, UserInfo, GetQuestionService} from '../shared/get-question.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Answerdetail, UserAnswer} from '../shared/question/question.service';
import {UserInfoShow} from '../shared/user/user.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.less']
})
export class AnswerListComponent implements OnInit, OnChanges {
  @Input() isUserAnswer: boolean ;
  @Input() isAnswerList: boolean;
  @Input() currentUserInfo: UserInfoShow;
  @Input() userAnswerDetailArr: UserAnswer[];
  @Output() public userAnswerDetailArrChange: EventEmitter<UserAnswer[]> = new EventEmitter();
  @Input() answerArr: Answerdetail[];
  @Output() public answerArrChange: EventEmitter<Answerdetail[]> = new EventEmitter();

  public isShowReadAll: boolean ;
  public isWriteAnswer: boolean = true;
  public answers: Answer[];
  constructor(private getQuestionService: GetQuestionService) {

  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  readAll = (event, isShowReadAll, index) => {
    console.log(index)
    if (index >= 0) {
      $(event.currentTarget).parent().removeClass('is-collapsed')
      $(event.currentTarget).hide();
      $($('.answer-item .takeUp')[index]).show();
    } else {
      this.isShowReadAll = false;
    }
    event.stopPropagation();
  }
  takeUp(event, isShowReadAll, index) {
    if (index >= 0) {
      $(event.currentTarget).hide();
      $(event.currentTarget).parent().siblings('.answer-content').children('.answer').addClass('is-collapsed');
      $($('.answer .read-all')[index]).show();
    } else {
      $(event.currentTarget).parent().addClass('is-collapsed');
      $(event.currentTarget).hide();
      $(event.currentTarget).siblings('.read-all').show();
    }
  }
  getMouseleave(event, i) {
    $($('.answer .takeUp')[i]).hide();
  }
  getMouseEnter(event, i) {
    const test = $(event.currentTarget).find('.answer').is('.is-collapsed');
    const isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
    if (!test && isShowReadAll !== 'hidden' ) {
      $($('.answer .takeUp')[i]).show();
    } else {
      $($('.answer .takeUp')[i]).hide();
    }
  }

}

