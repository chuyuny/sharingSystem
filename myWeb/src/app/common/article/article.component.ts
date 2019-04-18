import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {ToolJsService} from '../../shared/tool-js.service';
import {LocalStorage} from '../../shared/local.storage';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  @Input() article;
  @Input() isActive;
  @Output() articleChange: EventEmitter<any> = new EventEmitter();
  public user: any;
  public isShowReadAll: boolean;
  constructor( private userService: UserService, private toolJs: ToolJsService, private ls: LocalStorage) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }
  goArticleDetail(article) {
    this.ls.saveDate('articleDetail', article)
    this.toolJs.next('/article-detail/' + article.article.articleId);
  }
  readAll = (event) => {
      $(event.currentTarget).parent().removeClass('is-collapsed')
      $(event.currentTarget).hide();
      $(event.currentTarget).next('.takeUp').show();
      // $($('.answer-item .takeUp')[index]).show();
    event.stopPropagation();
  }
  takeUp(event) {
    $(event.currentTarget).parent().addClass('is-collapsed');
    $(event.currentTarget).hide();
    $(event.currentTarget).siblings('.read-all').show();
  }
  getMouseleave(event) {
    $($(event.currentTarget).children('.takeUp')).hide();
  }
  getMouseEnter(event, i) {
    const test = $(event.currentTarget).is('.is-collapsed');
    const isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
    if (!test && isShowReadAll !== 'hidden') {
      $($(event.currentTarget).children('.takeUp')).show();
    } else {
      $($(event.currentTarget).children('.takeUp')).hide();
    }
  }
}

