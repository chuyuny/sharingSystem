import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { UserService} from '../../shared/user/user.service';
import 'rxjs-compat/add/operator/filter';
import 'rxjs-compat/add/operator/map';
import {LocalStorage} from '../../shared/local.storage';
import {ToolJsService} from '../../shared/tool-js.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  public currentUserMobile: string;
  public showEditor: boolean = false;
  public showAll: boolean = false;
  constructor( private router: Router, private routeInfo: ActivatedRoute, private toolJsService: ToolJsService, private userService: UserService, private ls: LocalStorage) { }
  public user;
  public currentUser;
  public item = 'actives';

  ngOnInit() {
    if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
      this.currentUser = this.ls.getDate('userInfo').userInfo;
    }
    this.currentUserMobile = this.routeInfo.snapshot.params['userMobile'];
    this.init( this.currentUserMobile);
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.routeInfo)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .subscribe((event) => {
        this.currentUserMobile = this.routeInfo.snapshot.params['userMobile'];
        this.init(this.currentUserMobile);
      });
  }
  init(currentUserMobile) {
    const pathName = window.location.href;
    this.item = pathName.split('/')[pathName.split('/').length - 1];
    this.userService.getUserInfo(currentUserMobile ).subscribe(
      result => {
        if (result.code === 1) {
          this.user = result.user;
          this.toolJsService.changCurrentTab(this.item);
          this.showEditor = this.currentUser ? (this.currentUser.mobile === this.user.mobile ? true : false) : false;
        }
      }
    )
  }
}
