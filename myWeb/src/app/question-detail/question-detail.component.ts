import { Component, OnInit } from '@angular/core';
import { GetQuestionService } from '../shared/get-question.service'
import {Answer, Comment, Question, UserInfo} from '../shared/get-question.service';
import {ActivatedRoute} from '@angular/router';
import {LocalStorage} from '../shared/local.storage';
import {Answerdetail, QuestionDetail, QuestionService} from '../shared/question/question.service';
import {UserService} from '../shared/user/user.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {CommonService} from '../shared/common/common.service';
import {ToolJsService} from '../shared/tool-js.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {
  public questionDetail;
  public isShowReadAll: boolean = true ;
  public isShowComment: boolean = false;
  public firstClickComment: boolean = true;
  public firstClickEditor: boolean = true;
  public isWriteAnswer: boolean = true;
  public isShowEditor: boolean = false;
  public answerArr: Answerdetail[];
  public currentUser;
  public currentUserMobile;
  constructor(private toolJs: ToolJsService, private commonService: CommonService, private questionService: QuestionService, private userService: UserService, private routInfo: ActivatedRoute, private ls: LocalStorage) { }

  ngOnInit() {
    const questionId = this.routInfo.snapshot.params['questionId'];
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.currentUser = this.userService.getCurrentUser();
      this.currentUserMobile = this.currentUser.mobile;
    }
    // if (!$.isEmptyObject(this.ls.getDate('newQuestionDetail'))) {
    //   if (Number(questionId) ===  Number(this.ls.getDate('newQuestionDetail').question.questionId )) {
    //     this.questionDetail = this.ls.getDate('newQuestionDetail');
    //     this.ls.removeDate('newQuestionDetail');
    //   } else {
    //     this.questionService.getQuestionDetail({
    //       questionId: questionId,
    //       user: this.currentUserMobile
    //     })
    //       .subscribe(result => {
    //         if (result.code === 1) {
    //           this.questionDetail = result.data;
    //         }
    //       });
    //   }
    // } else {
      this.questionService.getQuestionDetail({
        questionId: questionId,
        user: this.currentUserMobile
      })
        .subscribe(result => {
          if (result.code === 1) {
            this.questionDetail = result.data;
          }
        });
    // }
  }
  writeAnswer(event, firstClickEditor) {
    if (this.currentUserMobile) {
      if (firstClickEditor) {
        this.isShowEditor = true;
        if ( this.isShowComment) {
          this.isShowComment = false;
          this.firstClickComment = true;
        }
        this.firstClickEditor = false;
      } else {
        this.isShowEditor = false;
        this.firstClickEditor = true;
      }
    } else {
      this.toolJs.next('/login-register');
    }
  }

  showComment(event, firstClickComment) {
    if (firstClickComment) {
      this.isShowComment = true;
      this.firstClickComment = false;
      if ( this.isShowEditor) {
        this.isShowEditor = false;
        this.firstClickEditor = true;
      }
    } else {
      this.isShowComment = false;
      this.firstClickComment = true;
    }
  }
  readAll = (event, isShowReadAll, index) => {
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
      this.isShowReadAll = true;
    }
  }
  follow(isFollow) {
    if(this.currentUserMobile){
      this.questionService.follow({
        questionId: this.questionDetail.question.questionId,
        user: this.currentUserMobile,
        isFollowed: isFollow
      }).subscribe(result => {
        if (result.code === 1) {
          this.questionDetail.isFollowed = result.data.isFollowed;
        } else if (result.code === 0 ) {
          this.commonService.showTipsBox.emit({
            message: '操作错误，请重试',
            isTips: true
          })
        }
      })
    } else {
      this.toolJs.next('/login-register');
    }
    }
}
