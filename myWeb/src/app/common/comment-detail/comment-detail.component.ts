import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../shared/comment/comment.service';
import {LocalStorage} from '../../shared/local.storage';
import {UserService} from '../../shared/user/user.service';
import {ToolJsService} from '../../shared/tool-js.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.less']
})
export class CommentDetailComponent implements OnInit {
  @Input() isArticleDetail;
  @Input() article;
  @Input() questionId;
  @Input() answerId;
  @Input() articleId;
  @Output() public articleChange: EventEmitter<any> = new EventEmitter();
  public currentComments = [];
  public newComment: string;
  public type: string;
  public data;
  public currentUserMobile;
  constructor( private router: Router, private routInfo: ActivatedRoute, private toolJs: ToolJsService, private commentService: CommentService, private ls: LocalStorage, private  userService: UserService) { }

  ngOnInit() {
    this.init();
  }
  init() {
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.currentUserMobile = this.userService.getCurrentUser().mobile;
    }
    if (this.articleId) {
      this.data = {
        id: this.articleId,
        type: 'article'
      };
    }
    if (this.answerId && this.questionId) {
      this.data = {
        id: this.answerId,
        type: 'answer'
      };
    }
    if (this.questionId && !this.answerId) {
      this.data = {
        id: this.questionId,
        type: 'question'
      };

    }
    this.commentService.getComments(this.data).subscribe(
      result => {
        if (result.code === 1 ) {
          this.currentComments = result.data;
        }
      }
    )
  }
  addComment(event) {
    if(this.currentUserMobile){
      if (this.newComment !== undefined) {
        let formData;
        if (this.answerId) {
          formData = {
            questionId: this.questionId,
            answerId: this.answerId,
            commentContent: this.newComment,
            commentAuthor: this.currentUserMobile,
            type: 'answer'
          };
        }
        if (this.data.type === 'question') {
          formData = {
            questionId: this.questionId,
            commentContent: this.newComment,
            commentAuthor: this.ls.getDate('userInfo').userInfo.mobile,
            type: 'question'
          };
        }
        if (this.articleId) {
          formData = {
            articleId: this.articleId,
            commentContent: this.newComment,
            commentAuthor: this.ls.getDate('userInfo').userInfo.mobile,
            type: 'article'
          };
        }
        this.commentService.addComment(formData).subscribe(
          result => {
            if (result.code === 1) {
              this.currentComments.unshift(result.data);
              this.newComment = undefined;
            }
          }
        );
      }
    } else {
      // this.toolJs.currentPage('/login-register');
      this.toolJs.nextStep({
        newWindow: false,
        nextUrl: '/login-register',
        currentPage: window.location.href
      });
    }
  }

}
