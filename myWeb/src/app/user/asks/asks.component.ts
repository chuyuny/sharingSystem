import {Answer, Comment, Question, UserInfo, GetQuestionService} from '../../shared/get-question.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {QuestionService} from '../../shared/question/question.service';
import {UserInfoShow, UserService} from '../../shared/user/user.service';
import {AskService} from '../../shared/ask/ask.service';
import {CommonService} from '../../shared/common/common.service';

@Component({
  selector: 'app-asks',
  templateUrl: './asks.component.html',
  styleUrls: ['./asks.component.less']
})
export class AsksComponent implements OnInit {
  public questions;
  public userMobile;
  public isMe: boolean = false;
  constructor(private commonService: CommonService, private askService: AskService, private userService: UserService, private questionService: QuestionService, private routeInfo: ActivatedRoute) { }
  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
    }
    this.questionService.getQuestionsForUser(this.userMobile).subscribe(
      result => {
        if (result.code === 1 || result.code === 2) {
          this.questions = result.data;
        } else {
          this.commonService.showTipsBox.emit({
            isTips: true,
            message: '加载失败',
          })
        }
      }
    )
  }


}
