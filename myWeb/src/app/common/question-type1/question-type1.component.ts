import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question-type1',
  templateUrl: './question-type1.component.html',
  styleUrls: ['./question-type1.component.less']
})
export class QuestionType1Component implements OnInit {
  @Input() recommend;
  @Output() recommendChange: EventEmitter<any> = new EventEmitter();
  public imgReg = /<img.*?(?:>|\/>)/gi;
  public deleteHreg = /<\/?.+?\/?>/g;
  constructor() { }

  ngOnInit() {
  }
  readAll = (event) => {
    $(event.currentTarget).parent().parent().parent().removeClass('is-collapsed');
    $(event.currentTarget).parent().parent().hide();
    $(event.currentTarget).parent().parent().next('.detail').show();
    event.stopPropagation();
  }
  takeUp(event) {
    $(event.currentTarget).parent().parent().parent().addClass('is-collapsed');
    $(event.currentTarget).parent().hide();
    $(event.currentTarget).parent().siblings('.question').show();
    event.stopPropagation();
  }
  getMouseleave(event) {
    $(event.currentTarget).find('.detail .takeUp').hide()
  }
  getMouseEnter(event) {
    const test = $(event.currentTarget).parent().is('.is-collapsed');
    if (!test) {
      $(event.currentTarget).find('.detail .takeUp').show();
    } else {
      $(event.currentTarget).find('.detail .takeUp').hide();
    }
  }
}
