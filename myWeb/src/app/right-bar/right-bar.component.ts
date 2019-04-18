import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user/user.service';
import {ToolJsService} from '../shared/tool-js.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.less']
})
export class RightBarComponent implements OnInit {
  public user;
  constructor(private userSerVice: UserService, private toolJSService: ToolJsService ) { }

  ngOnInit() {
    if (!$.isEmptyObject(this.userSerVice.getCurrentUser())){
      this.user = this.userSerVice.getCurrentUser()
    }
  }
  goNext(type) {
    if (this.user) {
      let url;
      if (type === 'follow') {
        url = '/profile/' + this.user.mobile + '/follow';
      } else {
        url = type;
      }
      this.toolJSService.next(url);
    } else {
      this.toolJSService.next('/login-register');
    }
  }
}
