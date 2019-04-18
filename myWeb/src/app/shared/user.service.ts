import { Injectable } from '@angular/core';
import {Answer, Comment, CommentForAnswer, Question, UserInfo} from './get-question.service';
import {element} from 'protractor';
import {LocalStorage} from './local.storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user1: UserInfo = new UserInfo('test1', 'test1的介绍', 'http://placehold.it/30x30', '13111111111', '111111')
  public comments = [new Comment('1', 'comment1', this.user1),
    new Comment('2', 'comment1', this.user1),
    new Comment('3', 'comment1', this.user1),
    new Comment('4', 'comment1', this.user1)]
  public colletsForAnswer = [new UserInfo('我是第一个收藏的', 'ssssss', 'xxxxx', '13111111112', '111111'),
    new UserInfo('我是第er个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111113', '111111'),
    new UserInfo('我是第3个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111114', '111111'),
    new UserInfo('shiwo', 'sjjsjssjjsjs', 'www.baidu.com', '13111111115', '111111')
  ]
  public str = '<p>啊啊啊啊啊啊啊啊啊啊啊撒</p><p><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1551879510&amp;di=f652cacc4ba3c4c76fd36ac8d028dffd&amp;src=http://hbimg.b0.upaiyun.com/01f13dd8fcbfcfd38bd13f92cca49a0bd8ec434b12cea-0yEhtq_fw658" style="max-width:100%;"><br></p>';

  public ansterArr: Answer[] = [new Answer('1', '因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿1111饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿...饿over', this.user1, this.comments, 222, true),
    new Answer('2', this.str, this.user1, [], 221, false),
    new Answer('3', '因为为因为饿因为因为饿饿饿因2', this.user1, [], 223, false),
  ]
  public questions: Question[] = [
    new Question('11111111', '人为什么要吃饭1', '因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111112', '人为什么要吃饭2',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111113', '人为什么要吃饭3',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111114', '人为什么要吃饭4',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111115', '人为什么要吃饭5',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111116', '人为什么要吃饭6',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
  ]
  public commentForAnswer = new CommentForAnswer(this.comments, '1')
  constructor(private ls: LocalStorage) { }
  getUser(): Array<UserInfo> {
    const userArr = [ this.user1]
    return userArr;
  }
  getUserForAnswer(userInfo) {
    console.log(this.questions);
    return this.questions
  }
  loginLdentify(userInfo) {
    const user = this.getUser();
    let test1 = user.find((ele) => (ele.mobile === userInfo.mobile))
    if (test1) {
      let test2 = test1.password === userInfo.password
      if ( test2 ) {
        return {login: true, userInfo: test1, massage: '登录成功'} ;
      } else { return {login: false, userInfo: {}, massage: '密码错误'}; }
    } else {
      return {login: false, userInfo: {}, massage: '用户不存在'};
    }
    // user = this.getUser().filter((ele, index, self) => {
    //   return ele.mobile === userInfo.mobile ; } );
    // if (user.length > 0) {
    //   if (user[0].password === userInfo.password ) {
    //     window.location.href = 'http://localhost:4200';
    //   } else {
    //     console.log('密码错误');
    //   }
    // } else {
    //   console.log('用户不存在');
    // }

  }

  getUserInfoShow() {
    return ;
  }
  getCurrentUserInfoShow() {
    return this.ls.getDate('userInfo');
  }
  opentLogin() {
    window.location.href = window.location.origin + '/login-register';
  }
}


