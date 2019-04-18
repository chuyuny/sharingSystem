import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user/user.service';
import {equalsValidator, mobileAsyncVlidator, mobileVlidator} from '../validator/ValidatorScript';
import { LocalStorage} from '../shared/local.storage';
import {ToolJsService} from '../shared/tool-js.service';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../shared/common/common.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
export class LoginRegisterComponent implements OnInit {
  userLoginFrom: FormGroup;
  userRegisterFrom: FormGroup;
  public isLogin: boolean = true;
  public isGetIdentifyCode: boolean = true;
  public noIdentifyCode: boolean = true;
  public time: number = 10;
  public  loginIdentify;
  public  registerSuccess:boolean = true;
  public  registerInfo: string = '';
  public  loginInfo = {
    loginError: false,
    loginMessage: ''
  };
  constructor(private commonService: CommonService, private routInfo: ActivatedRoute, public userService: UserService, private fb: FormBuilder, private ls: LocalStorage, private toolJsService: ToolJsService) {
    this.userLoginFrom = this.fb.group({
      mobile: ['', [Validators.required, mobileVlidator]],
      password: ['', Validators.required],
      loginType: ['user']
    } );
    this.userRegisterFrom = this.fb.group({
      mobile: ['', [Validators.required, mobileVlidator]],
      identifyCode: [''],
      userName: ['', [Validators.required]],
      passwordGroup: this.fb.group({
        password: ['', [ Validators.required, Validators.minLength(6)]],
        pConfirm: ['']
      }, { validator: equalsValidator})
    });
  }

  ngOnInit() {
  }
  onSubmitLogin() {
    // alert(this.userService.getUser())
    if (this.userLoginFrom.valid) {
      this.userService.getLoginIdentify(this.userLoginFrom.value).subscribe(
        result => {if (result.code === 1) {
          this.ls.saveDate('userInfo', result.date);
          this.loginInfo.loginMessage = '';
          // window.location.href = window.location.href.split('/#')[0];
          window.location.href = document.referrer;
        } else if (result.code === 0) {
          this.loginInfo.loginError = true;
          this.loginInfo.loginMessage = result.date.message;
        }
        }
      );
    }
  }
  onSubmitRegister() {
    if (this.userRegisterFrom.valid) {
      if (this.userRegisterFrom.value.identifyCode.length < 1) {
        this.noIdentifyCode = false;
        return;
      } else {
        this.userService.getRegisterIdentify(this.userRegisterFrom.value).subscribe(
          result => {
            if (result.code === 2 || result.code === 0) {
                this.registerSuccess = false;
                this.registerInfo = result.message;
              } else if (result.code = 1) {
              this.ls.saveDate('userInfo', {
                login: true,
                userInfo: result.date.user,
                message: '注册成功'
              });
              this.commonService.showTipsBox.emit({
                message: '注册成功',
                type: '',
                id: '',
                isTips: true,
                nextUrl: '/editor-profile',
                currentPage: true,
              })
                // this.registerSuccess = true;
                // this.registerInfo = result.message;
                // this.toolJsService.next('/editor-profile');
            }
          }
        );
      }
    }
  }
  getIdentifyingCode() {
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
  }


}
