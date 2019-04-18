import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {LocalStorage} from './local.storage';

@Injectable({
  providedIn: 'root'
})
export class ToolJsService {

  constructor(private ls: LocalStorage) { }
  changCurrentTab(item) {
    const tabLinkArr = document.querySelectorAll('.tab-link');
    $(tabLinkArr).each(function (index, element) {
      $(element).removeClass('is-active');
    });
    // console.log($('.' + pathName));
    $('.' + item).addClass('is-active');
  }
  nextStep (option) {
    if (option.newWindow) {
      window.open( window.location.href.split('#')[0] + '#' + option.nextUrl );
    } else {
      window.location.href = window.location.href.split('#')[0] + '#' + option.nextUrl;
    }
    if (option.currentPage) {
      this.ls.saveDateSes('referrer', option.curentPage );
    }
    if (option.back) {
      if (!$.isEmptyObject(this.ls.getDateSes('referrer'))) {
        window.location.href = this.ls.getDateSes('referrer');
      } else {
        window.location.href = window.location.href.split('#')[0] + '#/';
      }
    }
  }
  next(url) {
    window.open( window.location.href.split('#')[0] + '#' + url );
    // window.location.href = window.location.href.split('#')[0] + '#' + url;
  }
  currentPage(url) {
    window.location.href = window.location.href.split('#')[0] + '#' + url;
  }
  goBack() {
    window.history.go(-1);
    console.log(window.location.href)
    // window.location.reload();
  }

}
