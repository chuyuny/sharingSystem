import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Answer, Comment, CommentForAnswer, Question, UserInfo} from '../shared/get-question.service';
import {LocalStorage} from '../shared/local.storage';
import {QuestionService, Recommend} from '../shared/question/question.service';
import {AnswerService} from '../shared/answer/answer.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit, OnChanges {
  public recommends;
  public currentUser;
  public clickMoreCount = 1;
  public error;
  constructor(private ls: LocalStorage, private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit() {
    this.currentUser = this.ls.getDate('userInfo')
    this.answerService.getRecommend({
      page: 1
    }).subscribe(
      result => {
        console.log(result);
        if (result.code === 1) {
          this.recommends = result.data;
        }
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  getMore(count) {
    this.answerService.getMoreRecommends({
      page: count
    }).subscribe(
      result => {
        if (result.code === 1) {
          result.data.forEach((ele) => {
            this.recommends.push(ele);
          })
          this.clickMoreCount = this.clickMoreCount + 1;
        } else if (result.code === 0) {
          this.error = result.message;
        }
      }
    )
  }
}
