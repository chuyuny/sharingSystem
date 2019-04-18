import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user/user.service';
import {ArticleService} from '../shared/article/article.service';

@Component({
  selector: 'app-hot-article',
  templateUrl: './hot-article.component.html',
  styleUrls: ['./hot-article.component.less']
})
export class HotArticleComponent implements OnInit {
  public hotArticles;
  public clickMoreCount = 1;
  public error;
  constructor(private userService: UserService, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getHotArticles({
      page: 1
    }).subscribe(
      result => {
        if (result.code === 1) {
          this.hotArticles = result.data;
        }
      }
    )
  }
  getMore(count) {
    this.articleService.getMoreHotArticle({
      page: count
    }).subscribe(
      result => {
        if (result.code === 1) {
          result.data.forEach((ele) => {
            this.hotArticles.push(ele);
          })
          this.clickMoreCount = this.clickMoreCount + 1;
        } else if (result.code === 0) {
            this.error = result.message;
            console.log(this.error);
        }
      }
    )
  }
}
