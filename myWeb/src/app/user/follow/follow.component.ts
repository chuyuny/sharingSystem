import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user/user.service';
import {CommonService} from '../../shared/common/common.service';
import {QuestionService} from '../../shared/question/question.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.less']
})
export class FollowComponent implements OnInit {
  public questions;
  public userMobile;
  public isMe: boolean = false;
  constructor(private commonService: CommonService, private userService: UserService, private questionService: QuestionService, private routeInfo: ActivatedRoute ) { }

  ngOnInit() {
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);
    if (!$.isEmptyObject(this.userService.getCurrentUser())) {
      this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
    }
    this.questionService.getFollowForUser(this.userMobile).subscribe(
      result => {
        if (result.code === 1 || result.code === 2) {
          this.questions = result.data;
        } else  if (result.code === 0) {
          this.commonService.showTipsBox.emit({
            isTips: true,
            message: '加载失败',
          })
        }
      }
    )
  }

}
