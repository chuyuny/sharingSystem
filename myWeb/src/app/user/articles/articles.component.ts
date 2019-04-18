import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {ArticleService} from '../../shared/article/article.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonService} from '../../shared/common/common.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  constructor(private commonService: CommonService, private userService: UserService, private articleService: ArticleService, private routeInfo: ActivatedRoute) { }
  public articles;
  public userMobile;
  public test;
  public articleId;
  public currentUserInfo;
  public isMe: boolean = false;
  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
    }
    this.articleService.getUserArticles(this.userMobile).subscribe(
      result => {
        if (result.code === 1 || result.code === 2) {
          this.articles = result.data;
        } else if( result.code === 0){
            this.commonService.showTipsBox.emit({
              message: '发表失败',
              type: '',
              id: '',
              isTips: true,
            })
        }
      }
    );
  //   this.articleId = this.articles[0].articleDetail.articleId
  //   this.articleService.getArticles(this.articleId).subscribe(
  //     article => this.test = article
  //   );
  }
}

