import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ToolJsService} from '../../shared/tool-js.service';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.less']
})
export class TabCardComponent implements OnInit {
  @Input() user;
  @Input() item;
  constructor( private toolJsService: ToolJsService) { }
  ngOnInit() {
    this.toolJsService.changCurrentTab(this.item);
  }
  addActive = (event, item) => {
    const tabLinkArr = document.querySelectorAll('.tab-link');
    $(tabLinkArr).each(function (index, element) {
      $(element).removeClass('is-active');
    });
    $(event.currentTarget).addClass('is-active');
  }
}
