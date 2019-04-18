import { Injectable } from '@angular/core';
import {LocalStorage} from '../local.storage';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private ls: LocalStorage , private http: HttpClient) { }
  getUserCollet(mobile): Observable<any> {
    return this.http.get<any>('/api/collect/' + mobile + '?t=' + (new Date()).getTime().toString());
  }
  getUserInfo(mobile): Observable<any> {
    return this.http.get<any>('/api/getUserInfo/' + mobile) ;
  }
  getCurrentUser() {
    return this.ls.getDate('userInfo').userInfo;
  }
  getLoginIdentify(userInfo): Observable<any> {
    return this.http.post<any>('/api/loginIdentify', userInfo);
  }
  upDateUserPicture(formData, user): Observable<any>  {
    return this.http.post<any>('/api/upDateUserPicture', formData, {params: user});
  }
  upDateUserInfo(date): Observable<any>  {
    return this.http.post<any>('/api/upDateUserInfo', date);
  }
  getUserActive(user): Observable<any> {
    return this.http.get<any>('/api/getUserActive/' + user + '?t=' + (new Date()).getTime().toString());
  }
  getRegisterIdentify(user): Observable<any> {
    return this.http.post<any>('/api/register',  new UserInfoRegister(user.mobile, user.userName, user.passwordGroup.password));
  }
  opentLogin() {
    window.location.href = window.location.href.split('/#')[0] + '#' + '/login-register';
  }
  // public userInfoArr: UserInfoLogin[] = [
  //   new UserInfo('13111111111', '我的名字1', '111111', '这是我的名字1描述', './assets/img//test1.jpg'),
  //   new UserInfo('13111111112', '我的名字2', '111111', '这是我的名字2描述', './assets/img//test2.jpg'),
  //   new UserInfo('13111111113', '我的名字3', '111111', '这是我的名字3的描述', './assets/img//test3.jpg'),
  //   new UserInfo('13111111114', '我的名字4', '111111', '这是我的名字4的描述', './assets/img//test4.jpg'),
  //   new UserInfo('13111111115', '我的名字5', '111111', '这是我的名字5的描述', './assets/img//test3.jpg'),
  //   new UserInfo('13111111116', '我的名字6', '111111', '这是我的名字6的描述', './assets/img//test2.jpg'),
  //   new UserInfo('13111111117', '我的名字7', '111111', '这是我的名字7的描述', './assets/img//test1.jpg'),
  // ]
  //
  // public userInfoShowArr: UserInfoShow[] = [
  //   new UserInfoShow('13111111111', '我的名字1',   '这是我的名字1描述', './assets/img//test1.jpg'),
  //   new UserInfoShow('13111111112', '我的名字2',   '这是我的名字2描述', './assets/img//test2.jpg'),
  //   new UserInfoShow('13111111113', '我的名字3',   '这是我的名字3的描述', './assets/img//test3.jpg'),
  //   new UserInfoShow('13111111114', '我的名字4',   '这是我的名字4的描述', './assets/img//test4.jpg'),
  //   new UserInfoShow('13111111115', '我的名字5',   '这是我的名字5的描述', './assets/img//test2.jpg'),
  //   new UserInfoShow('13111111116', '我的名字6',   '这是我的名字6的描述', './assets/img//test3.jpg'),
  //   new UserInfoShow('13111111117', '我的名字7',   '这是我的名字7的描述', './assets/img//test1.jpg'),
  // ]
  // public userCollect: UserCollect[] = [
  //   new UserCollect('13111111111', 'answer', {questionId: '111111111', answerId: '21111'}),
  //   new UserCollect('13111111111', 'answer', {questionId: '111111122', answerId: '21111'}),
  //   new UserCollect('13111111111', 'answer', {questionId: '111111111', answerId: '21112'}),
  //   new UserCollect('13111111111', 'answer', {questionId: '111111111', answerId: '21113'}),
  //   new UserCollect('13111111112', 'answer', {questionId: '111111111', answerId: '21114'}),
  //   new UserCollect('13111111113', 'answer', {questionId: '111111111', answerId: '21114'}),
  //   new UserCollect('13111111112', 'answer', {questionId: '111111112', answerId: '21117'}),
  //   new UserCollect('13111111115', 'answer', {questionId: '111111113', answerId: '21116'}),
  //   new UserCollect('13111111116', 'answer', {questionId: '111111114', answerId: '21115'}),
  //   new UserCollect('13111111112', 'answer', {questionId: '111111116', answerId: '21113'}),
  //   new UserCollect('13111111111', 'article', {articleId: '311113'}),
  //   new UserCollect('13111111113', 'article', {articleId: '311111'}),
  //   new UserCollect('13111111111', 'article', {articleId: '311111'}),
  //   new UserCollect('13111111112', 'article', {articleId: '311111'}),
  //   new UserCollect('13111111113', 'article', {articleId: '311111'}),
  //   new UserCollect('13111111112', 'article', {articleId: '311111'}),
  // ]
  //
  //
  //
  // changeMobile(mobile, newMobile) {
  //   console.log(this.userInfoArr.find((ele) => (ele.mobile === mobile)).mobile)
  //   this.userInfoArr.find((ele) => (ele.mobile === mobile)).mobile = newMobile;
  //   this.userInfoShowArr.find((ele) => (ele.mobile === mobile)).mobile = newMobile
  //   return this.userInfoShowArr.find((ele) => (ele.mobile === newMobile)) ;
  // }
  // changePassword(mobile, password, newPassword) {
  //   const user = this.userInfoArr.find((ele) => ( ele.mobile === mobile && ele.password === password ))
  //   if (user) {
  //       this.userInfoArr.find((ele) => (ele.mobile === mobile)).password = newPassword;
  //       console.log( this.userInfoArr.find((ele) => (ele.mobile === mobile)).password)
  //     return {success: true, message: '密码修改成功'};
  //   } else {
  //     return {success: false, message: '密码错误'};
  //   }
  // }

  // getUser(): Array<any> {
  //   return this.userInfoArr;
  // }
  // getUserForShow(mobile) {
  //   const currentUser = this.userInfoShowArr.find((ele) => {
  //     return ele.mobile === mobile;
  //   });
  //   const currentUserShow = new UserInfoShow(currentUser.mobile, currentUser.userName, currentUser.userDescription, currentUser.userPicture)
  //   return currentUser;
  // }

  // loginIdentify(userInfo) {
  //   const userArr = this.getUser();
  //   const test1 = userArr.find((ele) => (ele.mobile === userInfo.mobile))
  //   if (test1) {
  //     const test2 = test1.password === userInfo.password
  //     if ( test2 ) {
  //       const currentUSerShow = this.getUserForShow(userInfo.mobile);
  //       return {login: true, userInfo: currentUSerShow, massage: '登录成功'} ;
  //     } else { return {login: false, userInfo: {}, massage: '密码错误'}; }
  //   } else {
  //     return {login: false, userInfo: {}, massage: '用户不存在'};
  //   }
  //
  // }
  // addUser(userInfo) {
  //   this.userInfoArr.push(new UserInfo(userInfo.mobile, userInfo.userName, userInfo.passwordGroup.password, '', ''))
  //   console.log(this.userInfoArr);
  // }

  // registerIdentify(userInfo) {
  //   console.log('userInfo');
  //   console.log(userInfo);
  //   const userArr = this.getUser();
  //   const test1 = userArr.find((ele) => (ele.mobile === userInfo.mpbile));
  //   console.log(test1)
  //   if (test1) {
  //     return {register: false, message: '当前用户已存在' };
  //   } else {
  //     this.addUser(userInfo);
  //     return {register: true, message: '注册成功' };
  //   }
  // }

  // getUserCollect(mobile) {
  //   return this.userCollect.filter((ele) => {
  //     return ele.mobile === mobile;
  //   });
  // }
  // userAddCollect(content, type) {
  //   const currentUserMobile = this.getCurrentUser().mobile
  //   const currentUserCollect = this.getUserCollect(this.getCurrentUser().mobile)
  //   console.log(currentUserCollect);
  //   currentUserCollect.push(new UserCollect(currentUserMobile, type, content))
  //   console.log('bbnbn');
  //   console.log(currentUserCollect);
  // }


}


export class UserCollect {
    constructor(
      public mobile: string,
      public type: string,
      public content: any
    ) {}
}

export class UserInfoShow {
  constructor(
    public mobile: string,
    public userName: string,
    public userDescription: string,
    public userPicture: string
  ) {}
}

export class UserInfoLogin {
  constructor(
    public mobile: string,
    public password: string,
  ) {}
}

export class UserInfoRegister {
  constructor(
    public mobile: string,
    public userName: string,
    public password: string,
  ) {}
}

export class UserInfo {
  constructor(
    public mobile: string,
    public userName: string,
    public password: string,
    public userDescription: string,
    public userPicture: string,
  ) {}
}

export class UserAnswerDetail {
  constructor(
    public mobile: string,
    public answerId: string,
  ) {}
}
