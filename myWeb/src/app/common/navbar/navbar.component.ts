import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorage } from '../../shared/local.storage';
import {QuestionService} from '../../shared/question/question.service';
import {ToolJsService} from '../../shared/tool-js.service';
import {CommonService} from '../../shared/common/common.service';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  public user ;
  public questionFrom: FormGroup;
  public isLogin:boolean = false;
  public showAskBox: boolean ;
  public showSearchBtn: boolean = false ;
  public searchForm;
  public keyWord;
  // public keyWord = new FormControl('', [ Validators.required, Validators.minLength(1)]);
  constructor(private toolJs: ToolJsService, private router: Router, private routeInfo: ActivatedRoute, private commonService: CommonService, private ls: LocalStorage, private fb: FormBuilder , private questionService: QuestionService, ) {}
  ngOnInit() {
    if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
      this.user = this.ls.getDate('userInfo').userInfo;
      this.isLogin = this.ls.getDate('userInfo').login;
    }
    this.showAskBox = false;
    this.buildForm();
    this.searchForm.get('keyWord').valueChanges.subscribe(
      data => {
        this.ls.removeDateSes('searchResult');
        if (data.length < 1) {
          this.showSearchBtn = false;
        } else if (data.length >= 1) {
          this.showSearchBtn = true;
        }
      }
    );
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url.split('?')[0] === '/search') {
          this.showSearchBtn = true;
          this.routeInfo.queryParams.subscribe(params => {
            if (params.keyword) {
              this.keyWord = params.keyword;
            }
          });
        } else {
          this.keyWord = '';
        }
        this.buildForm();
      });
  }
  // 构建表单方法
  buildForm() {
    // 通过 formBuilder构建表单
    this.questionFrom = this.fb.group({
      questionTitle: ['', [Validators.required, Validators.minLength(3)]],
      questionContent: ['', Validators.required]
    } );
    this.searchForm = this.fb.group(({
      keyWord : [this.keyWord ? this.keyWord : '', [ Validators.required, Validators.minLength(1)]]
    }))

  }
  exit() {
    this.ls.removeDate('userInfo');
    window.location.reload();
  }
  seach() {
    if (this.searchForm.valid) {
      this.commonService.search({
        keyword: this.searchForm.value.keyWord.trim()
      }).subscribe(
        result => {
          const data = {
            result: result,
            keyword: this.searchForm.value.keyWord.trim()
          };
          this.ls.saveDateSes('searchResult', data);
          this.commonService.searchEvent.emit(data);
        }
      );
    }
  }
  showAsk() {
    if (this.isLogin) {
      this.showAskBox = !this.showAskBox;
    } else {
      this.toolJs.currentPage('/login-register');
    }
  }
  onSubmitAsk() {
    if (this.questionFrom.valid) {
      if (this.questionFrom.value.questionTitle.indexOf('?') < 0) {
        this.questionFrom.value.questionTitle += '?';
      }
      this.questionService.addQuestion({
        question: this.questionFrom.value,
        questionAuthor: this.user.mobile
      }).subscribe(
        result => {
          this.showAskBox = false;
          if (result.code === 1) {
            this.ls.removeDate('newQuestionDetail');
            this.ls.saveDate('newQuestionDetail', result.data);
            console.log(result.data);
            this.commonService.showTipsBox.emit({
              message: '发表成功',
              type: '',
              id: '',
              isTips: true,
              nextUrl: '/question-detail/' + result.data.question.questionId,
              currentPage: true
            });
          } else if (result.code === 0) {
            this.commonService.showTipsBox.emit({
              message: '发表失败',
              type: '',
              id: '',
              isTips: true,
            });
          }
        }
      );
    }
  }
}
