import {Component, OnInit} from '@angular/core';
import {CommentService} from './shared/comment/comment.service';
import {CommonService} from './shared/common/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
     public data;
    constructor(private commonService: CommonService) {}
    ngOnInit() {
      this.commonService.showTipsBox.subscribe(
        result => {
          this.data = result;
        }
      )
    }
}
