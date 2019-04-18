import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { ToolJsService } from '../shared/tool-js.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public homeState: string;
  constructor( private routInfo: ActivatedRoute, private toolJsService: ToolJsService,  private router: Router) { }

  ngOnInit() {
    this.init();
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd ) => {
        if ( event.url === '/' || event.url === '/hot' || event.url === '/hot-article' ) {
          this.init();
        }
      });
  }
  init() {
    let pathName = window.location.href.split('/')[window.location.href.split('/').length - 1];
    console.log(pathName);
    if (pathName === '') {
      pathName = 'recommend';
    }
    this.toolJsService.changCurrentTab(pathName);
  }
  addActive = (event, item) => {
      const tabLinkArr = document.querySelectorAll('.tab-link');
      $(tabLinkArr).each(function (index, element) {
        $(element).removeClass('is-active');
      });
      $(event.currentTarget).addClass('is-active');
    }
}
