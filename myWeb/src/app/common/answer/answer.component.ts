import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionService, UserAnswer} from '../../shared/question/question.service';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.less']
})
export class AnswerComponent implements OnInit {
  @Input() answer;
  @Output() public answerChange: EventEmitter<any> = new EventEmitter();
  @Input() answerId;
  @Input() questionId;
  @Input() isActive;
  @Input() userAnswerDetail;
  @Output() public userAnswerDetailChange: EventEmitter<any> = new EventEmitter();
  @Input() userAnswerCollect;
  @Output() public userAnswerCollectChange: EventEmitter<any> = new EventEmitter();
  constructor(private questionService: QuestionService) { }
  ngOnInit() {
  }
  readAll = (event) => {
    $(event.currentTarget).parent().removeClass('is-collapsed')
    $(event.currentTarget).hide();
    $($('.answer-item .takeUp')).show();
    event.stopPropagation();
  }
  takeUp(event) {
    $(event.currentTarget).parent().addClass('is-collapsed');
    $(event.currentTarget).hide();
    $(event.currentTarget).siblings('.read-all').show();
  }
  getMouseleave(event) {
    $($(event.currentTarget).children('.takeUp')).hide();
  }
  getMouseEnter(event) {
    const test = $(event.currentTarget).is('.is-collapsed');
    const isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
    if (!test && isShowReadAll !== 'hidden' ) {
      $($(event.currentTarget).children('.takeUp')).show();
    } else {
      $($(event.currentTarget).children('.takeUp')).hide();
    }
  }
}
