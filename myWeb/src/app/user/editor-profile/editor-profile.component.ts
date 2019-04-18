import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {LocalStorage} from '../../shared/local.storage';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import * as $ from 'jquery';
import {ToolJsService} from '../../shared/tool-js.service';

@Component({
  selector: 'app-editor-profile',
  templateUrl: './editor-profile.component.html',
  styleUrls: ['./editor-profile.component.less']
})
export class EditorProfileComponent implements OnInit {
  constructor(private toolJsService: ToolJsService, private router: Router, private routeInfo: ActivatedRoute,  private userService: UserService, private fb: FormBuilder, public _d: DomSanitizer, private ls: LocalStorage) {
  }
  public user;
  public userPicture;
  public test;
  public showNameChange: boolean = false;
  public showSexChange: boolean = false;
  public showDescriptionChange: boolean = false;
  public showIntroductionChange: boolean = false;

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  fileChange(e) {
    const file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
    if (file) {
      let formData = new FormData();
      formData.append("userfile", file);
      this.userService.upDateUserPicture(formData, this.user).subscribe(
        result => {
          if (result.code === 1) {
            this.user.userPicture = result.uploadPath ;
            this.ls.saveDate('userInfo', {login: true, userInfo: this.user, message: '登录成功'})
            this.userPicture = result.uploadPath; // 获取上传的图片临时路径;
            this.user = this.ls.getDate('userInfo').userInfo;
            console.log(this.user);
          }
        }
      )
    }
  }
  enter(event) {
    $(event.currentTarget).children('.change').show();
  }
  leave(event) {
    $(event.currentTarget).children('.change').hide();
  }
  savaChange(value, type) {
    if (type === 'userName') {
      this.userService.upDateUserInfo({user: this.user, value: value, type: type}).subscribe(
        result => {
          if(result.code === 1) {
            this.user.userName = value;
            this.ls.saveDate('userInfo', {login: true, userInfo: this.user, message: '登录成功'})
          }
        }
      )
      this.showNameChange = false;
    }
    if (type === 'sex') {
      this.userService.upDateUserInfo({user: this.user, value: value, type: type}).subscribe(
        result => {
          if(result.code === 1) {
            this.user.sex = value;
            this.ls.saveDate('userInfo', {login: true, userInfo: this.user, message: '登录成功'})
          }
        }
      )

      this.showSexChange = false;
    }
    if (type === 'description') {
      this.userService.upDateUserInfo({user: this.user, value: value, type: type}).subscribe(
        result => {
          if(result.code === 1) {
            this.user.userDescription = value;
            this.ls.saveDate('userInfo', {login: true, userInfo: this.user, message: '登录成功'})
          }
        }
      )
      this.showDescriptionChange = false;
    }
    if (type === 'introduction') {
      this.userService.upDateUserInfo({user: this.user, value: value, type: type}).subscribe(
        result => {
          if(result.code === 1) {
            this.user.introduction = value;
            this.ls.saveDate('userInfo', {login: true, userInfo: this.user, message: '登录成功'})
          }
        }
      )
      this.showIntroductionChange = false;
    }

  }

}
