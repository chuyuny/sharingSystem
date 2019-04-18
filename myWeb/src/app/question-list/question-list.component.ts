import { Component, OnInit } from '@angular/core';
import {Answer, Comment, Question, UserInfo, GetQuestionService} from '../shared/get-question.service';
import {ActivatedRoute, Params} from '@angular/router';
import {QuestionService} from '../shared/question/question.service';
import {LocalStorage} from '../shared/local.storage';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.less']
})

export class QuestionListComponent implements OnInit {
  public questions;
  public userMobile;
  public currentUser;
  public clickMoreCount = 1;
  public error;
  constructor(private ls: LocalStorage, private getQuestionService: GetQuestionService, private routeInfo: ActivatedRoute, private questionService: QuestionService) { }
  ngOnInit() {
    this.currentUser = this.ls.getDate('userInfo')
    this.questionService.getWriteAnswerQuestionList().subscribe(result => {
      if (result.code === 1) {
        this.questions = result.data;
      }
    })
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
  }


  updata() {
    this.questionService.getWriteAnswerQuestionList().subscribe(result => {
      if (result.code === 1) {
        this.questions = result.data;
      }
    });
  }

}
