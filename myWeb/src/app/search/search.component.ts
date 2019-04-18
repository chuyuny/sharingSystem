import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {QuestionService} from '../shared/question/question.service';
import {LocalStorage} from '../shared/local.storage';
import {CommonService} from '../shared/common/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public searchResults;
  public imgReg = /<img.*?(?:>|\/>)/gi;
  public deleteHreg = /<\/?.+?\/?>/g;
  constructor(private routeInfo: ActivatedRoute, private router: Router, private commonService: CommonService, private routerInfo: ActivatedRoute, private questionService: QuestionService, private ls: LocalStorage) { }
  public keyword;
  ngOnInit() {
    this.routerInfo.queryParams.subscribe(params => {
      if (params.keyword) {
        this.keyword = params.keyword;
      }
    });
    this.init();
    this.router.events
      .filter(( event) => event instanceof NavigationEnd)
      .map(() => this.routeInfo)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .subscribe((event) => {
        event.queryParams.subscribe( params => {
          this.keyword = params.keyword;
        })
        this.init();
      });
  }
  init() {
    if (!$.isEmptyObject(this.ls.getDateSes('searchResult'))) {
      const result = this.ls.getDateSes('searchResult');
      if (result.keyword.trim() === this.keyword.trim()) {
        const searchResult = result.result;
        if (searchResult.code === 1) {
          this.searchResults = searchResult.data;
        }
      }
    }
    this.commonService.searchEvent.subscribe(
      result => {
        const searchResult = result.result;
        if (searchResult.code === 1) {
          this.searchResults = searchResult.data;
        }
      }
    )
  }
}
