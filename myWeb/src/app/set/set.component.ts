import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../shared/local.storage';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../shared/user/user.service';
import {mobileVlidator} from '../validator/ValidatorScript';
import {CommonService} from '../shared/common/common.service';
import {ToolJsService} from '../shared/tool-js.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit {
  public currentUser;
  public isLogin = false;
  public password ;
  public newPassword;
  public newPconfirm;
  public newMobile  = new FormControl('', [Validators.required, mobileVlidator]);
  public mobile  = new FormControl('', [Validators.required, mobileVlidator]);
  public identifyCode;
  public isChangSuccess;
  public error;
  public showChangPassword: boolean = true;
  public showChangMobile: boolean = false;
  public showCurrentMobile: boolean = true;
  public time: number = 10;
  public identify: boolean = true;
  public isGetIdentifyCode: boolean = true;
  public changMobileMessage: boolean = false;
  public changeResult;

  constructor(private toolJs: ToolJsService, private ls: LocalStorage, private userService: UserService, private commonService: CommonService) { }

  ngOnInit() {
    if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
      this.isLogin = this.ls.getDate('userInfo').login;
      this.currentUser = this.ls.getDate('userInfo').userInfo;
    } else {
      this.isLogin = false;
      this.toolJs.currentPage('/login-register');
    }
  }
  show(type) {
    if (type === 'mobile') {
      this.showCurrentMobile = true;
      if (this.isLogin) {
        this.showChangMobile = true
        this.showChangPassword = false;
      } else {
        return;
      }
    } else if (type === 'password') {
      this.showChangMobile = false
      this.showChangPassword = true;
    }
  }
  confirm(type) {
    if (type === 'password') {
      if (this.newPassword !== undefined && this.newPassword === this.newPconfirm) {
          if (this.commonService.identifyCode(this.currentUser.mobile, this.identifyCode)){
            this.identify = true;
            this.identifyCode = undefined;
            this.userService.upDateUserInfo({
                  user: { mobile: this.currentUser.mobile},
                  value: this.newPassword,
                  type: type})
                .subscribe(
                  result => {
                    this.changeResult = result;
                    if (result.code === 1) {
                      this.isChangSuccess = true;
                      this.newPassword = undefined;
                      this.newPconfirm = undefined;
                      this.ls.removeDate('userInfo');
                      this.commonService.showTipsBox.emit({
                        message: '修改密码成功',
                        type: '',
                        id: '',
                        isTips: true,
                        nextUrl: '/login-register',
                        currentPage: true
                      })
                    } else if (result.code === 0) {
                      this.isChangSuccess = false;
                    }
                  }
                );
         } else {
            this.identify = false;
            this.identifyCode = undefined;
          }
      }

    }
    if (type === 'changeMobile') {
      if (this.showCurrentMobile ) {
         if (this.commonService.identifyCode(this.currentUser.mobile, this.identifyCode)){
           this.showCurrentMobile = false;
           this.identify = true;
           this.identifyCode = undefined;
         } else {
           this.identify = false;
           this.showCurrentMobile = true;
           this.identifyCode = undefined;
         }
      } else if (!this.showCurrentMobile ) {
        this.identify = true;
        if (this.currentUser.mobile !== this.newMobile.value) {
          if (this.commonService.identifyCode(this.newMobile, this.identifyCode)) {
            this.identify = true;
            this.userService.upDateUserInfo({
              user: { mobile: this.currentUser.mobile},
              value: this.newMobile.value,
              type: 'mobile'})
              .subscribe(
                result => {console.log(result)
                  if (result.code === 1 ) {
                    this.changMobileMessage = true;
                    this.currentUser.mobile =  this.newMobile.value;
                    this.ls.removeDate('userInfo');
                    this.commonService.showTipsBox.emit({
                      message: '修改号码成功',
                      type: '',
                      id: '',
                      isTips: true,
                      nextUrl: '/login-register',
                      currentPage: true
                    });
                  } else {
                    this.commonService.showTipsBox.emit({
                      message: result.message,
                      isTips: true,
                    });
                  }
                }
              );
          } else {
            this.identify = false;
            this.identifyCode = undefined;
          }
        } else {

        }
      }

    }
  }
  getIdentifyingCode(iscurrentUser) {
    let can = false;
    if (this.newMobile.valid || this.mobile.valid) {
      can = true;
    }  else if (iscurrentUser) {
      can = true;
    }
    if (can) {
      this.error = undefined;
      let timer;
      this.isGetIdentifyCode = !this.isGetIdentifyCode;
      timer = setInterval( () => {
        if (this.time > 0 && !this.isGetIdentifyCode) {
          this.time--;
        } else {
          clearInterval(timer);
          this.isGetIdentifyCode = true;
          this.time = 10;
        }
      }, 1000);
    } else {
      this.error = ' 请输入正确手机号吗';
    }

  }

}
