import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalStorage} from '../shared/local.storage';
import {ToolJsService} from '../shared/tool-js.service';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../shared/article/article.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit , OnChanges{
  public user;
  public article;
  public isArticleDetail:boolean = true;
  public isShowComment:boolean = false;
  public articleId;
  constructor(private ls: LocalStorage, private toolJs: ToolJsService, private routInfo: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleId = this.routInfo.snapshot.params['articleId'];
    if (!$.isEmptyObject(this.ls.getDate('articleDetail'))) {
      if (Number(this.articleId) === Number(this.ls.getDate('articleDetail').article.articleId)) {
        this.article = this.ls.getDate('articleDetail');
        this.ls.removeDate('articleDetail');
      } else {
        this.articleService.getArticleDetail(this.articleId).subscribe(result => {
          if (result.code === 1) {
            this.article = result.data;
          }
        })
      }
    } else {
      this.articleService.getArticleDetail(this.articleId).subscribe(result => {
        if (result.code === 1) {
          this.article = result.data;
        }
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
