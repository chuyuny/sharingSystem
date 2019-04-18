import { Component, OnInit } from '@angular/core';
import {UserInfoShow, UserService} from '../../shared/user/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {QuestionService, UserAnswer} from '../../shared/question/question.service';
import {AnswerService} from '../../shared/answer/answer.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.less']
})
export class AnswersComponent implements OnInit {
public userMobile;
public userAnswerArr;
public isMe: boolean = false;
  constructor( private userService: UserService , private routeInfo: ActivatedRoute, private answerService: AnswerService, private questionService: QuestionService) { }

  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
    }
    this.answerService.getUserAnsawer(this.userMobile).subscribe(
      result => {
        if (result.code === 1 || result.code === 2) {
          this.userAnswerArr = result.data;
        }
      }
    );
  }
}
