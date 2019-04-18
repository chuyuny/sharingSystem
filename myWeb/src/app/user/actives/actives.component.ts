import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../shared/user/user.service';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.less']
})
export class ActivesComponent implements OnInit {
  public userMobile;
  public actives;
  public isMe: boolean = false;
  constructor(private routeInfo: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
    }
    this.userService.getUserActive(this.userMobile).subscribe(result => {
      if (result.code === 1) {
        this.actives = result.data;
      } else {

      }
    });
  }

}
