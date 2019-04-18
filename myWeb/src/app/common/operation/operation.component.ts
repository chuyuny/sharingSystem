import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Question} from '../../shared/get-question.service';
import {UserAnswerDetail, UserInfoShow, UserService} from '../../shared/user/user.service';
import {CommonService} from '../../shared/common/common.service';
import {LocalStorage} from '../../shared/local.storage';
import {QuestionService} from '../../shared/question/question.service';
import {ArticleService} from '../../shared/article/article.service';
import {AlterService} from '../../shared/alter/alter.service';
import {ToolJsService} from '../../shared/tool-js.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.less']
})
export class OperationComponent implements OnInit, OnChanges {
  @Input() isArticleDetail = false;
  @Input() article;
  @Output() public articleChange: EventEmitter<any> = new EventEmitter();
  @Input() isShowComment;
  @Output() public isShowCommentChange: EventEmitter<any> = new EventEmitter();
  @Input() answer;
  @Output() public answerChange: EventEmitter<any> = new EventEmitter();
  @Input() userAnswerDetail;
  public currentContent;
  public user;
  public articleId;
  public currentCommentForId;
  public questionId;
  public answerId;
  public show:boolean = false;
  public currentUser;
  public author;
  public data;
  public isLogin: boolean = false;
  constructor(private toolJs: ToolJsService, private alterService: AlterService, private articleService: ArticleService, private questionService: QuestionService, private userService: UserService, private commonService: CommonService, private ls: LocalStorage) { }
  ngOnInit() {
    if (this.answer) {
      this.currentContent = this.answer;
      this.answerId = this.answer.answerId;
      this.questionId = this.answer.questionId;
      this.author = this.answer.answerAuthor;
    }
    if (this.article) {
      this.currentContent = this.article;
      this.articleId = this.article.articleId;
      this.author = this.article.articleAuthor;
    }
    if (this.ls.getDate('userInfo').login) {
      this.isLogin = this.ls.getDate('userInfo').login;
      this.currentUser = this.ls.getDate('userInfo').userInfo ;
       if (this.currentUser.mobile === this.author) {
         this.show = true;
       }

   }
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  showComment(event) {
    this.isShowComment = !this.isShowComment;
    this.isShowCommentChange.emit(this.isShowComment);
  }
  addThanks(event) {
    if (this.isLogin) {
      if (this.article) {
        this.commonService.addThanks({
          id: this.article.articleId,
          type: 'article'
        }).subscribe(
          result => {
            if (result.code === 1) {
              this.article.thanks = this.article.thanks + 1;
            }
          })
      }
      if (this.answer) {
        this.commonService.addThanks({
          id: this.answer.answerId,
          type: 'answer'
        }).subscribe(
          result => {
            if (result.code === 1) {
              this.answer.thanks = this.answer.thanks + 1;
            }
          })
      }
    } else {
      this.toolJs.currentPage('/login-register');
    }
  }

  showConfirm() {
    if (this.answer) {
      this.data = {
        message: '是否确认删除',
        type: 'answer',
        id: this.answer.answerId,
        isShowCancel: true,
        isDelete: true,
        url: window.location.href,
        isTips: false
      }
    }
    if (this.article) {
      this.data = {
        message: '是否确认删除',
        type: 'article',
        id: this.article.articleId,
        isShowCancel: true,
        isDelete: true,
        url: window.location.href,
        isTips: false
      }
    }
    this.commonService.showTipsBox.emit(this.data);
  }
}
