import { Component, OnInit } from '@angular/core';
import {UserCollect, UserService} from '../../shared/user/user.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.less']
})
export class CollectComponent implements OnInit {
  public collects: any[] = [];
  public userMobile;
  public currentUserInfo;
  constructor(private userService: UserService, private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    console.log(this.userMobile);
    this.userService.getUserCollet(this.userMobile).subscribe(
      collects => this.collects = collects
    )

    // this.currentUserInfo = this.userService.getUserForShow(this.userMobile);
  }

}
