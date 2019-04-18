(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer-detail/answer-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/answer-detail/answer-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"detail\" (mouseleave)=\"getMouseleave($event,i)\" (mouseenter)=\"getMouseEnter($event,i)\">-->\n  <!--<div class=\"user-info\">-->\n    <!--<img class=\"user-portrait\" [src]=\"recommend.answer.answerAuthor.userPicture\" alt=\"\">-->\n    <!--<span class=\"user-name\">{{recommend.answer.answerAuthor.userName}}</span>-->\n    <!--<span class=\"user-description\">{{recommend.answer.answerAuthor.userDescription}}</span>-->\n  <!--</div>-->\n  <!--<div class=\"answer-detail\" [innerHTML]=\"recommend.answer.answerDetail.answerContent | html\"></div>-->\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/answer-detail/answer-detail.component.less":
/*!************************************************************!*\
  !*** ./src/app/answer-detail/answer-detail.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail .user-info {\n  height: 30px;\n}\n.detail .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.detail .user-info .user-name,\n.detail .user-info .user-description {\n  margin-left: 12px;\n}\n.detail .user-info .user-name {\n  font-size: 24px;\n}\n.detail .answer-detail {\n  margin-top: 24px;\n}\n"

/***/ }),

/***/ "./src/app/answer-detail/answer-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/answer-detail/answer-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: AnswerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDetailComponent", function() { return AnswerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswerDetailComponent = /** @class */ (function () {
    function AnswerDetailComponent() {
    }
    AnswerDetailComponent.prototype.ngOnInit = function () {
    };
    AnswerDetailComponent.prototype.getMouseleave = function (event, i) {
        $($('.answer .takeUp')[i]).hide();
    };
    AnswerDetailComponent.prototype.getMouseEnter = function (event, i) {
        var test = $(event.currentTarget).find('.answer').is('.is-collapsed');
        if (!test) {
            $($('.answer .takeUp')[i]).show();
        }
        else {
            $($('.answer .takeUp')[i]).hide();
        }
    };
    AnswerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-detail',
            template: __webpack_require__(/*! ./answer-detail.component.html */ "./src/app/answer-detail/answer-detail.component.html"),
            styles: [__webpack_require__(/*! ./answer-detail.component.less */ "./src/app/answer-detail/answer-detail.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswerDetailComponent);
    return AnswerDetailComponent;
}());



/***/ }),

/***/ "./src/app/answer-list/answer-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/answer-list/answer-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"answer-item\" *ngIf=\" isAnswerList \"  >\n  <div class=\"question-list home-left\" *ngFor=\"let answer of answerArr ; let i = index \" (mouseleave)=\"getMouseleave($event,i)\" (mouseenter)=\"getMouseEnter($event,i)\">\n    <!--<h4 ><a [routerLink]=\"['/question-detail',recommend.questionId]\">{{ recommend.questionTitle }}</a></h4>-->\n    <div class=\"answer-content\">\n      <div class=\"user-info\">\n        <img class=\"user-portrait\" [src]=\"answer.answerAuthor.userPicture\" alt=\"\" [routerLink]=\"['/profile',answer.answerAuthor.mobile,'actives']\">\n        <span class=\"user-name\" [routerLink]=\"['/profile',answer.answerAuthor.mobile,'actives']\">{{answer.answerAuthor.userName}}</span>\n        <span class=\"user-description\">{{answer.answerAuthor.userDescription}}</span>\n      </div>\n      <div class=\"answer \" [ngClass]=\"{'is-collapsed':answer.answerDetail.answerContent.length>300}\">\n        <div class=\"answer-inner\">\n          <div class=\"answer-detail\" [innerHTML]=\"answer.answerDetail.answerContent | html\" ></div>\n        </div>\n        <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"answer.answerDetail.answerContent.length<=300\" (click)=\"readAll($event,isShowReadAll,i)\">\n          阅读全文\n          <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n        </button>\n        <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n          收起\n          <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n        </button>\n      </div>\n    </div>\n    <!--operation-->\n    <div class=\"question-detail-operation \">\n      <app-operation [(answer)]=\"answerArr[i]\"></app-operation>\n    </div>\n  </div>\n</div>\n\n<!--answer-user-->\n<div class=\"user-answer\" *ngIf=\"isUserAnswer\">\n  <div class=\"answer-item\" *ngFor=\"let userAnswerDetail of userAnswerDetailArr; let i = index\" (mouseleave)=\"getMouseleave($event,i)\" (mouseenter)=\"getMouseEnter($event,i)\">\n    <div class=\"question-list home-left\"  >\n      <div class=\"question-title\">\n        <h3 ><a [routerLink]=\"['/question-detail', userAnswerDetail.questionDetail.questionId]\">{{ userAnswerDetail.questionDetail.questionTitle }}</a></h3>\n      </div>\n      <div class=\"answer-content\">\n        <div class=\"user-info\">\n          <img class=\"user-portrait\" [src]=\"currentUserInfo.userPicture\" alt=\"\" [routerLink]=\"['/profile',currentUserInfo.mobile,'actives']\">\n          <span class=\"user-name\" [routerLink]=\"['/profile',currentUserInfo.mobile,'actives']\">{{currentUserInfo.userName}}</span>\n          <span class=\"user-description\">{{currentUserInfo.userDescription}}</span>\n        </div>\n        <div class=\"answer \" [ngClass]=\"{'is-collapsed':userAnswerDetail.answerDetail.answerContent.length>300}\">\n          <div class=\"answer-inner\">\n            <div class=\"answer-detail\" [innerHTML]=\"userAnswerDetail.answerDetail.answerContent | html\"></div>\n          </div>\n          <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"userAnswerDetail.answerDetail.answerContent.length<=300\" (click)=\"readAll($event,isShowReadAll,i)\">\n            阅读全文\n            <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n          </button>\n          <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n            收起\n            <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n          </button>\n        </div>\n      </div>\n      <div class=\"question-detail-operation \">\n        <app-operation [(userAnswerDetail)]=\"userAnswerDetailArr[i]\"></app-operation>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/answer-list/answer-list.component.less":
/*!********************************************************!*\
  !*** ./src/app/answer-list/answer-list.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-detail .operation .follow-question,\n.question-detail .operation .write-answer {\n  height: 30px;\n  width: 100px;\n  background-color: #0084FF;\n  color: white;\n}\n.question-detail .operation .write-answer {\n  background-color: white;\n  border: 1px solid #0084FF;\n  color: #0084FF;\n}\n.editor-write {\n  margin-top: 24px;\n  margin-left: -8.33333333%;\n}\n.editor-write .user-info {\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  padding-left: 24px;\n}\n.editor-write .user-info .user-right .user-portrait {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n}\n.editor-write .user-info .user-left {\n  margin-left: 12px;\n}\n.editor-write .user-info .user-left .user-name,\n.editor-write .user-info .user-left .user-description {\n  display: block;\n  font-size: 18px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.editor-write .user-info .user-left .user-description {\n  font-size: 12px;\n}\n.question-list {\n  border-top: 1px solid #b2b2b2;\n  padding: 24px;\n  margin-bottom: 12px;\n}\n.question-list .article-list-content .article-content {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.question-list .answer-detail {\n  margin-top: 24px;\n}\n.question-list .answer-content .user-info {\n  height: 30px;\n}\n.question-list .answer-content .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.question-list .answer-content .user-info .user-name,\n.question-list .answer-content .user-info .user-description {\n  margin-left: 12px;\n}\n.question-list .answer-content .user-info .user-name {\n  font-size: 24px;\n}\n.question-list .answer-content .answer {\n  position: relative;\n}\n.question-list .answer-content .answer .answer-inner .answer-detail {\n  width: 100%;\n  font-size: 16px;\n  line-height: 2;\n}\n.question-list .answer-content .answer.is-collapsed .answer-inner {\n  max-height: 300px;\n  overflow: hidden;\n}\n.question-list .answer-content .answer .read-all {\n  position: absolute;\n  padding-top: 10px;\n  bottom: 0px;\n  width: 100%;\n  height: 40px;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #ffffff);\n  font-size: 24px;\n}\n.question-list .answer-content .answer .takeUp {\n  display: none;\n  position: fixed;\n  height: 30px;\n  width: 80px;\n  right: 35%;\n  top: 80%;\n  z-index: 1000000;\n  background-color: #0084FF;\n  color: white;\n}\n.question-list .answer-content .detail {\n  display: none;\n}\n.question-list .answer-content .detail .answer-detail {\n  margin-top: 24px;\n}\n.question-list .takeUp {\n  display: none;\n}\n.answer-item {\n  width: 100%;\n}\n.answer-item .question-title h3 a {\n  color: black;\n}\n.answer-item .question-title h3 a:hover {\n  text-decoration: none;\n  color: #333;\n}\n.red {\n  display: none;\n  position: fixed;\n  bottom: 10px;\n  left: 400px;\n  z-index: 100000;\n  z-index: 10000000011;\n}\n"

/***/ }),

/***/ "./src/app/answer-list/answer-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/answer-list/answer-list.component.ts ***!
  \******************************************************/
/*! exports provided: AnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function() { return AnswerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/get-question.service */ "./src/app/shared/get-question.service.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerListComponent = /** @class */ (function () {
    function AnswerListComponent(getQuestionService) {
        var _this = this;
        this.getQuestionService = getQuestionService;
        this.userAnswerDetailArrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answerArrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isWriteAnswer = true;
        this.readAll = function (event, isShowReadAll, index) {
            console.log(index);
            if (index >= 0) {
                $(event.currentTarget).parent().removeClass('is-collapsed');
                $(event.currentTarget).hide();
                $($('.answer-item .takeUp')[index]).show();
            }
            else {
                _this.isShowReadAll = false;
            }
            event.stopPropagation();
        };
    }
    AnswerListComponent.prototype.ngOnInit = function () {
    };
    AnswerListComponent.prototype.ngOnChanges = function (changes) {
    };
    AnswerListComponent.prototype.takeUp = function (event, isShowReadAll, index) {
        if (index >= 0) {
            $(event.currentTarget).hide();
            $(event.currentTarget).parent().siblings('.answer-content').children('.answer').addClass('is-collapsed');
            $($('.answer .read-all')[index]).show();
        }
        else {
            $(event.currentTarget).parent().addClass('is-collapsed');
            $(event.currentTarget).hide();
            $(event.currentTarget).siblings('.read-all').show();
        }
    };
    AnswerListComponent.prototype.getMouseleave = function (event, i) {
        $($('.answer .takeUp')[i]).hide();
    };
    AnswerListComponent.prototype.getMouseEnter = function (event, i) {
        var test = $(event.currentTarget).find('.answer').is('.is-collapsed');
        var isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
        if (!test && isShowReadAll !== 'hidden') {
            $($('.answer .takeUp')[i]).show();
        }
        else {
            $($('.answer .takeUp')[i]).hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnswerListComponent.prototype, "isUserAnswer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnswerListComponent.prototype, "isAnswerList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoShow"])
    ], AnswerListComponent.prototype, "currentUserInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AnswerListComponent.prototype, "userAnswerDetailArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerListComponent.prototype, "userAnswerDetailArrChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AnswerListComponent.prototype, "answerArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerListComponent.prototype, "answerArrChange", void 0);
    AnswerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-list',
            template: __webpack_require__(/*! ./answer-list.component.html */ "./src/app/answer-list/answer-list.component.html"),
            styles: [__webpack_require__(/*! ./answer-list.component.less */ "./src/app/answer-list/answer-list.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__["GetQuestionService"]])
    ], AnswerListComponent);
    return AnswerListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"home-box\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n<app-confirm-box [(data)] = \"data\" *ngIf=\"data\"></app-confirm-box>\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-box {\n  min-height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.showTipsBox.subscribe(function (result) {
            _this.data = result;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _common_operation_operation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/operation/operation.component */ "./src/app/common/operation/operation.component.ts");
/* harmony import */ var _common_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/editor/editor.component */ "./src/app/common/editor/editor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _right_bar_right_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./right-bar/right-bar.component */ "./src/app/right-bar/right-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/question-list/question-list.component.ts");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-register/login-register.component */ "./src/app/login-register/login-register.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_content_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/content/content.component */ "./src/app/user/content/content.component.ts");
/* harmony import */ var _answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./answer-list/answer-list.component */ "./src/app/answer-list/answer-list.component.ts");
/* harmony import */ var _answer_detail_answer_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./answer-detail/answer-detail.component */ "./src/app/answer-detail/answer-detail.component.ts");
/* harmony import */ var _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recommend/recommend.component */ "./src/app/recommend/recommend.component.ts");
/* harmony import */ var _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./question-detail/question-detail.component */ "./src/app/question-detail/question-detail.component.ts");
/* harmony import */ var _user_actives_actives_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/actives/actives.component */ "./src/app/user/actives/actives.component.ts");
/* harmony import */ var _user_asks_asks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/asks/asks.component */ "./src/app/user/asks/asks.component.ts");
/* harmony import */ var _user_answers_answers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/answers/answers.component */ "./src/app/user/answers/answers.component.ts");
/* harmony import */ var _common_article_article_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/article/article.component */ "./src/app/common/article/article.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./article-detail/article-detail.component */ "./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var _common_comment_detail_comment_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/comment-detail/comment-detail.component */ "./src/app/common/comment-detail/comment-detail.component.ts");
/* harmony import */ var _shared_pipe_innerhtmlpipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/pipe/innerhtmlpipe */ "./src/app/shared/pipe/innerhtmlpipe.ts");
/* harmony import */ var _hot_hot_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hot/hot.component */ "./src/app/hot/hot.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hot_article_hot_article_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hot-article/hot-article.component */ "./src/app/hot-article/hot-article.component.ts");
/* harmony import */ var _user_articles_articles_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/articles/articles.component */ "./src/app/user/articles/articles.component.ts");
/* harmony import */ var _common_ask_ask_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./common/ask/ask.component */ "./src/app/common/ask/ask.component.ts");
/* harmony import */ var _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/answer/answer.component */ "./src/app/common/answer/answer.component.ts");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/article/article.service */ "./src/app/shared/article/article.service.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_ask_ask_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/ask/ask.service */ "./src/app/shared/ask/ask.service.ts");
/* harmony import */ var _shared_comment_comment_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/comment/comment.service */ "./src/app/shared/comment/comment.service.ts");
/* harmony import */ var _user_editor_profile_editor_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user/editor-profile/editor-profile.component */ "./src/app/user/editor-profile/editor-profile.component.ts");
/* harmony import */ var _user_collect_collect_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user/collect/collect.component */ "./src/app/user/collect/collect.component.ts");
/* harmony import */ var _user_follow_follow_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/follow/follow.component */ "./src/app/user/follow/follow.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./set/set.component */ "./src/app/set/set.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _shared_http_interceptors__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/http-interceptors */ "./src/app/shared/http-interceptors/index.ts");
/* harmony import */ var _registe_ok_registe_ok_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./registe-ok/registe-ok.component */ "./src/app/registe-ok/registe-ok.component.ts");
/* harmony import */ var _shared_pipe_searchkeyword_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./shared/pipe/searchkeyword.pipe */ "./src/app/shared/pipe/searchkeyword.pipe.ts");
/* harmony import */ var _common_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./common/confirm-box/confirm-box.component */ "./src/app/common/confirm-box/confirm-box.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./common/tab-card/tab-card.component */ "./src/app/common/tab-card/tab-card.component.ts");
/* harmony import */ var _common_question_type1_question_type1_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./common/question-type1/question-type1.component */ "./src/app/common/question-type1/question-type1.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _shared_alter_alter_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/alter/alter.service */ "./src/app/shared/alter/alter.service.ts");
/* harmony import */ var _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/answer/answer.service */ "./src/app/shared/answer/answer.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var routeConfig = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], children: [
            { path: '', component: _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__["RecommendComponent"] },
            { path: 'hot', component: _hot_hot_component__WEBPACK_IMPORTED_MODULE_27__["HotComponent"] },
            { path: 'hot-article', component: _hot_article_hot_article_component__WEBPACK_IMPORTED_MODULE_29__["HotArticleComponent"] },
        ] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'question-detail/:questionId', component: _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_17__["QuestionDetailComponent"] },
    { path: 'editor', component: _common_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"] },
    { path: 'login-register', component: _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_11__["LoginRegisterComponent"] },
    { path: 'question-list', component: _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListComponent"] },
    { path: 'article-detail/:articleId', component: _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_24__["ArticleDetailComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_41__["SearchComponent"] },
    { path: 'profile/:userMobile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], children: [
            { path: 'actives', component: _user_actives_actives_component__WEBPACK_IMPORTED_MODULE_18__["ActivesComponent"] },
            { path: 'answers', component: _user_answers_answers_component__WEBPACK_IMPORTED_MODULE_20__["AnswersComponent"] },
            { path: 'articles', component: _user_articles_articles_component__WEBPACK_IMPORTED_MODULE_30__["ArticlesComponent"] },
            { path: 'asks', component: _user_asks_asks_component__WEBPACK_IMPORTED_MODULE_19__["AsksComponent"] },
            { path: 'collect', component: _user_collect_collect_component__WEBPACK_IMPORTED_MODULE_38__["CollectComponent"] },
            { path: 'follow', component: _user_follow_follow_component__WEBPACK_IMPORTED_MODULE_39__["FollowComponent"] },
        ] },
    { path: 'editor-profile', component: _user_editor_profile_editor_profile_component__WEBPACK_IMPORTED_MODULE_37__["EditorProfileComponent"] },
    { path: 'set', component: _set_set_component__WEBPACK_IMPORTED_MODULE_40__["SetComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _common_operation_operation_component__WEBPACK_IMPORTED_MODULE_4__["OperationComponent"],
                _common_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _right_bar_right_bar_component__WEBPACK_IMPORTED_MODULE_8__["RightBarComponent"],
                _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_10__["QuestionListComponent"],
                _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_11__["LoginRegisterComponent"],
                _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _user_content_content_component__WEBPACK_IMPORTED_MODULE_13__["ContentComponent"],
                _answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_14__["AnswerListComponent"],
                _answer_detail_answer_detail_component__WEBPACK_IMPORTED_MODULE_15__["AnswerDetailComponent"],
                _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__["RecommendComponent"],
                _question_detail_question_detail_component__WEBPACK_IMPORTED_MODULE_17__["QuestionDetailComponent"],
                _user_actives_actives_component__WEBPACK_IMPORTED_MODULE_18__["ActivesComponent"],
                _user_asks_asks_component__WEBPACK_IMPORTED_MODULE_19__["AsksComponent"],
                _user_answers_answers_component__WEBPACK_IMPORTED_MODULE_20__["AnswersComponent"],
                _common_article_article_component__WEBPACK_IMPORTED_MODULE_21__["ArticleComponent"],
                _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_24__["ArticleDetailComponent"],
                _common_comment_detail_comment_detail_component__WEBPACK_IMPORTED_MODULE_25__["CommentDetailComponent"],
                _shared_pipe_innerhtmlpipe__WEBPACK_IMPORTED_MODULE_26__["HtmlPipe"],
                _hot_hot_component__WEBPACK_IMPORTED_MODULE_27__["HotComponent"],
                _hot_article_hot_article_component__WEBPACK_IMPORTED_MODULE_29__["HotArticleComponent"],
                _user_articles_articles_component__WEBPACK_IMPORTED_MODULE_30__["ArticlesComponent"],
                _common_ask_ask_component__WEBPACK_IMPORTED_MODULE_31__["AskComponent"],
                _common_answer_answer_component__WEBPACK_IMPORTED_MODULE_32__["AnswerComponent"],
                _user_editor_profile_editor_profile_component__WEBPACK_IMPORTED_MODULE_37__["EditorProfileComponent"],
                _user_collect_collect_component__WEBPACK_IMPORTED_MODULE_38__["CollectComponent"],
                _user_follow_follow_component__WEBPACK_IMPORTED_MODULE_39__["FollowComponent"],
                _set_set_component__WEBPACK_IMPORTED_MODULE_40__["SetComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_41__["SearchComponent"],
                _registe_ok_registe_ok_component__WEBPACK_IMPORTED_MODULE_43__["RegisteOkComponent"],
                _shared_pipe_searchkeyword_pipe__WEBPACK_IMPORTED_MODULE_44__["SearchkeywordPipe"],
                _common_confirm_box_confirm_box_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmBoxComponent"],
                _common_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_47__["TabCardComponent"],
                _common_question_type1_question_type1_component__WEBPACK_IMPORTED_MODULE_48__["QuestionType1Component"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_49__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routeConfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__["BrowserAnimationsModule"],
            ],
            providers: [
                _shared_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"],
                _shared_question_question_service__WEBPACK_IMPORTED_MODULE_34__["QuestionService"],
                _shared_local_storage__WEBPACK_IMPORTED_MODULE_23__["LocalStorage"],
                _shared_article_article_service__WEBPACK_IMPORTED_MODULE_33__["ArticleService"],
                _shared_ask_ask_service__WEBPACK_IMPORTED_MODULE_35__["AskService"],
                _shared_comment_comment_service__WEBPACK_IMPORTED_MODULE_36__["CommentService"],
                _shared_alter_alter_service__WEBPACK_IMPORTED_MODULE_50__["AlterService"],
                _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_51__["AnswerService"],
                _shared_common_common_service__WEBPACK_IMPORTED_MODULE_52__["CommonService"],
                _shared_http_interceptors__WEBPACK_IMPORTED_MODULE_42__["httpInterceptorProviders"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_53__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_53__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-detail/article-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-box\" *ngIf=\"article\">\n  <nav class=\"article-detail-nav\" *ngIf=\"!isWriteAnswer\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand logo-a\" href=\"#\"><img class=\"logo-img\" src=\"./assets/img/logo.png\" alt=\"logo\"></a>\n        </div>\n        <div class=\"article-detail-nav-right pull-right\">\n          <a [routerLink]=\"['/editor']\" class=\"release\" >写文章</a>\n        </div>\n      </div>\n    </nav>\n  <div class=\"container-mine\">\n    <div class=\"article-detail\">\n      <div class=\"article-title\"><h2><a>{{article.article.articleTitle}}</a></h2></div>\n      <div class=\"user-info\">\n        <div class=\"user-right\">\n          <img class=\"user-portrait\" [routerLink]=\"['/profile',article.articleAuthor.mobile,'actives']\" [src]=\"article.articleAuthor.userPicture?article.articleAuthor.userPicture:'assets/img/noUserPicture.jpg'\" alt=\"\">\n        </div>\n        <div class=\"user-left\">\n          <span class=\"user-name\" [routerLink]=\"['/profile',article.articleAuthor.mobile,'actives']\">{{article.articleAuthor.userName}}</span>\n          <span class=\"user-description\">{{article.articleAuthor.userDescription+'cccccccccccccccccccccc'}}</span>\n        </div>\n      </div>\n      <div class=\"article-content\" [innerHTML]=\"article.article.articleContent | html\"></div>\n    </div>\n  </div>\n  <div class=\"comment-detail\" *ngIf=\"isShowComment\">\n    <div class=\"container-mine article-comment\">\n      <app-comment-detail [isArticleDetail]=\"isArticleDetail\" [articleId]=\"article.article.articleId\"></app-comment-detail>\n    </div>\n    <div class=\"close-comment\" (click)=\"isShowComment =!isShowComment\">X</div>\n  </div>\n  <div class=\"article-detail-bottom\">\n    <div class=\"container-mine \">\n      <app-operation [isArticleDetail]=\"isArticleDetail\" [(article)]=\"article.article\" [(isShowComment)]=\"isShowComment\"></app-operation>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.less":
/*!**************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-box .logo-a {\n  height: 50px;\n  width: 60px;\n  padding: 0px;\n  margin-right: 24px;\n}\n.article-box .logo-a .logo-img {\n  display: block;\n  height: 50px;\n}\n.article-box .article-detail-nav {\n  height: 50px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 1030;\n  background-color: #9487bf;\n  opacity: 1;\n}\n.article-box .article-detail-nav .article-detail-nav-right {\n  height: 100%;\n}\n.article-box .article-detail-nav .article-detail-nav-right .release {\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n  color: white;\n}\n.article-box .article-detail-nav .article-detail-nav-right .release:hover {\n  text-decoration: none;\n}\n.article-box .article-detail {\n  padding: 24px;\n  background-color: white;\n}\n.article-box .article-detail .article-title h2 a {\n  color: #333;\n}\n.article-box .article-detail .article-title h2 a:hover {\n  text-decoration: none;\n}\n.article-box .article-detail .user-info {\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.article-box .article-detail .user-info .user-right .user-portrait {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n}\n.article-box .article-detail .user-info .user-left {\n  margin-left: 12px;\n}\n.article-box .article-detail .user-info .user-left .user-name,\n.article-box .article-detail .user-info .user-left .user-description {\n  display: block;\n  font-size: 18px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.article-box .article-detail .user-info .user-left .user-description {\n  font-size: 12px;\n}\n.article-box .article-detail-bottom {\n  height: 50px;\n  width: 100%;\n  position: fixed;\n  bottom: 2px;\n  z-index: 1030;\n  background-color: white;\n  box-shadow: 0 0 2px rgba(200, 200, 200, 0.3);\n}\n.article-box .comment-detail {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1110000;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 48px;\n}\n.article-box .comment-detail .article-comment {\n  height: 600px;\n}\n.article-box .comment-detail .close-comment {\n  position: absolute;\n  z-index: 1110001;\n  height: 30px;\n  width: 30px;\n  color: white;\n  background-color: #a62d26;\n  line-height: 30px;\n  text-align: center;\n  font-size: 24px;\n  right: 120px;\n  top: 60px;\n}\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function() { return ArticleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(ls, toolJs, routInfo, articleService) {
        this.ls = ls;
        this.toolJs = toolJs;
        this.routInfo = routInfo;
        this.articleService = articleService;
        this.isArticleDetail = true;
        this.isShowComment = false;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleId = this.routInfo.snapshot.params['articleId'];
        if (!$.isEmptyObject(this.ls.getDate('articleDetail'))) {
            if (Number(this.articleId) === Number(this.ls.getDate('articleDetail').article.articleId)) {
                this.article = this.ls.getDate('articleDetail');
                this.ls.removeDate('articleDetail');
            }
            else {
                this.articleService.getArticleDetail(this.articleId).subscribe(function (result) {
                    if (result.code === 1) {
                        _this.article = result.data;
                    }
                });
            }
        }
        else {
            this.articleService.getArticleDetail(this.articleId).subscribe(function (result) {
                if (result.code === 1) {
                    _this.article = result.data;
                }
            });
        }
    };
    ArticleDetailComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ArticleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-detail',
            template: __webpack_require__(/*! ./article-detail.component.html */ "./src/app/article-detail/article-detail.component.html"),
            styles: [__webpack_require__(/*! ./article-detail.component.less */ "./src/app/article-detail/article-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__["ToolJsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"]])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());



/***/ }),

/***/ "./src/app/common/answer/answer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/answer/answer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"answer-item home-left\" *ngIf=\"answer \" >\n    <!--<h4 ><a [routerLink]=\"['/question-detail',recommend.questionId]\">{{ recommend.questionTitle }}</a></h4>-->\n    <div class=\"answer-content\">\n      <div class=\"user-info\">\n        <img class=\"user-portrait\" [src]=\"answer.answerAuthor.userPicture\" alt=\"\" [routerLink]=\"['/profile',answer.answerAuthor.mobile,'actives']\">\n        <span class=\"user-name\" [routerLink]=\"['/profile',answer.answerAuthor.mobile,'actives']\">{{answer.answerAuthor.userName}}</span>\n        <span class=\"user-description\">{{answer.answerAuthor.userDescription}}</span>\n      </div>\n      <div class=\"answer \" [ngClass]=\"{'is-collapsed':answer.answer.answerContent.length>300}\"  (mouseleave)=\"getMouseleave($event)\" (mouseenter)=\"getMouseEnter($event)\">\n        <div class=\"answer-inner\">\n          <div class=\"answer-detail\" [innerHTML]=\"answer.answer.answerContent | html\" ></div>\n        </div>\n        <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"answer.answer.answerContent.length<=300\" (click)=\"readAll($event)\">\n          阅读全文\n          <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n        </button>\n        <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n          收起\n          <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n        </button>\n      </div>\n    </div>\n    <!--operation-->\n    <div class=\"question-detail-operation \">\n      <app-operation [(answer)]=\"answer.answer\"></app-operation>\n    </div>\n  </div>\n\n\n <div class=\"answer-item \" *ngIf=\"userAnswerDetail\" >\n   <div class=\"question-title\">\n     <h3 ><a [routerLink]=\"['/question-detail', userAnswerDetail.question.questionId]\">{{ userAnswerDetail.question.questionTitle }}</a></h3>\n   </div>\n   <div class=\"answer-content\">\n     <div class=\"user-info\">\n       <img class=\"user-portrait\" [src]=\"userAnswerDetail.answerAuthor.userPicture\" alt=\"\" [routerLink]=\"['/profile',userAnswerDetail.answerAuthor.mobile,'actives']\">\n       <span class=\"user-name\" [routerLink]=\"['/profile',userAnswerDetail.answerAuthor.mobile,'actives']\">{{userAnswerDetail.answerAuthor.userName}}</span>\n       <span class=\"user-description\">{{userAnswerDetail.answerAuthor.userDescription}}</span>\n     </div>\n     <div class=\"answer \" [ngClass]=\"{'is-collapsed':userAnswerDetail.answer.answerContent.length>300}\"  (mouseleave)=\"getMouseleave($event)\" (mouseenter)=\"getMouseEnter($event)\">\n       <div class=\"answer-inner\">\n         <div class=\"answer-detail\" [innerHTML]=\"userAnswerDetail.answer.answerContent | html\"></div>\n       </div>\n       <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"userAnswerDetail.answer.answerContent.length<=300\" (click)=\"readAll($event)\">\n         阅读全文\n         <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n       </button>\n       <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n         收起\n         <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n       </button>\n     </div>\n   </div>\n   <div class=\"ask-status\" *ngIf=\"isActive\">\n     <span class=\"status-item\">{{'发表时间：'+ (userAnswerDetail.time | date:'yyyy-MM-dd')}}</span>\n   </div>\n   <div class=\"question-detail-operation \">\n     <app-operation [(answer)]=\"userAnswerDetail.answer\"></app-operation>\n   </div>\n </div>\n\n <div class=\"answer-item home-left\" *ngIf=\"userAnswerCollect\" >\n   <div class=\"question-title\">\n     <h3 ><a [routerLink]=\"['/question-detail', userAnswerCollect.question.questionId]\">{{ userAnswerCollect.question.questionTitle }}</a></h3>\n   </div>\n   <div class=\"answer-content\">\n     <div class=\"user-info\">\n       <img class=\"user-portrait\" [src]=\"userAnswerCollect.answer.answerAuthor.userPicture\" alt=\"\" [routerLink]=\"['/profile',userAnswerCollect.answer.answerAuthor.mobile,'actives']\">\n       <span class=\"user-name\" [routerLink]=\"['/profile',userAnswerCollect.answer.answerAuthor.mobile,'actives']\">{{userAnswerCollect.answer.answerAuthor.userName}}</span>\n       <span class=\"user-description\">{{userAnswerCollect.answer.answerAuthor.userDescription}}</span>\n     </div>\n     <div class=\"answer \" [ngClass]=\"{'is-collapsed':userAnswerCollect.answer.answerDetail.answerContent.length>300}\"  (mouseleave)=\"getMouseleave($event)\" (mouseenter)=\"getMouseEnter($event)\">\n       <div class=\"answer-inner\">\n         <div class=\"answer-detail\" [innerHTML]=\"userAnswerCollect.answer.answerDetail.answerContent | html\"></div>\n       </div>\n       <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"userAnswerCollect.answer.answerDetail.answerContent.length<=300\" (click)=\"readAll($event)\">\n         阅读全文\n         <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n       </button>\n       <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n         收起\n         <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n       </button>\n     </div>\n   </div>\n   <div class=\"question-detail-operation \">\n     <app-operation [(answer)]=\"userAnswerCollect.answer\"></app-operation>\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/common/answer/answer.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/answer/answer.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-item {\n  margin-bottom: 12px;\n}\n.answer-item .article-list-content .article-content {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.answer-item .answer-detail {\n  margin-top: 24px;\n}\n.answer-item .answer-content .user-info {\n  height: 30px;\n}\n.answer-item .answer-content .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.answer-item .answer-content .user-info .user-name,\n.answer-item .answer-content .user-info .user-description {\n  margin-left: 12px;\n}\n.answer-item .answer-content .user-info .user-name {\n  font-size: 24px;\n}\n.answer-item .answer-content .answer {\n  position: relative;\n}\n.answer-item .answer-content .answer .answer-inner .answer-detail {\n  width: 100%;\n  font-size: 16px;\n  line-height: 2;\n}\n.answer-item .answer-content .answer.is-collapsed .answer-inner {\n  max-height: 300px;\n  overflow: hidden;\n}\n.answer-item .answer-content .answer .read-all {\n  position: absolute;\n  padding-top: 10px;\n  bottom: 0px;\n  width: 100%;\n  height: 40px;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #ffffff);\n  font-size: 24px;\n}\n.answer-item .answer-content .answer .takeUp {\n  display: none;\n  position: fixed;\n  height: 30px;\n  width: 80px;\n  right: 35%;\n  top: 80%;\n  z-index: 1000000;\n  background-color: #0084FF;\n  color: white;\n}\n.answer-item .answer-content .detail {\n  display: none;\n}\n.answer-item .answer-content .detail .answer-detail {\n  margin-top: 24px;\n}\n.answer-item .ask-status .status-item {\n  margin-top: 5px;\n  margin-right: 12px;\n  color: #8590A6;\n  font-size: 14px;\n}\n.answer-item .takeUp {\n  display: none;\n}\n.answer-item {\n  width: 100%;\n}\n.answer-item .question-title h3 a {\n  color: black;\n}\n.answer-item .question-title h3 a:hover {\n  text-decoration: none;\n  color: #333;\n}\n.red {\n  display: none;\n  position: fixed;\n  bottom: 10px;\n  left: 400px;\n  z-index: 100000;\n  z-index: 10000000011;\n}\n"

/***/ }),

/***/ "./src/app/common/answer/answer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/answer/answer.component.ts ***!
  \***************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(questionService) {
        this.questionService = questionService;
        this.answerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userAnswerDetailChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userAnswerCollectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readAll = function (event) {
            $(event.currentTarget).parent().removeClass('is-collapsed');
            $(event.currentTarget).hide();
            $($('.answer-item .takeUp')).show();
            event.stopPropagation();
        };
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent.prototype.takeUp = function (event) {
        $(event.currentTarget).parent().addClass('is-collapsed');
        $(event.currentTarget).hide();
        $(event.currentTarget).siblings('.read-all').show();
    };
    AnswerComponent.prototype.getMouseleave = function (event) {
        $($(event.currentTarget).children('.takeUp')).hide();
    };
    AnswerComponent.prototype.getMouseEnter = function (event) {
        var test = $(event.currentTarget).is('.is-collapsed');
        var isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
        if (!test && isShowReadAll !== 'hidden') {
            $($(event.currentTarget).children('.takeUp')).show();
        }
        else {
            $($(event.currentTarget).children('.takeUp')).hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "answer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerComponent.prototype, "answerChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "answerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "questionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "userAnswerDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerComponent.prototype, "userAnswerDetailChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerComponent.prototype, "userAnswerCollect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AnswerComponent.prototype, "userAnswerCollectChange", void 0);
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/common/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.less */ "./src/app/common/answer/answer.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_question_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/common/article/article.component.html":
/*!*******************************************************!*\
  !*** ./src/app/common/article/article.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"article\" >\n  <div class=\"article-detail\">\n    <div class=\"article-title\"><h2><span (click)=\"goArticleDetail(article)\" >{{article.article.articleTitle}}</span></h2></div>\n    <div class=\"user-info\">\n      <div class=\"user-right\">\n        <img class=\"user-portrait\" [routerLink]=\"['/profile',article.articleAuthor.mobile,'actives']\" [src]=\"article.articleAuthor.userPicture?article.articleAuthor.userPicture:'assets/img/noUserPicture.jpg' \" alt=\"\">\n      </div>\n      <div class=\"user-left\">\n        <span class=\"user-name\"  [routerLink]=\"['/profile',article.articleAuthor.mobile,'actives']\" >{{article.articleAuthor.userName}}</span>\n        <span class=\"user-description\">{{article.articleAuthor.userDescription+'cccccccccccccccccccccc'}}</span>\n      </div>\n    </div>\n    <div class=\"article-box \" [ngClass]=\"{'is-collapsed':article.article.articleContent.length>=300}\" (mouseleave)=\"getMouseleave($event)\" (mouseenter)=\"getMouseEnter($event)\">\n      <div class=\"article-inner\">\n        <div class=\"article-content\" [innerHTML]=\"article.article.articleContent | html\">文章内容</div>\n      </div>\n      <button type=\"button\" class=\"read-all button button-margin-right-12\" [hidden]=\"article.article.articleContent.length? article.article.articleContent.length<=300: false\" (click)=\"readAll($event)\" >\n        阅读全文\n        <span class=\"glyphicon glyphicon-chevron-down  icon-margin-left\"></span>\n      </button>\n      <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n        收起\n        <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n      </button>\n    </div>\n  </div>\n  <div class=\"ask-status\" *ngIf=\"isActive\">\n    <span class=\"status-item\">{{'发表时间：'+ (article.time | date:'yyyy-MM-dd')}}</span>\n  </div>\n  <!--operation-->\n  <div class=\"article-operation\">\n    <app-operation [(article)]=\"article.article\"></app-operation>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/article/article.component.less":
/*!*******************************************************!*\
  !*** ./src/app/common/article/article.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article .article-operation {\n  margin: 12px;\n}\n.article .article-detail {\n  position: relative;\n}\n.article .article-detail .article-user {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.article .article-detail .article-title h2 a {\n  color: #333;\n}\n.article .article-detail .article-title h2 a:hover {\n  text-decoration: none;\n}\n.article .article-detail .user-info {\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.article .article-detail .user-info .user-right .user-portrait {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n}\n.article .article-detail .user-info .user-left {\n  margin-left: 12px;\n}\n.article .article-detail .user-info .user-left .user-name,\n.article .article-detail .user-info .user-left .user-description {\n  display: block;\n  font-size: 18px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.article .article-detail .user-info .user-left .user-description {\n  font-size: 12px;\n}\n.article .article-detail .article-box.is-collapsed .article-inner {\n  height: 300px;\n  overflow: hidden;\n}\n.article .article-detail .article-box .article-inner .article-content {\n  text-indent: 2px;\n}\n.article .article-detail .article-box .read-all {\n  position: absolute;\n  padding-top: 10px;\n  bottom: 0px;\n  width: 100%;\n  height: 40px;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #ffffff);\n  font-size: 24px;\n}\n.article .article-detail .article-box .takeUp {\n  display: none;\n  position: fixed;\n  height: 30px;\n  width: 80px;\n  right: 35%;\n  top: 80%;\n  z-index: 1000000;\n  background-color: #0084FF;\n  color: white;\n}\n.article .ask-status .status-item {\n  margin-top: 5px;\n  margin-right: 12px;\n  color: #8590A6;\n  font-size: 14px;\n}\n.takeUp {\n  display: none;\n}\n.comment-detail {\n  margin-top: 12px;\n  box-shadow: 0 0 1px #b2b2b2;\n  padding: 24px;\n  display: none;\n}\n.comment-detail .comment-length {\n  height: 30px;\n  line-height: 30px;\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.comment-detail .comment-info {\n  margin-bottom: 12px;\n}\n.comment-detail .comment-info .user-info {\n  height: 30px;\n}\n.comment-detail .comment-info .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.comment-detail .comment-info .user-info .user-name,\n.comment-detail .comment-info .user-info .user-description {\n  margin-left: 12px;\n}\n.comment-detail .comment-info .user-info .user-name {\n  font-size: 20px;\n}\n.comment-detail .comment-info .comment-content {\n  margin-left: 42px;\n}\n.comment-detail .add-comment {\n  display: flex;\n  height: 40px;\n  margin-top: 12px;\n}\n.comment-detail .add-comment .write-comment {\n  flex: 8;\n}\n.comment-detail .add-comment .add-comment {\n  flex: 1;\n  margin: 0;\n}\n.comment-detail .takeUp-comment {\n  position: fixed;\n  bottom: 30px;\n  left: 900px;\n  height: 30px;\n  width: 93px;\n  background-color: #b2b2b2;\n  color: white;\n  font-size: 12px;\n  border-radius: 2px;\n}\n"

/***/ }),

/***/ "./src/app/common/article/article.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/article/article.component.ts ***!
  \*****************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(userService, toolJs, ls) {
        this.userService = userService;
        this.toolJs = toolJs;
        this.ls = ls;
        this.articleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readAll = function (event) {
            $(event.currentTarget).parent().removeClass('is-collapsed');
            $(event.currentTarget).hide();
            $(event.currentTarget).next('.takeUp').show();
            // $($('.answer-item .takeUp')[index]).show();
            event.stopPropagation();
        };
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getCurrentUser();
    };
    ArticleComponent.prototype.goArticleDetail = function (article) {
        this.ls.saveDate('articleDetail', article);
        this.toolJs.next('/article-detail/' + article.article.articleId);
    };
    ArticleComponent.prototype.takeUp = function (event) {
        $(event.currentTarget).parent().addClass('is-collapsed');
        $(event.currentTarget).hide();
        $(event.currentTarget).siblings('.read-all').show();
    };
    ArticleComponent.prototype.getMouseleave = function (event) {
        $($(event.currentTarget).children('.takeUp')).hide();
    };
    ArticleComponent.prototype.getMouseEnter = function (event, i) {
        var test = $(event.currentTarget).is('.is-collapsed');
        var isShowReadAll = $($(event.currentTarget).children('.read-all')).attr('hidden');
        if (!test && isShowReadAll !== 'hidden') {
            $($(event.currentTarget).children('.takeUp')).show();
        }
        else {
            $($(event.currentTarget).children('.takeUp')).hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ArticleComponent.prototype, "articleChange", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/common/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.less */ "./src/app/common/article/article.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__["ToolJsService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/common/ask/ask.component.html":
/*!***********************************************!*\
  !*** ./src/app/common/ask/ask.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ask-item\">\n  <div class=\"ask-title\">\n    <h3><a [routerLink]=\"['/question-detail',question.question.questionId]\">{{ question.question.questionTitle+'?' }}</a></h3>\n  </div>\n  <div class=\"ask-status\">\n    <span class=\"status-item\">{{question.followTime ? '关注时间：' + (question.followTime | date:'yyyy-MM-dd') : '发表时间：'+ (question.question.questiontime | date:'yyyy-MM-dd')}}</span>\n    <span class=\"status-item\">{{question.answerCount + '个回答'}}</span>\n    <span class=\"status-item\">{{question.followCount + '个关注'}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/ask/ask.component.less":
/*!***********************************************!*\
  !*** ./src/app/common/ask/ask.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ask-item .ask-title {\n  color: black;\n}\n.ask-item .ask-title h3 a {\n  color: black;\n}\n.ask-item .ask-title h3 a:hover {\n  text-decoration: none;\n  color: #333;\n}\n.ask-item .ask-status {\n  margin-bottom: 12px;\n}\n.ask-item .ask-status .status-item {\n  margin-top: 5px;\n  margin-right: 12px;\n  color: #8590A6;\n  font-size: 14px;\n}\n"

/***/ }),

/***/ "./src/app/common/ask/ask.component.ts":
/*!*********************************************!*\
  !*** ./src/app/common/ask/ask.component.ts ***!
  \*********************************************/
/*! exports provided: AskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskComponent", function() { return AskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AskComponent = /** @class */ (function () {
    function AskComponent() {
        this.questionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AskComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AskComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AskComponent.prototype, "questionChange", void 0);
    AskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ask',
            template: __webpack_require__(/*! ./ask.component.html */ "./src/app/common/ask/ask.component.html"),
            styles: [__webpack_require__(/*! ./ask.component.less */ "./src/app/common/ask/ask.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AskComponent);
    return AskComponent;
}());



/***/ }),

/***/ "./src/app/common/comment-detail/comment-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/common/comment-detail/comment-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"comment-detail\"  >\n  <div class=\"comment-length\">{{currentComments?'总共'+currentComments.length+'条评论':'暂无评论'}}</div>\n  <div class=\"comment-detail-content\" *ngIf=\"currentComments\">\n    <div class=\"comment-info\" *ngFor=\"  let comment of currentComments ; let i =index\" >\n      <div class=\"comment-left\">\n        <img class=\"user-portrait\" [src]=\"comment.commentAuthor.userPicture? comment.commentAuthor.userPicture:'assets/img/noUserPicture.jpg'\" alt=\"\">\n      </div>\n      <div class=\"comment-right\" >\n        <span class=\"user-name\">{{comment.commentAuthor.userName}}</span>\n        <div class=\"comment-box\"><p class=\"comment-content\">{{ comment.comment.commentContent }}</p></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"add-comment row\">\n    <input class=\"write-comment col-sm-9\" [(ngModel)]=\"newComment\" type=\"text\" placeholder=\"写下你的评论\">\n    <button class=\"add-comment-btn col-sm-3 \" (click)=\"addComment( $event )\">增加评论</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/comment-detail/comment-detail.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/common/comment-detail/comment-detail.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-detail {\n  position: relative;\n  margin-top: 12px;\n  box-shadow: 0 0 1px #b2b2b2;\n  padding: 24px;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: white;\n}\n.comment-detail .comment-length {\n  height: 30px;\n  box-sizing: border-box;\n  line-height: 30px;\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.comment-detail .comment-detail-content {\n  height: 80%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.comment-detail .comment-detail-content::-webkit-scrollbar {\n  display: none;\n}\n.comment-detail .comment-info {\n  margin-bottom: 24px;\n  display: flex;\n}\n.comment-detail .comment-info .comment-left {\n  flex: 1;\n}\n.comment-detail .comment-info .comment-left .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.comment-detail .comment-info .comment-right {\n  flex: 10;\n}\n.comment-detail .comment-info .comment-right .user-name {\n  font-size: 14px;\n}\n.comment-detail .comment-info .comment-right .comment-box {\n  max-height: 60px;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.comment-detail .comment-info .comment-right .comment-box::-webkit-scrollbar {\n  display: none;\n}\n.comment-detail .comment-info .comment-right .comment-box .comment-content {\n  padding: 4px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.comment-detail .add-comment {\n  height: 40px;\n  width: 95%;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-top: 12px;\n  position: absolute;\n  bottom: 12px;\n  box-shadow: 0 0 24px white;\n}\n.comment-detail .add-comment .write-comment,\n.comment-detail .add-comment .add-comment-btn {\n  height: 40px;\n}\n.comment-detail .add-comment .add-comment-btn {\n  border: none;\n  background-color: #0084FF;\n}\n.comment-detail .takeUp-comment {\n  position: fixed;\n  bottom: 30px;\n  left: 900px;\n  height: 30px;\n  width: 93px;\n  background-color: #b2b2b2;\n  color: white;\n  font-size: 12px;\n  border-radius: 2px;\n}\n"

/***/ }),

/***/ "./src/app/common/comment-detail/comment-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/comment-detail/comment-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDetailComponent", function() { return CommentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/comment/comment.service */ "./src/app/shared/comment/comment.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentDetailComponent = /** @class */ (function () {
    function CommentDetailComponent(router, routInfo, toolJs, commentService, ls, userService) {
        this.router = router;
        this.routInfo = routInfo;
        this.toolJs = toolJs;
        this.commentService = commentService;
        this.ls = ls;
        this.userService = userService;
        this.articleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentComments = [];
    }
    CommentDetailComponent.prototype.ngOnInit = function () {
        this.init();
    };
    CommentDetailComponent.prototype.init = function () {
        var _this = this;
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.currentUserMobile = this.userService.getCurrentUser().mobile;
        }
        if (this.articleId) {
            this.data = {
                id: this.articleId,
                type: 'article'
            };
        }
        if (this.answerId && this.questionId) {
            this.data = {
                id: this.answerId,
                type: 'answer'
            };
        }
        if (this.questionId && !this.answerId) {
            this.data = {
                id: this.questionId,
                type: 'question'
            };
        }
        this.commentService.getComments(this.data).subscribe(function (result) {
            if (result.code === 1) {
                _this.currentComments = result.data;
            }
        });
    };
    CommentDetailComponent.prototype.addComment = function (event) {
        var _this = this;
        if (this.currentUserMobile) {
            if (this.newComment !== undefined) {
                var formData = void 0;
                if (this.answerId) {
                    formData = {
                        questionId: this.questionId,
                        answerId: this.answerId,
                        commentContent: this.newComment,
                        commentAuthor: this.currentUserMobile,
                        type: 'answer'
                    };
                }
                if (this.data.type === 'question') {
                    formData = {
                        questionId: this.questionId,
                        commentContent: this.newComment,
                        commentAuthor: this.ls.getDate('userInfo').userInfo.mobile,
                        type: 'question'
                    };
                }
                if (this.articleId) {
                    formData = {
                        articleId: this.articleId,
                        commentContent: this.newComment,
                        commentAuthor: this.ls.getDate('userInfo').userInfo.mobile,
                        type: 'article'
                    };
                }
                this.commentService.addComment(formData).subscribe(function (result) {
                    if (result.code === 1) {
                        _this.currentComments.unshift(result.data);
                        _this.newComment = undefined;
                    }
                });
            }
        }
        else {
            // this.toolJs.currentPage('/login-register');
            this.toolJs.nextStep({
                newWindow: false,
                nextUrl: '/login-register',
                currentPage: window.location.href
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "isArticleDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "article", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "questionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "answerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentDetailComponent.prototype, "articleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentDetailComponent.prototype, "articleChange", void 0);
    CommentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-detail',
            template: __webpack_require__(/*! ./comment-detail.component.html */ "./src/app/common/comment-detail/comment-detail.component.html"),
            styles: [__webpack_require__(/*! ./comment-detail.component.less */ "./src/app/common/comment-detail/comment-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_4__["ToolJsService"], _shared_comment_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CommentDetailComponent);
    return CommentDetailComponent;
}());



/***/ }),

/***/ "./src/app/common/confirm-box/confirm-box.component.html":
/*!***************************************************************!*\
  !*** ./src/app/common/confirm-box/confirm-box.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-box\" *ngIf=\"data\">\n  <div class=\"content-box\">\n    <div class=\"delete-content\">{{data.message}}</div>\n    <div class=\"confirm-content\" >\n      <div class=\"confirm\"  (click)=\"confirm()\">确定</div>\n      <div class=\"cancel\" *ngIf=\"data.isDelete && data.isShowCancel\" (click)=\"cancel()\">取消</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/confirm-box/confirm-box.component.less":
/*!***************************************************************!*\
  !*** ./src/app/common/confirm-box/confirm-box.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-box {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(6, 6, 6, 0.3);\n  z-index: 1000000000;\n}\n.confirm-box .content-box {\n  width: 300px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  background-color: white;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.confirm-box .content-box .delete-content {\n  padding: 24px 0;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1;\n}\n.confirm-box .content-box .confirm-content {\n  height: 40px;\n  display: flex;\n}\n.confirm-box .content-box .confirm-content .confirm,\n.confirm-box .content-box .confirm-content .cancel {\n  flex: 1;\n  height: 40px;\n  color: rgba(6, 6, 6, 0.3);\n  line-height: 40px;\n  text-align: center;\n  font-size: 18px;\n  transition: 0.5s;\n}\n.confirm-box .content-box .confirm-content .confirm:hover,\n.confirm-box .content-box .confirm-content .cancel:hover {\n  background-color: rgba(35, 35, 35, 0.3);\n  color: #ff6244;\n}\n.confirm-box .content-box .confirm-content .cancel:hover {\n  color: #fffefd;\n}\n"

/***/ }),

/***/ "./src/app/common/confirm-box/confirm-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/confirm-box/confirm-box.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmBoxComponent", function() { return ConfirmBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
/* harmony import */ var _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/answer/answer.service */ "./src/app/shared/answer/answer.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmBoxComponent = /** @class */ (function () {
    function ConfirmBoxComponent(commonService, routInfo, articleService, answerService, toolJs) {
        this.commonService = commonService;
        this.routInfo = routInfo;
        this.articleService = articleService;
        this.answerService = answerService;
        this.toolJs = toolJs;
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = window.location.href;
        this.firstClick = true;
    }
    ConfirmBoxComponent.prototype.ngOnInit = function () {
    };
    ConfirmBoxComponent.prototype.confirm = function () {
        var _this = this;
        if (this.data.isDelete) {
            if (this.data.isShowCancel) {
                if (this.data.type === 'answer') {
                    console.log(this.data);
                    this.answerService.deleteAnswer({ id: this.data.id }).subscribe(function (result) {
                        if (result.code === 1) {
                            _this.data.message = '删除成功';
                            _this.data.isShowCancel = false;
                            _this.firstClick = false;
                        }
                        else {
                            _this.data = {
                                isTips: true,
                                message: result.message
                            };
                        }
                    });
                }
                if (this.data.type === 'article') {
                    this.articleService.deleteArticle({ id: this.data.id }).subscribe(function (result) {
                        if (result.code === 1) {
                            _this.data.message = '删除成功';
                            _this.data.isShowCancel = false;
                            _this.firstClick = false;
                        }
                    });
                }
            }
            else {
                window.location.reload();
                this.data = undefined;
            }
        }
        else if (this.data.isTips) {
            if (this.data.nextUrl) {
                if (this.data.currentPage) {
                    this.toolJs.currentPage(this.data.nextUrl);
                }
                else {
                    this.toolJs.next(this.data.nextUrl);
                }
            }
            this.data = undefined;
        }
    };
    ConfirmBoxComponent.prototype.cancel = function () {
        this.data = undefined;
        this.dataChange.emit(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmBoxComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmBoxComponent.prototype, "dataChange", void 0);
    ConfirmBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-box',
            template: __webpack_require__(/*! ./confirm-box.component.html */ "./src/app/common/confirm-box/confirm-box.component.html"),
            styles: [__webpack_require__(/*! ./confirm-box.component.less */ "./src/app/common/confirm-box/confirm-box.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"], _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_3__["ToolJsService"]])
    ], ConfirmBoxComponent);
    return ConfirmBoxComponent;
}());



/***/ }),

/***/ "./src/app/common/editor/editor.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/editor/editor.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor\">\n  <nav class=\"editor-nav\" *ngIf=\"!isWriteAnswer\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand logo-a\" href=\"#\"><img class=\"logo-img\" src=\"assets/img/logo.png\" alt=\"logo\"></a>\n      </div>\n      <div class=\"editor-nav-right pull-right\">\n        <a [routerLink]=\"['/editor']\" class=\"release\" *ngIf=\"false\">发文章</a>\n        <button type=\"button\" class=\"btn btn-default release\" [ngClass]=\"{'disabled':!(isSubmit&& articleTitle.touched && articleTitle.valid)}\" [disabled]=\"!(isSubmit&& articleTitle.touched && articleTitle.valid)\" (click)=\"submit()\">发布</button>\n      </div>\n    </div>\n  </nav>\n  <div [ngClass]=\"{'write':isWriteAnswer}\">\n    <div class=\"col-sm-10 col-sm-offset-1\">\n      <div class=\"article-heading\" *ngIf=\"!isWriteAnswer\">\n        <input name=\"heading\" id=\"heading\" class=\"input-heading\" rows=\"1\" maxlength=\"20\" placeholder=\"请输入标题（最少3字 最多20字）\" [formControl]=\"articleTitle\">\n      </div>\n      <span class=\"help-block warning-red\" [class.hidden]=\"articleTitle.untouched || articleTitle.valid \">请至少输入三个字</span>\n      <div class=\"editor-content\" [ngClass]=\"{'is-writeArticle':!isWriteAnswer}\">\n        <div id=\"div1\" class=\"toolbar\"></div>\n        <div class=\"warning warning-red\" *ngIf=\"isShowWarning\">请输入五个字以上</div>\n        <div id=\"div2\" class=\"text\"> <!--可使用 min-height 实现编辑区域自动增加高度--></div>\n        <button class=\"button submit-answer\" *ngIf=\"isWriteAnswer\" (click)=\"submitAnswer()\" >提交回答</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/editor/editor.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/editor/editor.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-a {\n  height: 50px;\n  width: 60px;\n  padding: 0px;\n  margin-right: 24px;\n}\n.logo-a .logo-img {\n  display: block;\n  height: 50px;\n}\n.editor {\n  width: 100%;\n  overflow: hidden;\n}\n.editor .editor-nav {\n  min-height: 50px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 1030;\n  background-color: #9487bf;\n  opacity: 1;\n}\n.editor .editor-nav .editor-nav-right .release {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.editor .editor-nav .editor-nav-right .release.disabled {\n  background-color: #b2b2b2;\n}\n.editor .write {\n  width: 800px;\n  margin: 0 auto;\n}\n.editor .editor-content {\n  background-color: white;\n  position: relative;\n}\n.editor .editor-content .warning {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n}\n.editor .editor-content .submit-answer {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  height: 30px;\n  z-index: 10000;\n  width: 80px;\n  background-color: #0084FF;\n  color: white;\n}\n.editor .editor-content .toolbar {\n  border: 1px solid #ccc;\n  width: 100%;\n}\n.editor .editor-content.is-writeArticle .text {\n  min-height: 400px;\n}\n.editor .editor-content .text {\n  border: 1px solid #ccc;\n  min-height: 200px;\n  width: 100%;\n}\n.editor .editor-content .text .w-e-text p {\n  font-size: 28px;\n  line-height: 1;\n}\n.editor .editor-content .text .w-e-text img {\n  display: block !important;\n  margin: 0 auto !important;\n}\n.article-heading {\n  height: 60px;\n}\n.article-heading .input-heading {\n  width: 100%;\n  height: 60px;\n  border: none;\n  text-indent: 2px;\n  line-height: 60px;\n  font-size: 30px;\n  overflow: hidden;\n}\n.article-heading .input-heading:focus {\n  outline: none;\n}\n"

/***/ }),

/***/ "./src/app/common/editor/editor.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/editor/editor.component.ts ***!
  \***************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_wangeditor_release_wangEditor_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/wangeditor/release/wangEditor.min.js */ "./node_modules/wangeditor/release/wangEditor.min.js");
/* harmony import */ var _node_modules_wangeditor_release_wangEditor_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_wangeditor_release_wangEditor_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/answer/answer.service */ "./src/app/shared/answer/answer.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditorComponent = /** @class */ (function () {
    function EditorComponent(commonService, answerService, toolJs, ls, articleService, el, renderer, questionService, userService) {
        var _this = this;
        this.commonService = commonService;
        this.answerService = answerService;
        this.toolJs = toolJs;
        this.ls = ls;
        this.articleService = articleService;
        this.el = el;
        this.renderer = renderer;
        this.questionService = questionService;
        this.userService = userService;
        this.articleTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
        this.answerComment = '';
        this.isSubmit = false;
        this.isShowWarning = false;
        this.postData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answerArrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorContentChange = function (html) {
            if (html.length < 12) {
                _this.isShowWarning = true;
            }
            else {
                _this.isShowWarning = false;
                if (_this.questionId) {
                    _this.answerComment = html;
                }
                else {
                    _this.articleContent = html;
                    _this.isSubmit = true;
                }
            }
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.editor = new _node_modules_wangeditor_release_wangEditor_min_js__WEBPACK_IMPORTED_MODULE_1__('#div1', '#div2');
        this.setEditorConfig();
        this.editor.customConfig.menus = [
            'head',
            'bold',
            'italic',
            'underline',
            'fontSize',
            'strikeThrough',
            'justify',
            'emoticon',
            'link',
            'image',
            'undo',
            'redo'
        ];
        this.editor.create();
        //  监听articleTitle 的改变
        this.articleTitle.valueChanges.subscribe(function (data) {
        });
    };
    EditorComponent.prototype.setEditorConfig = function () {
        var _this = this;
        this.editor.customConfig.uploadImgServer = '/api/uploadFile';
        this.editor.customConfig.customUploadImg = function (files, insert) {
            // 对上传的图片进行处理，图片上传的方式
            var data = new FormData();
            data.append("userfile", files[0]);
            _this.articleService.uploadFile(data).subscribe(function (result) {
                if (result.code === 1) {
                    var imgUrl = result.uploadPath;
                    _this.editor.cmd.do('insertHTML', '<img style="max-height: 800px; max-width: 100%; margin: 12px " src=" assets' + imgUrl + '" alt=""><br>');
                }
            });
        };
        this.editor.customConfig.zIndex = 100;
        this.editor.customConfig.onchange = this.editorContentChange;
    };
    EditorComponent.prototype.ngOnChanges = function (changes) {
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.articleService.addArticle({
            articleTitle: this.articleTitle.value,
            articleContent: this.articleContent.toString(),
            articleAuthor: this.userService.getCurrentUser().mobile,
        }).subscribe(function (result) {
            if (result.code === 1) {
                _this.ls.saveDate('articleDetail', result.data);
                _this.commonService.showTipsBox.emit({
                    message: '发表成功',
                    type: '',
                    id: '',
                    isTips: true,
                    nextUrl: '/article-detail/' + result.data.article.articleId,
                    currentPage: true
                });
                // this.toolJs.next('/article-detail/' + result.data.article.articleId);
            }
        });
    };
    EditorComponent.prototype.submitAnswer = function () {
        var _this = this;
        if (!this.isShowWarning && this.answerComment.length >= 1) {
            this.answerService.addAnswer({
                answerContent: this.answerComment,
                questionId: this.questionId,
                answerAuthor: this.ls.getDate('userInfo').userInfo.mobile
            }).subscribe(function (result) {
                if (result.code === 1) {
                    if (_this.answerArr === null) {
                        _this.answerArr = [];
                    }
                    _this.answerArr.unshift(result.data);
                    _this.answerArrChange.emit(_this.answerArr);
                    _this.commonService.showTipsBox.emit({
                        message: '发表成功',
                        type: '',
                        id: '',
                        isTips: true
                    });
                }
            });
        }
        else {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EditorComponent.prototype, "isWriteAnswer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditorComponent.prototype, "postData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "questionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "answerArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditorComponent.prototype, "answerArrChange", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/common/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.less */ "./src/app/common/editor/editor.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"], _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_8__["AnswerService"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__["ToolJsService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"footer\">\n      <div class=\"container-mine\">\n        <ul class=\"ul\">\n          <li class=\"footer-li\"><a class=\"footer-a\" href=\"#\">一个按钮</a></li>\n          <li class=\"footer-li\"><a class=\"footer-a\" href=\"#\">一个按钮</a></li>\n          <li class=\"footer-li\"><a class=\"footer-a\" href=\"#\">一个按钮</a></li>\n        </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-top: 24px;\n  height: 40px;\n  background-color: rgba(245, 245, 245, 0.5);\n}\n.footer ul .footer-li {\n  list-style: none;\n  float: left;\n}\n.footer ul .footer-li .footer-a {\n  display: inline-block;\n  font-size: 12px;\n  height: 40px;\n  margin-right: 24px;\n  line-height: 40px;\n}\n.footer ul .footer-li .footer-a:hover {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/common/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top nav-color\">\n  <div class=\"container-mine\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand logo-a\" href=\"#\"><img class=\"logo-img\" src=\"assets/img/logo.png\" alt=\"logo\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"\"><a href=\"#\">首页 <span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\" [formGroup]=\"searchForm\" (ngSubmit)=\"seach()\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" formControlName=\"keyWord\" maxlength=\"11\" >\n          <span  class=\"search-icon glyphicon glyphicon-search\" *ngIf=\"!searchForm.valid\"></span>\n        </div>\n        <button type=\"submit\" *ngIf=\"!searchForm.valid\" class=\"btn btn-default\" (click)=\"showAsk()\">提问</button>\n        <button type=\"submit\" *ngIf=\"searchForm.valid \" class=\"btn btn-default\" [routerLink]=\"['/search']\"  [queryParams]=\"{keyword: searchForm.value.keyWord}\"><span class=\"search-icon glyphicon glyphicon-search margin-right-12\" ></span>搜索</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/login-register\" *ngIf=\"!isLogin\">登录/注册</a></li>\n        <li class=\"dropdown\" *ngIf=\"isLogin\">\n          <a href=\"#\" class=\"dropdown-toggle user-center glyphicon glyphicon-user\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"></a>\n          <ul class=\"dropdown-menu\">\n            <li><a target=\"_blank\" [routerLink]=\"['/profile',user.mobile,'actives']\">个人中心</a></li>\n            <li><a target=\"_blank\" [routerLink]=\"['/set']\">设置</a></li>\n            <li><a href=\"#\" (click)=\"exit()\">退出</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"ask\" *ngIf=\" showAskBox \">\n  <div class=\"ask-content\">\n    <form action=\"\" [formGroup]=\" questionFrom \" (ngSubmit)=\"onSubmitAsk()\">\n      <div class=\"ask-item\">\n        <img class=\"user-img\" [src]=\"user.userPicture?user.userPicture:'assets/img/noUserPicture.jpg'\" alt=\"\">\n          <input type=\"text\" class=\"form-control question-title\" formControlName=\"questionTitle\"  placeholder=\"请输入问题(至少三个字)\">\n      </div>\n        <span class=\"help-block warning-red\" [class.hidden]=\"questionFrom.value.questionTitle.untouched|| !questionFrom.hasError('minlength','questionTitle')\">请至少输入三个字</span>\n        <div class=\"ask-detail\">\n        <textarea rows=\"4\" cols=\"30\" class=\"question-detail\" formControlName=\"questionContent\" >请输入问题详情</textarea>\n      </div>\n      <button class=\"button release-ask\" type=\"submit\">发布问题</button>\n      </form>\n  </div>\n  <div class=\"close\" (click)=\"showAskBox = !showAskBox\">X</div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-form .form-group {\n  position: relative;\n}\n.navbar-form .form-group .search-icon {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  opacity: 0.5;\n}\n.logo-a {\n  height: 50px;\n  width: 60px;\n  padding: 0px;\n  margin-right: 24px;\n}\n.logo-a .logo-img {\n  display: block;\n  height: 50px;\n}\n.nav-color {\n  background-color: #9487bf;\n  border-color: rgba(255, 255, 255, 0);\n}\n.user-center {\n  width: 60px;\n  height: 100%;\n  font-size: 18px;\n}\n.ask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1110000;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 48px;\n}\n.ask .close {\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  color: #ff1212;\n  font-size: 24px;\n  line-height: 30px;\n  text-align: center;\n  position: absolute;\n  right: 20%;\n  top: 10%;\n  z-index: 1110002;\n}\n.ask .ask-content {\n  height: 300px;\n  width: 600px;\n  position: absolute;\n  box-sizing: border-box;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 24px;\n}\n.ask .ask-content .ask-item {\n  width: 100%;\n  height: 40px;\n  display: flex;\n}\n.ask .ask-content .ask-item .user-img {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  background-color: black;\n  margin-right: 12px;\n}\n.ask .ask-content .ask-item .question-title {\n  height: 40px;\n  width: 90%;\n}\n.ask .ask-content .ask-detail {\n  margin-top: 24px;\n  height: 160px;\n}\n.ask .ask-content .ask-detail .question-detail {\n  width: 100%;\n  height: 120px;\n  border: none;\n  box-shadow: 0 0 2px #b2b2b2;\n  padding: 12px;\n  text-align: left;\n}\n.ask .ask-content .release-ask {\n  height: 40px;\n  width: 80px;\n  background-color: #0084FF;\n  color: white;\n  position: absolute;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1110001;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #353535;\n}\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    // public keyWord = new FormControl('', [ Validators.required, Validators.minLength(1)]);
    function NavbarComponent(toolJs, router, routeInfo, commonService, ls, fb, questionService) {
        this.toolJs = toolJs;
        this.router = router;
        this.routeInfo = routeInfo;
        this.commonService = commonService;
        this.ls = ls;
        this.fb = fb;
        this.questionService = questionService;
        this.isLogin = false;
        this.showSearchBtn = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
            this.user = this.ls.getDate('userInfo').userInfo;
            this.isLogin = this.ls.getDate('userInfo').login;
        }
        this.showAskBox = false;
        this.buildForm();
        this.searchForm.get('keyWord').valueChanges.subscribe(function (data) {
            _this.ls.removeDateSes('searchResult');
            if (data.length < 1) {
                _this.showSearchBtn = false;
            }
            else if (data.length >= 1) {
                _this.showSearchBtn = true;
            }
        });
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; })
            .subscribe(function (event) {
            if (event.url.split('?')[0] === '/search') {
                _this.showSearchBtn = true;
                _this.routeInfo.queryParams.subscribe(function (params) {
                    if (params.keyword) {
                        _this.keyWord = params.keyword;
                    }
                });
            }
            else {
                _this.keyWord = '';
            }
            _this.buildForm();
        });
    };
    // 构建表单方法
    NavbarComponent.prototype.buildForm = function () {
        // 通过 formBuilder构建表单
        this.questionFrom = this.fb.group({
            questionTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            questionContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.searchForm = this.fb.group(({
            keyWord: [this.keyWord ? this.keyWord : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]]
        }));
    };
    NavbarComponent.prototype.exit = function () {
        this.ls.removeDate('userInfo');
        window.location.reload();
    };
    NavbarComponent.prototype.seach = function () {
        var _this = this;
        if (this.searchForm.valid) {
            this.commonService.search({
                keyword: this.searchForm.value.keyWord.trim()
            }).subscribe(function (result) {
                var data = {
                    result: result,
                    keyword: _this.searchForm.value.keyWord.trim()
                };
                _this.ls.saveDateSes('searchResult', data);
                _this.commonService.searchEvent.emit(data);
            });
        }
    };
    NavbarComponent.prototype.showAsk = function () {
        if (this.isLogin) {
            this.showAskBox = !this.showAskBox;
        }
        else {
            this.toolJs.currentPage('/login-register');
        }
    };
    NavbarComponent.prototype.onSubmitAsk = function () {
        var _this = this;
        if (this.questionFrom.valid) {
            if (this.questionFrom.value.questionTitle.indexOf('?') < 0) {
                this.questionFrom.value.questionTitle += '?';
            }
            this.questionService.addQuestion({
                question: this.questionFrom.value,
                questionAuthor: this.user.mobile
            }).subscribe(function (result) {
                _this.showAskBox = false;
                if (result.code === 1) {
                    _this.ls.removeDate('newQuestionDetail');
                    _this.ls.saveDate('newQuestionDetail', result.data);
                    console.log(result.data);
                    _this.commonService.showTipsBox.emit({
                        message: '发表成功',
                        type: '',
                        id: '',
                        isTips: true,
                        nextUrl: '/question-detail/' + result.data.question.questionId,
                        currentPage: true
                    });
                }
                else if (result.code === 0) {
                    _this.commonService.showTipsBox.emit({
                        message: '发表失败',
                        type: '',
                        id: '',
                        isTips: true,
                    });
                }
            });
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/common/navbar/navbar.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_4__["ToolJsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/common/operation/operation.component.html":
/*!***********************************************************!*\
  !*** ./src/app/common/operation/operation.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"operation margin-top-12\" >\n  <div class=\"pull-left\">\n    <button type=\"button\" class=\"likes button button-margin-right-24 \" (click)=\"addThanks($event,currentCommentForId)\" >\n      <span class=\"glyphicon glyphicon-heart icon-margin darkred\"></span>\n      {{currentContent.thanks}}\n    </button>\n    <button type=\"button\" class=\"operation-comment button button-margin-right-24 \" (click)=\"showComment($event,isShowComment)\">\n      <span class=\"glyphicon glyphicon-comment icon-margin\"></span>\n      {{!isShowComment? '评论':'收起评论'}}\n    </button>\n    <!--<button type=\"button\" class=\"collection button button-margin-right-24 \" (click)=\"addCollect($event)\">-->\n      <!--<span class=\"glyphicon  icon-margin\" [ngClass]=\"{'glyphicon-star-empty': !currentContent.isColleted, 'glyphicon-star': currentContent.isColleted}\"></span>-->\n      <!--{{!currentContent.isColleted?'收藏':'取消收藏'}}-->\n    <!--</button>-->\n  </div>\n  <div class=\"pull-right\">\n    <!--<button type=\"button\" class=\"delete button button-margin-right-24\" *ngIf=\"!show\" >-->\n      <!--举报-->\n      <!--<span class=\"iconfont  icon-margin icon-margin-left\">&#xe601;</span>-->\n    <!--</button>-->\n    <button *ngIf=\"show\" type=\"button\" class=\"delete button button-margin-right-24\" (click)=\"showConfirm()\"  >\n      删除<span class=\"glyphicon glyphicon-trash  icon-margin-left\"></span>\n    </button>\n  </div>\n</div>\n<div class=\"comment\" *ngIf=\"isShowComment && !isArticleDetail\"  >\n  <app-comment-detail [answerId] = \"answerId\"  [questionId] = \"questionId\" [articleId]=\"articleId\" ></app-comment-detail>\n</div>\n\n"

/***/ }),

/***/ "./src/app/common/operation/operation.component.less":
/*!***********************************************************!*\
  !*** ./src/app/common/operation/operation.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".takeUp {\n  display: none;\n}\n.comment {\n  height: 400px;\n}\n.operation {\n  height: 30px;\n  padding: 12px;\n}\n"

/***/ }),

/***/ "./src/app/common/operation/operation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/operation/operation.component.ts ***!
  \*********************************************************/
/*! exports provided: OperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationComponent", function() { return OperationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
/* harmony import */ var _shared_alter_alter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alter/alter.service */ "./src/app/shared/alter/alter.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OperationComponent = /** @class */ (function () {
    function OperationComponent(toolJs, alterService, articleService, questionService, userService, commonService, ls) {
        this.toolJs = toolJs;
        this.alterService = alterService;
        this.articleService = articleService;
        this.questionService = questionService;
        this.userService = userService;
        this.commonService = commonService;
        this.ls = ls;
        this.isArticleDetail = false;
        this.articleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShowCommentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
        this.isLogin = false;
    }
    OperationComponent.prototype.ngOnInit = function () {
        if (this.answer) {
            this.currentContent = this.answer;
            this.answerId = this.answer.answerId;
            this.questionId = this.answer.questionId;
            this.author = this.answer.answerAuthor;
        }
        if (this.article) {
            this.currentContent = this.article;
            this.articleId = this.article.articleId;
            this.author = this.article.articleAuthor;
        }
        if (this.ls.getDate('userInfo').login) {
            this.isLogin = this.ls.getDate('userInfo').login;
            this.currentUser = this.ls.getDate('userInfo').userInfo;
            if (this.currentUser.mobile === this.author) {
                this.show = true;
            }
        }
    };
    OperationComponent.prototype.ngOnChanges = function (changes) {
    };
    OperationComponent.prototype.showComment = function (event) {
        this.isShowComment = !this.isShowComment;
        this.isShowCommentChange.emit(this.isShowComment);
    };
    OperationComponent.prototype.addThanks = function (event) {
        var _this = this;
        if (this.isLogin) {
            if (this.article) {
                this.commonService.addThanks({
                    id: this.article.articleId,
                    type: 'article'
                }).subscribe(function (result) {
                    if (result.code === 1) {
                        _this.article.thanks = _this.article.thanks + 1;
                    }
                });
            }
            if (this.answer) {
                this.commonService.addThanks({
                    id: this.answer.answerId,
                    type: 'answer'
                }).subscribe(function (result) {
                    if (result.code === 1) {
                        _this.answer.thanks = _this.answer.thanks + 1;
                    }
                });
            }
        }
        else {
            this.toolJs.currentPage('/login-register');
        }
    };
    OperationComponent.prototype.showConfirm = function () {
        if (this.answer) {
            this.data = {
                message: '是否确认删除',
                type: 'answer',
                id: this.answer.answerId,
                isShowCancel: true,
                isDelete: true,
                url: window.location.href,
                isTips: false
            };
        }
        if (this.article) {
            this.data = {
                message: '是否确认删除',
                type: 'article',
                id: this.article.articleId,
                isShowCancel: true,
                isDelete: true,
                url: window.location.href,
                isTips: false
            };
        }
        this.commonService.showTipsBox.emit(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationComponent.prototype, "isArticleDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationComponent.prototype, "article", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OperationComponent.prototype, "articleChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationComponent.prototype, "isShowComment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OperationComponent.prototype, "isShowCommentChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationComponent.prototype, "answer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OperationComponent.prototype, "answerChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OperationComponent.prototype, "userAnswerDetail", void 0);
    OperationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operation',
            template: __webpack_require__(/*! ./operation.component.html */ "./src/app/common/operation/operation.component.html"),
            styles: [__webpack_require__(/*! ./operation.component.less */ "./src/app/common/operation/operation.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__["ToolJsService"], _shared_alter_alter_service__WEBPACK_IMPORTED_MODULE_6__["AlterService"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], OperationComponent);
    return OperationComponent;
}());



/***/ }),

/***/ "./src/app/common/question-type1/question-type1.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/common/question-type1/question-type1.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-type1\"  (mouseleave)=\"getMouseleave($event)\" (mouseenter)=\"getMouseEnter($event)\">\n  <h4 ><a target=\"_blank\" [routerLink]=\"['/question-detail',recommend.question.questionId]\">{{ recommend.question.questionTitle }}</a></h4>\n  <div class=\"recommend-answer is-collapsed\">\n    <div class=\"row question\"  >\n      <div class=\"col-sm-4 in-img\" *ngIf=\"recommend.answer?recommend.answer.answerContent.match(imgReg) : false\" [innerHTML]=\"recommend.answer.answerContent.match(imgReg)[0]  | html\"></div>\n      <div class=\" article-list-content\" [ngClass]=\"{'col-sm-7': recommend.answer? recommend.answer.answerContent.match(imgReg): false,'col-sm-11':recommend.answer? !recommend.answer.answerContent.match(imgReg): true}\">\n        <p style=\" display: inline; -webkit-line-clamp: 5;-webkit-box-orient: vertical;overflow: hidden;\" class=\"article-content \">{{((recommend.answer?recommend.answer.answerContent:recommend.question.questionContent).replace(imgReg,'')).replace(deleteHreg,'').substr(0,200)+ '...'}}</p>\n        <button type=\"button\" class=\"read-all button button-margin-right-12\" (click)=\"readAll($event)\">\n          阅读全文\n        </button>\n      </div>\n    </div>\n    <div class=\"detail\">\n      <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" (click)=\"takeUp($event)\">\n        收起\n        <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n      </button>\n      <div class=\"user-info\" *ngIf=\"recommend.answer\" >\n        <a target=\"_blank\" class=\"user-a\" [routerLink]=\"['/profile',recommend.answerAuthor.mobile,'actives']\"><img class=\"user-portrait\"  [src]=\"recommend.answerAuthor.userPicture? recommend.answerAuthor.userPicture: './assets/img/noUserPicture.jpg'\" alt=\"\"></a>\n        <a target=\"_blank\" class=\"user-name\" [routerLink]=\"['/profile',recommend.answerAuthor.mobile,'actives']\">{{recommend.answerAuthor.userName}}</a>\n        <span class=\"user-description\">{{recommend.answerAuthor.userDescription}}</span>\n      </div>\n      <div class=\"answer-detail\" [innerHTML]=\"(recommend.answer?recommend.answer.answerContent: recommend.question.questionContent )| html\"></div>\n    </div>\n  </div>\n  <!--operation-->\n  <div *ngIf=\"recommend.answer\" class=\"question-detail-operation \">\n    <app-operation [(answer)]=\"recommend.answer\"></app-operation>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/question-type1/question-type1.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/common/question-type1/question-type1.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-type1 a:hover {\n  text-decoration: none;\n  color: #004b95;\n}\n.question-type1 .recommend-answer .question {\n  max-height: 150px;\n}\n.question-type1 .recommend-answer .question .in-img {\n  height: 150px;\n}\n.question-type1 .recommend-answer .detail {\n  display: none;\n}\n.question-type1 .article-list-content.col-sm-7 .article-content {\n  padding: 0px;\n}\n.question-type1 .article-list-content.col-sm-7 .read-all {\n  padding: 0px;\n}\n.question-type1 .article-list-content .article-content {\n  display: inline;\n  padding-left: 24px;\n  padding-right: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.question-type1 .article-list-content .read-all {\n  margin-left: 12px;\n}\n.question-type1 .detail .takeUp {\n  position: fixed;\n  height: 30px;\n  width: 80px;\n  right: 35%;\n  top: 80%;\n  z-index: 1000000;\n  background-color: #0084FF;\n  color: white;\n}\n.question-type1 .detail .user-info {\n  height: 30px;\n}\n.question-type1 .detail .user-info .user-a {\n  display: inline-block;\n}\n.question-type1 .detail .user-info .user-a .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.question-type1 .detail .user-info .user-name,\n.question-type1 .detail .user-info .user-description {\n  margin-left: 12px;\n}\n.question-type1 .detail .user-info .user-name {\n  font-size: 24px;\n}\n.question-type1 .detail .answer-detail {\n  margin-top: 24px;\n}\n.question-type1 .comment-detail {\n  margin-top: 12px;\n  box-shadow: 0 0 1px #b2b2b2;\n  padding: 24px;\n  display: none;\n}\n.question-type1 .comment-detail .comment-length {\n  height: 30px;\n  line-height: 30px;\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.question-type1 .comment-detail .comment-info {\n  margin-bottom: 12px;\n}\n.question-type1 .comment-detail .comment-info .user-info {\n  height: 30px;\n}\n.question-type1 .comment-detail .comment-info .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.question-type1 .comment-detail .comment-info .user-info .user-name,\n.question-type1 .comment-detail .comment-info .user-info .user-description {\n  margin-left: 12px;\n}\n.question-type1 .comment-detail .comment-info .user-info .user-name {\n  font-size: 20px;\n}\n.question-type1 .comment-detail .comment-info .comment-content {\n  margin-left: 42px;\n}\n.question-type1 .comment-detail .add-comment {\n  display: flex;\n  height: 40px;\n  margin-top: 12px;\n}\n.question-type1 .comment-detail .add-comment .write-comment {\n  flex: 8;\n}\n.question-type1 .comment-detail .add-comment .add-comment {\n  flex: 1;\n  margin: 0;\n}\n.question-type1 .comment-detail .takeUp-comment {\n  position: fixed;\n  bottom: 30px;\n  left: 900px;\n  height: 30px;\n  width: 93px;\n  background-color: #b2b2b2;\n  color: white;\n  font-size: 12px;\n  border-radius: 2px;\n}\n"

/***/ }),

/***/ "./src/app/common/question-type1/question-type1.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/question-type1/question-type1.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionType1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionType1Component", function() { return QuestionType1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionType1Component = /** @class */ (function () {
    function QuestionType1Component() {
        this.recommendChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imgReg = /<img.*?(?:>|\/>)/gi;
        this.deleteHreg = /<\/?.+?\/?>/g;
        this.readAll = function (event) {
            $(event.currentTarget).parent().parent().parent().removeClass('is-collapsed');
            $(event.currentTarget).parent().parent().hide();
            $(event.currentTarget).parent().parent().next('.detail').show();
            event.stopPropagation();
        };
    }
    QuestionType1Component.prototype.ngOnInit = function () {
    };
    QuestionType1Component.prototype.takeUp = function (event) {
        $(event.currentTarget).parent().parent().parent().addClass('is-collapsed');
        $(event.currentTarget).parent().hide();
        $(event.currentTarget).parent().siblings('.question').show();
        event.stopPropagation();
    };
    QuestionType1Component.prototype.getMouseleave = function (event) {
        $(event.currentTarget).find('.detail .takeUp').hide();
    };
    QuestionType1Component.prototype.getMouseEnter = function (event) {
        var test = $(event.currentTarget).parent().is('.is-collapsed');
        if (!test) {
            $(event.currentTarget).find('.detail .takeUp').show();
        }
        else {
            $(event.currentTarget).find('.detail .takeUp').hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionType1Component.prototype, "recommend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionType1Component.prototype, "recommendChange", void 0);
    QuestionType1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-type1',
            template: __webpack_require__(/*! ./question-type1.component.html */ "./src/app/common/question-type1/question-type1.component.html"),
            styles: [__webpack_require__(/*! ./question-type1.component.less */ "./src/app/common/question-type1/question-type1.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionType1Component);
    return QuestionType1Component;
}());



/***/ }),

/***/ "./src/app/common/tab-card/tab-card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/common/tab-card/tab-card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-tabCard\" >\n  <ul class=\"tab-list\">\n    <li class=\"tab-item\" ><a  class=\"tab-link actives \" (click)=\"addActive($event,'actives')\" [routerLink]=\"['/profile',user.mobile,'actives']\">动态</a></li>\n    <li class=\"tab-item\" ><a  class=\"tab-link answers \"  (click)=\"addActive($event,'answers')\" [routerLink]=\"['/profile',user.mobile,'answers']\" >回答</a></li>\n    <li class=\"tab-item\" ><a  class=\"tab-link asks\" (click)=\"addActive($event,'asks')\" [routerLink]=\"['/profile',user.mobile,'asks']\">提问</a></li>\n    <li class=\"tab-item\" ><a  class=\"tab-link articles\" (click)=\"addActive($event,'articles')\" [routerLink]=\"['/profile',user.mobile,'articles']\" >文章</a></li>\n    <!--<li class=\"tab-item\" ><a  class=\"tab-link collect\" (click)=\"addActive($event,'collect')\" [routerLink]=\"['/profile',user.mobile,'collect']\" >收藏</a></li>-->\n    <li class=\"tab-item\" ><a  class=\"tab-link follow\" (click)=\"addActive($event,'follow')\" [routerLink]=\"['/profile',user.mobile,'follow']\" >关注</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/common/tab-card/tab-card.component.less":
/*!*********************************************************!*\
  !*** ./src/app/common/tab-card/tab-card.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-tabCard {\n  height: 48px;\n}\n.top-tabCard .tab-list .tab-item {\n  display: inline-block;\n  height: 48px;\n  padding: 0 16px;\n  line-height: 48px;\n}\n.top-tabCard .tab-list .tab-item:first-child {\n  padding-left: 0;\n}\n.top-tabCard .tab-list .tab-item .tab-link {\n  position: relative;\n  display: inline-block;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: black;\n}\n.top-tabCard .tab-list .tab-item .tab-link:hover {\n  text-decoration: none;\n}\n.top-tabCard .tab-list .tab-item .tab-link.is-active {\n  font-weight: 600;\n}\n.top-tabCard .tab-list .tab-item .tab-link.is-active:after {\n  position: absolute;\n  right: 0;\n  bottom: -1px;\n  left: 0;\n  height: 3px;\n  background: #0084ff;\n  content: \"\";\n}\n"

/***/ }),

/***/ "./src/app/common/tab-card/tab-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/tab-card/tab-card.component.ts ***!
  \*******************************************************/
/*! exports provided: TabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCardComponent", function() { return TabCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabCardComponent = /** @class */ (function () {
    function TabCardComponent(toolJsService) {
        this.toolJsService = toolJsService;
        this.addActive = function (event, item) {
            var tabLinkArr = document.querySelectorAll('.tab-link');
            jquery__WEBPACK_IMPORTED_MODULE_1__(tabLinkArr).each(function (index, element) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(element).removeClass('is-active');
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(event.currentTarget).addClass('is-active');
        };
    }
    TabCardComponent.prototype.ngOnInit = function () {
        this.toolJsService.changCurrentTab(this.item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabCardComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabCardComponent.prototype, "item", void 0);
    TabCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-card',
            template: __webpack_require__(/*! ./tab-card.component.html */ "./src/app/common/tab-card/tab-card.component.html"),
            styles: [__webpack_require__(/*! ./tab-card.component.less */ "./src/app/common/tab-card/tab-card.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__["ToolJsService"]])
    ], TabCardComponent);
    return TabCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"home\">\n  <!--<app-navbar></app-navbar>-->\n  <div class=\"container-mine\">\n    <div class=\"row \">\n      <div class=\"col-sm-9\">\n        <div class=\"top-tabCard\">\n          <ul class=\"tab-list\">\n            <li class=\"tab-item\" ><a href=\"#\" class=\"tab-link recommend\" (click)=\"addActive($event,'answer-list')\" [routerLink]=\"['/']\">推荐</a></li>\n            <!--<li class=\"tab-item\" ><a href=\"#\" class=\"tab-link\"  (click)=\"addActive($event)\">关注</a></li>-->\n            <li class=\"tab-item\" ><a href=\"#\" class=\"tab-link hot\" (click)=\"addActive($event,'hot')\" [routerLink]=\"['/hot']\">热榜</a></li>\n            <li class=\"tab-item\" ><a href=\"#\" class=\"tab-link hot-article\" (click)=\"addActive($event,'hot-article')\" [routerLink]=\"['/hot-article']\">文章</a></li>\n          </ul>\n        </div>\n        <router-outlet></router-outlet>\n        <!--<app-answer-list *ngIf=\"homeState ===''\"></app-answer-list>-->\n        <!--<app-answer-list *ngIf=\"homeState ==='question-list'\"></app-answer-list>-->\n      </div>\n      <div class=\"col-sm-3 clear-padding\">\n        <app-right-bar></app-right-bar>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-tabCard {\n  height: 48px;\n  padding-left: 24px;\n  background-color: white;\n  border-bottom: 1px solid #b2b2b2;\n}\n.top-tabCard .tab-list .tab-item {\n  display: inline-block;\n  height: 48px;\n  padding: 0 16px;\n  line-height: 48px;\n}\n.top-tabCard .tab-list .tab-item:first-child {\n  padding-left: 0;\n}\n.top-tabCard .tab-list .tab-item .tab-link {\n  position: relative;\n  display: inline-block;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: black;\n}\n.top-tabCard .tab-list .tab-item .tab-link:hover {\n  text-decoration: none;\n}\n.top-tabCard .tab-list .tab-item .tab-link.is-active {\n  font-weight: 600;\n}\n.top-tabCard .tab-list .tab-item .tab-link.is-active:after {\n  position: absolute;\n  right: 0;\n  bottom: -1px;\n  left: 0;\n  height: 3px;\n  background: #0084ff;\n  content: \"\";\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(routInfo, toolJsService, router) {
        this.routInfo = routInfo;
        this.toolJsService = toolJsService;
        this.router = router;
        this.addActive = function (event, item) {
            var tabLinkArr = document.querySelectorAll('.tab-link');
            jquery__WEBPACK_IMPORTED_MODULE_1__(tabLinkArr).each(function (index, element) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(element).removeClass('is-active');
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(event.currentTarget).addClass('is-active');
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function (event) {
            if (event.url === '/' || event.url === '/hot' || event.url === '/hot-article') {
                _this.init();
            }
        });
    };
    HomeComponent.prototype.init = function () {
        var pathName = window.location.href.split('/')[window.location.href.split('/').length - 1];
        console.log(pathName);
        if (pathName === '') {
            pathName = 'recommend';
        }
        this.toolJsService.changCurrentTab(pathName);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_3__["ToolJsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hot-article/hot-article.component.html":
/*!********************************************************!*\
  !*** ./src/app/hot-article/hot-article.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hot-article\">\n  <div class=\"article-item\" *ngFor=\"let article of hotArticles; let i = index\" >\n   <app-article [(article)]=\"hotArticles[i]\"></app-article>\n  </div>\n</div>\n<div *ngIf=\"!hotArticles\" class=\"no-content\" style=\"height: 300px; width: 100%; text-align: center;line-height: 300px ;background-color: white;box-shadow: 0 0 1px rgba(200,200,200,0.3)\">暂无内容</div>\n<div style=\"height: 40px;background-color:white; text-align:center; color: #a62d26;line-height: 40px; margin: 12px 0px\" *ngIf=\"error\">{{error}}</div>\n<div class=\"get-more\" (click)=\"getMore(clickMoreCount)\">获取更多</div>\n"

/***/ }),

/***/ "./src/app/hot-article/hot-article.component.less":
/*!********************************************************!*\
  !*** ./src/app/hot-article/hot-article.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hot-article {\n  background: white;\n  padding: 12px 24px;\n}\n.hot-article .article-item {\n  border-bottom: 8px solid rgba(200, 200, 200, 0.3);\n}\n"

/***/ }),

/***/ "./src/app/hot-article/hot-article.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hot-article/hot-article.component.ts ***!
  \******************************************************/
/*! exports provided: HotArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotArticleComponent", function() { return HotArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotArticleComponent = /** @class */ (function () {
    function HotArticleComponent(userService, articleService) {
        this.userService = userService;
        this.articleService = articleService;
        this.clickMoreCount = 1;
    }
    HotArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getHotArticles({
            page: 1
        }).subscribe(function (result) {
            if (result.code === 1) {
                _this.hotArticles = result.data;
            }
        });
    };
    HotArticleComponent.prototype.getMore = function (count) {
        var _this = this;
        this.articleService.getMoreHotArticle({
            page: count
        }).subscribe(function (result) {
            if (result.code === 1) {
                result.data.forEach(function (ele) {
                    _this.hotArticles.push(ele);
                });
                _this.clickMoreCount = _this.clickMoreCount + 1;
            }
            else if (result.code === 0) {
                _this.error = result.message;
                console.log(_this.error);
            }
        });
    };
    HotArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hot-article',
            template: __webpack_require__(/*! ./hot-article.component.html */ "./src/app/hot-article/hot-article.component.html"),
            styles: [__webpack_require__(/*! ./hot-article.component.less */ "./src/app/hot-article/hot-article.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], HotArticleComponent);
    return HotArticleComponent;
}());



/***/ }),

/***/ "./src/app/hot/hot.component.html":
/*!****************************************!*\
  !*** ./src/app/hot/hot.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"hot-box\" *ngIf=\"hots\" >\n  <a target=\"_blank\" class=\"question-list home-left\" *ngFor=\"let hot of hots; let i = index\" [routerLink]=\"['/question-detail',hot.question.questionId]\">\n    <div class=\"row \">\n      <div class=\"question-list-left col-sm-1\" [ngClass]=\"{'color': i<3}\">{{i+1}}</div>\n      <div class=\"question-list-mid \" [ngClass]=\"{'col-sm-7': hot.hotAnswer?hot.hotAnswer.answer.answerContent.match(imgReg): false, 'col-sm-11': hot.hotAnswer?!hot.hotAnswer.answer.answerContent.match(imgReg):true}\" >\n        <h3><a >{{ hot.question.questionTitle }}</a></h3>\n        <div class=\" article-list-content\">\n          <p [innerHTML]=\"( hot.hotAnswer? (hot.hotAnswer.answer.answerContent.replace(imgReg,'')).replace(deleteHreg,''): hot.question.questionContent).substr(0,160)+'...'\"></p>\n          <p class=\"hot\"><span class=\"glyphicon glyphicon-fire icon-margin\"></span>{{hot.hot+' 热度'}}</p>\n        </div>\n      </div>\n      <div class=\"question-list-right col-sm-4\" *ngIf=\" hot.hotAnswer?hot.hotAnswer.answer.answerContent.match(imgReg):false\" [innerHTML]=\" hot.hotAnswer.answer.answerContent.match(imgReg)[0]  | html\" >\n      </div>\n    </div>\n</a>\n</div>\n<div *ngIf=\"!hots\" class=\"no-content\" style=\"height: 300px; width: 100%; text-align: center;line-height: 300px ;background-color: white;box-shadow: 0 0 1px rgba(200,200,200,0.3)\">暂无内容</div>\n<div style=\"height: 40px;background-color:white; text-align:center; color: #a62d26;line-height: 40px; margin: 12px 0px\" *ngIf=\"error\">{{error}}</div>\n<div class=\"get-more\" (click)=\"getMore(pageNo)\">获取更多</div>\n"

/***/ }),

/***/ "./src/app/hot/hot.component.less":
/*!****************************************!*\
  !*** ./src/app/hot/hot.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hot-box .question-list {\n  display: block;\n  border-top: 1px solid #b2b2b2;\n}\n.hot-box .question-list:hover {\n  text-decoration: none;\n  color: #333333;\n}\n.hot-box .question-list:first-child {\n  border: none;\n}\n.hot-box .question-list .question-list-right {\n  height: 150px;\n}\n.hot-box .question-list .question-list-left {\n  font-size: 24px;\n  padding-left: 10px;\n  margin-top: 10px;\n  text-align: center;\n  color: #8590a6;\n}\n.hot-box .question-list .question-list-left.color {\n  color: #ffad42;\n}\n.hot-box .question-list .question-list-mid h3 a {\n  color: #333333;\n}\n.hot-box .question-list .question-list-mid h3 a:hover {\n  text-decoration: none;\n}\n.hot-box .question-list .question-list-mid .hot {\n  font-size: 16px;\n  color: #8590a6;\n}\n.hot-box .question-list .question-list-right {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/hot/hot.component.ts":
/*!**************************************!*\
  !*** ./src/app/hot/hot.component.ts ***!
  \**************************************/
/*! exports provided: HotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotComponent", function() { return HotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/get-question.service */ "./src/app/shared/get-question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotComponent = /** @class */ (function () {
    function HotComponent(getQuestionService, routeInfo, questionService) {
        this.getQuestionService = getQuestionService;
        this.routeInfo = routeInfo;
        this.questionService = questionService;
        this.imgReg = /<img.*?(?:>|\/>)/gi;
        this.deleteHreg = /<\/?.+?\/?>/g;
        this.pageNo = 2;
    }
    HotComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.hots = this.questionService.getHot();
        this.questionService.getHotQuestion({
            pageNo: 1,
            pageSize: 2,
            type: 'hotQuestion'
        }).subscribe(function (result) {
            if (result.code === 1) {
                _this.hots = result.data;
            }
        });
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
    };
    HotComponent.prototype.getMore = function (pageNo) {
        var _this = this;
        console.log(pageNo);
        this.questionService.getHotQuestion({
            pageNo: pageNo,
            pageSize: 2,
            type: 'hotQuestion'
        }).subscribe(function (result) {
            console.log(result);
            if (result.code === 1) {
                result.data.forEach(function (ele, i) {
                    _this.hots.push(ele);
                });
            }
            else if (result.code === 2) {
                _this.error = result.message;
            }
        });
        this.pageNo = this.pageNo + 1;
    };
    HotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hot',
            template: __webpack_require__(/*! ./hot.component.html */ "./src/app/hot/hot.component.html"),
            styles: [__webpack_require__(/*! ./hot.component.less */ "./src/app/hot/hot.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__["GetQuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], HotComponent);
    return HotComponent;
}());



/***/ }),

/***/ "./src/app/login-register/login-register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/login-register/login-register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register-b\">\n  <div class=\"login-register\">\n    <div class=\"sign-header\"></div>\n    <div class=\"sign-container\">\n      <!--登录-->\n      <div class=\"login\" *ngIf=\"isLogin\">\n        <form action=\"login\" [formGroup]=\"userLoginFrom\" (ngSubmit)=\"onSubmitLogin()\">\n          <input class=\"form-control mobile \" formControlName=\"mobile\" type=\"text\" placeholder=\"手机号码/用户名\" maxlength=\"11\" >\n          <span class=\"help-block warning-red\" [class.hidden]=\"!userLoginFrom.hasError('mobile', 'mobile')\" >请输入正确的手机号码</span>\n          <input class=\" form-control password\" formControlName=\"password\" type=\"password\" placeholder=\"密码\">\n          <span class=\"help-block warning-red\" *ngIf=\"loginInfo.loginError\" >{{loginInfo.loginMessage}}</span>\n          <span class=\"help-block forget-password pull-right\" [routerLink]=\"['/set']\" *ngIf=\"loginInfo.loginError\">忘记密码？</span>\n          <!--<div class=\"login-type\" >-->\n            <!--<input type=\"radio\" class=\"type-item\" name=\"loginType\" formControlName=\"loginType\" value=\"user\"> <label class=\"type-item\">用户</label>-->\n            <!--<input type=\"radio\" class=\"type-item\" name=\"loginType\" formControlName=\"loginType\" value=\"administrator\"> <label  class=\"type-item\">管理员</label>-->\n          <!--</div>-->\n          <button class=\"form-control submit\" type=\"submit\" [disabled]=\"!userLoginFrom.valid\" >登录</button>\n        </form>\n      </div>\n      <!--注册-->\n      <div class=\"register\" *ngIf=\"!isLogin\">\n        <form action=\"register\" [formGroup]=\"userRegisterFrom\" (ngSubmit)=\"onSubmitRegister()\">\n          <div class=\" mobile-box \">\n            <div class=\"left\">\n              <input class=\"form-control mobile \" formControlName=\"mobile\" type=\"text\" placeholder=\"手机号码\" maxlength=\"11\">\n            </div>\n            <button class=\"get-identifying-code right\" [ngClass]=\"{'bg-gray':!isGetIdentifyCode}\" [disabled]=\"userRegisterFrom.hasError('mobile', 'mobile')||(!isGetIdentifyCode && time>0)\" (click)=\"getIdentifyingCode()\"> {{isGetIdentifyCode?'获取验证码':'重新获取'+time+'s' }}</button>\n          </div>\n          <div [hidden]=\"userRegisterFrom.get('mobile').valid || userRegisterFrom.get('mobile').pristine\">\n            <span class=\"help-block warning-red\" [class.hidden]=\"!userRegisterFrom.hasError('mobile', 'mobile')\" >请输入正确的手机号码</span>\n          </div>\n          <div class=\"identifying-code-box\">\n            <input class=\"form-control identifying-code \" formControlName=\"identifyCode\" type=\"text\" placeholder=\"请输入验证码\">\n          </div>\n          <span class=\"help-block warning-red\" [class.hidden]=\"noIdentifyCode||userRegisterFrom.value.identifyCode.length > 0\">请输入验证码</span>\n          <div class=\"user-name-box\">\n            <input type=\"text\" class=\"form-control user-name\" formControlName=\"userName\" placeholder=\"请输入用户名\">\n          </div>\n          <div class=\"passwordGroup\" formGroupName=\"passwordGroup\">\n            <div class=\"password-box\">\n              <input class=\" form-control password\" formControlName=\"password\" type=\"password\" placeholder=\"密码\">\n            </div>\n            <span class=\"help-block warning-red\" [class.hidden]=\"!userRegisterFrom.hasError('minlength',['passwordGroup','password'])\">密码最小长度为6</span>\n\n            <div class=\"pConfirm-box\">\n              <input class=\" form-control password\" type=\"password\" formControlName=\"pConfirm\" placeholder=\"确认密码\">\n            </div>\n            <div [hidden]=\"(userRegisterFrom.value.passwordGroup.pConfirm.length<1)\">\n              <span class=\"help-block warning-red\" [class.hidden]=\"!userRegisterFrom.hasError('equals','passwordGroup')\">两次密码不相同</span>\n            </div>\n          </div>\n          <button class=\"form-control submit\" type=\"submit\" [disabled]=\"!userRegisterFrom.valid\">注册</button>\n          <div class=\"register-info\" *ngIf=\"!registerSuccess\">\n            <span class=\"help-block warning-red\">{{registerInfo+'   请登录'}}</span>\n            <a class=\"help-block forget-password pull-right\" [routerLink]=\"['/set']\" [hidden]=\"registerSuccess\" >忘记密码？</a>\n          </div>\n\n        </form>\n      </div>\n      <div class=\"sign-switch\">\n        {{!isLogin? '已有账号？':'没有账号？'}}\n        <span (click)=\" isLogin = !isLogin\">{{!isLogin? '登录':'注册'}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login-register/login-register.component.less":
/*!**************************************************************!*\
  !*** ./src/app/login-register/login-register.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-register-b {\n  width: 100%;\n  height: 800px;\n}\n.login-register-b .login-register {\n  width: 400px;\n  margin: 80px auto 0;\n  background-color: white;\n  border-radius: 4px;\n}\n.login-register-b .login-register .sign-container .login {\n  padding: 48px;\n}\n.login-register-b .login-register .sign-container .login .mobile-box,\n.login-register-b .login-register .sign-container .login .password,\n.login-register-b .login-register .sign-container .login .submit,\n.login-register-b .login-register .sign-container .login .identifying-code,\n.login-register-b .login-register .sign-container .login .user-name {\n  height: 40px;\n  margin-top: 24px;\n}\n.login-register-b .login-register .sign-container .login .login-type {\n  margin-top: 24px;\n  text-align: center;\n}\n.login-register-b .login-register .sign-container .login .login-type .type-item {\n  margin-right: 12px;\n  font-size: 16px;\n  font-weight: 400;\n}\n.login-register-b .login-register .sign-container .login .submit {\n  background-color: #0084ff;\n  color: white;\n}\n.login-register-b .login-register .sign-container .register {\n  padding: 48px;\n}\n.login-register-b .login-register .sign-container .register .register-info {\n  margin-top: 24px;\n}\n.login-register-b .login-register .sign-container .register .mobile-box,\n.login-register-b .login-register .sign-container .register .identifying-code-box,\n.login-register-b .login-register .sign-container .register .user-name-box,\n.login-register-b .login-register .sign-container .register .password-box,\n.login-register-b .login-register .sign-container .register .pConfirm-box,\n.login-register-b .login-register .sign-container .register .submit {\n  height: 40px;\n  margin-top: 24px;\n}\n.login-register-b .login-register .sign-container .register .submit {\n  background-color: #0084ff;\n  color: white;\n}\n.login-register-b .login-register .sign-container .register .identifying-code-box,\n.login-register-b .login-register .sign-container .register .user-name-box,\n.login-register-b .login-register .sign-container .register .password-box,\n.login-register-b .login-register .sign-container .register .pConfirm-box {\n  position: relative;\n}\n.login-register-b .login-register .sign-container .register .identifying-code-box:after,\n.login-register-b .login-register .sign-container .register .user-name-box:after,\n.login-register-b .login-register .sign-container .register .password-box:after,\n.login-register-b .login-register .sign-container .register .pConfirm-box:after {\n  content: '*';\n  height: 10px;\n  width: 10px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 10px;\n  color: red;\n  position: absolute;\n  right: -18px;\n  bottom: 50%;\n  margin-top: 5px;\n}\n.login-register-b .login-register .sign-container .register .mobile-box {\n  display: flex;\n}\n.login-register-b .login-register .sign-container .register .mobile-box .mobile {\n  height: 40px;\n}\n.login-register-b .login-register .sign-container .register .mobile-box .left {\n  flex: 7;\n}\n.login-register-b .login-register .sign-container .register .mobile-box .get-identifying-code {\n  flex: 3;\n  padding: 4px;\n  font-size: 12px;\n  margin-left: 2px;\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 2px;\n}\n.login-register-b .login-register .sign-container .register .mobile-box .get-identifying-code.bg-gray {\n  background-color: #b2b2b2;\n}\n.login-register-b .login-register .sign-container .forget-password {\n  display: inline-block;\n  width: 70px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  cursor: pointer;\n}\n.login-register-b .login-register .sign-container .forget-password:hover {\n  color: #0084ff;\n}\n.login-register-b .login-register .sign-container .sign-switch {\n  height: 60px;\n  background-color: #b2b2b2;\n  text-align: center;\n  line-height: 60px;\n}\n.login-register-b .login-register .sign-container .sign-switch span {\n  color: #0084ff;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/login-register/login-register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/login-register/login-register.component.ts ***!
  \************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator/ValidatorScript */ "./src/app/validator/ValidatorScript.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(commonService, routInfo, userService, fb, ls, toolJsService) {
        this.commonService = commonService;
        this.routInfo = routInfo;
        this.userService = userService;
        this.fb = fb;
        this.ls = ls;
        this.toolJsService = toolJsService;
        this.isLogin = true;
        this.isGetIdentifyCode = true;
        this.noIdentifyCode = true;
        this.time = 10;
        this.registerSuccess = true;
        this.registerInfo = '';
        this.loginInfo = {
            loginError: false,
            loginMessage: ''
        };
        this.userLoginFrom = this.fb.group({
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_3__["mobileVlidator"]]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            loginType: ['user']
        });
        this.userRegisterFrom = this.fb.group({
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_3__["mobileVlidator"]]],
            identifyCode: [''],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            passwordGroup: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                pConfirm: ['']
            }, { validator: _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_3__["equalsValidator"] })
        });
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        // alert(this.userService.getUser())
        if (this.userLoginFrom.valid) {
            this.userService.getLoginIdentify(this.userLoginFrom.value).subscribe(function (result) {
                if (result.code === 1) {
                    _this.ls.saveDate('userInfo', result.date);
                    _this.loginInfo.loginMessage = '';
                    // window.location.href = window.location.href.split('/#')[0];
                    window.location.href = document.referrer;
                }
                else if (result.code === 0) {
                    _this.loginInfo.loginError = true;
                    _this.loginInfo.loginMessage = result.date.message;
                }
            });
        }
    };
    LoginRegisterComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        if (this.userRegisterFrom.valid) {
            if (this.userRegisterFrom.value.identifyCode.length < 1) {
                this.noIdentifyCode = false;
                return;
            }
            else {
                this.userService.getRegisterIdentify(this.userRegisterFrom.value).subscribe(function (result) {
                    if (result.code === 2 || result.code === 0) {
                        _this.registerSuccess = false;
                        _this.registerInfo = result.message;
                    }
                    else if (result.code = 1) {
                        _this.ls.saveDate('userInfo', {
                            login: true,
                            userInfo: result.date.user,
                            message: '注册成功'
                        });
                        _this.commonService.showTipsBox.emit({
                            message: '注册成功',
                            type: '',
                            id: '',
                            isTips: true,
                            nextUrl: '/editor-profile',
                            currentPage: true,
                        });
                        // this.registerSuccess = true;
                        // this.registerInfo = result.message;
                        // this.toolJsService.next('/editor-profile');
                    }
                });
            }
        }
    };
    LoginRegisterComponent.prototype.getIdentifyingCode = function () {
        var _this = this;
        var timer;
        this.isGetIdentifyCode = !this.isGetIdentifyCode;
        timer = setInterval(function () {
            if (_this.time > 0 && !_this.isGetIdentifyCode) {
                _this.time--;
            }
            else {
                clearInterval(timer);
                _this.isGetIdentifyCode = true;
                _this.time = 10;
            }
        }, 1000);
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.less */ "./src/app/login-register/login-register.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_5__["ToolJsService"]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/question-detail/question-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/question-detail/question-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"question-detail\" *ngIf=\"questionDetail\">\n  <div class=\" row question\">\n    <div class=\"container-mine\">\n      <div class=\"col-sm-9\">\n        <div class=\"question-content\">\n          <h2 class=\"question-title\">{{ questionDetail.question.questionTitle }}</h2>\n          <!--question-detail-->\n          <div class=\"question-detail-content\" >\n            <p *ngIf=\"isShowReadAll\" [innerHtml]=\"questionDetail.question.questionContent\" style=\"display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;\" class=\"article-content \">\n            </p>\n            <p *ngIf=\"!isShowReadAll\" [innerHtml]=\"questionDetail.question.questionContent\" ></p>\n            <div [hidden]=\"!isShowReadAll\">\n              <button type=\"button\" class=\"read-all button button-margin-right-12 \"  (click)=\"readAll($event,isShowReadAll)\">\n                阅读全文\n              </button>\n            </div>\n            <div class=\"operation margin-top-12\">\n              <button type=\"button\" class=\"follow-question button button-margin-right-24 \" (click)=\"follow(questionDetail.isFollowed)\" >{{questionDetail.isFollowed?'取消关注':'关注问题'}}</button>\n              <button type=\"button\" class=\"write-answer button button-margin-right-24 \" (click)=\"writeAnswer($event, firstClickEditor)\">\n                <span class=\"glyphicon glyphicon-pencil icon-margin\"></span>{{firstClickEditor?'写回答':'收起回答'}}\n              </button>\n              <button type=\"button\" class=\"comment-btn button button-margin-right-24 \" (click)=\"showComment($event,firstClickComment)\">\n                <span class=\"glyphicon glyphicon-comment icon-margin\"></span>\n                {{firstClickComment?'评论': '收起评论'}}\n              </button>\n              <button type=\"button\" class=\"takeUp button button-margin-right-24 pull-right\" [hidden]=\"isShowReadAll\" (click)=\"takeUp($event,isShowReadAll)\">\n                收起\n                <span class=\"glyphicon glyphicon-chevron-up  icon-margin-left\"></span>\n              </button>\n            </div>\n            <div class=\"comment\" *ngIf=\"isShowComment\">\n              <app-comment-detail [(questionId)]=\"questionDetail.question.questionId\"></app-comment-detail>\n            </div>\n          </div>\n          <div class=\"editor-write\" *ngIf=\"isShowEditor\">\n            <div class=\"user-info col-sm-offset-1\">\n              <div class=\"user-right\">\n                <img class=\"user-portrait\" [src]=\"currentUser.userPicture?currentUser.userPicture: 'assets/img/noUserPicture.jpg'\" alt=\"\">\n              </div>\n              <div class=\"user-left\">\n                <span class=\"user-name\">{{currentUser.userName}}</span>\n                <span class=\"user-description\">{{currentUser.userDescription+'cccccccccccccccccccccc'}}</span>\n              </div>\n            </div>\n            <app-editor [isWriteAnswer]=\"isWriteAnswer\" [(questionId)]=\"questionDetail.question.questionId\" [(answerArr)]=\"questionDetail.answerArr\" ></app-editor>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3 clear-padding \">\n        <div class=\"question-author\" *ngIf=\"questionDetail.author\">\n          <div class=\"about-author\">关于作者</div>\n          <div class=\"user-info\">\n            <div class=\"user-right\">\n              <a [routerLink]=\"['/profile',questionDetail.author.mobile,'actives']\">\n                <img class=\"user-portrait\" [src]=\"questionDetail.author.userPicture\" alt=\"\">\n              </a>\n            </div>\n            <div class=\"user-left\">\n              <a class=\"user-name\" [routerLink]=\"['/profile',questionDetail.author.mobile,'actives']\">{{questionDetail.author.userName}}</a>\n              <span class=\"user-description\">{{questionDetail.author.userDescription+'cccccccccccccccccccccc'}}</span>\n            </div>\n          </div>\n          <div class=\"bottom\">\n              <div class=\"bottom-left\" [routerLink]=\"'/profile/'+questionDetail.author.mobile+'/articles'\">\n                <div class=\"article\">文章</div>\n                <div class=\"article-count\">{{questionDetail.author.articleCount}}</div>\n              </div>\n              <div class=\"bottom-right\" [routerLink]=\"'/profile/'+questionDetail.author.mobile+'/answers'\">\n                <div class=\"answer\">回答</div>\n                <div class=\"answer-count\">{{questionDetail.author.answerCount}}</div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-mine\" >\n    <div class=\"row \">\n      <div class=\"col-sm-9\">\n        <div class=\"answer-list\" *ngIf=\"questionDetail.answerArr\">\n          <!--<app-answer-list [isAnswerList]=\"answerList\" [(answerArr)]=\"answerArr\" ></app-answer-list>-->\n          <div class=\"item-box\" *ngFor=\"let answer of questionDetail.answerArr ; let i = index \" >\n            <app-answer [(answer)]=\"questionDetail.answerArr[i]\"></app-answer>\n          </div>\n        </div>\n        <div class=\"no-content\" *ngIf=\"!questionDetail.answerArr\"><img src=\"assets/img/no-content.png\" alt=\"\"></div>\n      </div>\n      <div class=\"col-sm-3 clear-padding\">\n        <app-right-bar></app-right-bar>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/question-detail/question-detail.component.less":
/*!****************************************************************!*\
  !*** ./src/app/question-detail/question-detail.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-detail .question {\n  background-color: white;\n  margin-bottom: 24px;\n  padding: 24px;\n}\n.question-detail .question .question-title {\n  margin-top: 0px;\n  font-weight: 700;\n}\n.question-detail .question .question-content .question-detail-content .operation .follow-question,\n.question-detail .question .question-content .question-detail-content .operation .write-answer {\n  height: 30px;\n  width: 100px;\n  background-color: #0084FF;\n  color: white;\n}\n.question-detail .question .question-content .question-detail-content .operation .write-answer {\n  background-color: white;\n  border: 1px solid #0084FF;\n  color: #0084FF;\n}\n.question-detail .question .question-content .editor-write {\n  margin-top: 24px;\n  margin-left: -8.33333333%;\n}\n.question-detail .question .question-content .editor-write .user-info {\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  padding-left: 24px;\n}\n.question-detail .question .question-content .editor-write .user-info .user-right .user-portrait {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n}\n.question-detail .question .question-content .editor-write .user-info .user-left {\n  margin-left: 12px;\n}\n.question-detail .question .question-content .editor-write .user-info .user-left .user-name,\n.question-detail .question .question-content .editor-write .user-info .user-left .user-description {\n  display: block;\n  font-size: 18px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.question-detail .question .question-content .editor-write .user-info .user-left .user-description {\n  font-size: 12px;\n}\n.question-detail .question .question-content .question-list {\n  border-top: 1px solid #b2b2b2;\n  padding: 24px;\n  margin-bottom: 12px;\n}\n.question-detail .question .question-content .question-list .article-list-content .article-content {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n.question-detail .question .question-content .question-list .answer-detail {\n  margin-top: 24px;\n}\n.question-detail .question .question-content .question-list .answer-content .user-info {\n  height: 30px;\n}\n.question-detail .question .question-content .question-list .answer-content .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.question-detail .question .question-content .question-list .answer-content .user-info .user-name,\n.question-detail .question .question-content .question-list .answer-content .user-info .user-description {\n  margin-left: 12px;\n}\n.question-detail .question .question-content .question-list .answer-content .user-info .user-name {\n  font-size: 24px;\n}\n.question-detail .question .question-content .question-list .answer-content .answer {\n  position: relative;\n}\n.question-detail .question .question-content .question-list .answer-content .answer.is-collapsed .answer-inner {\n  max-height: 300px;\n  overflow: hidden;\n}\n.question-detail .question .question-content .question-list .answer-content .answer .read-all {\n  position: absolute;\n  padding-top: 10px;\n  bottom: 0px;\n  width: 100%;\n  height: 40px;\n  z-index: 1000000;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #ffffff);\n  font-size: 24px;\n}\n.question-detail .question .question-content .question-list .answer-content .detail {\n  display: none;\n}\n.question-detail .question .question-content .question-list .answer-content .detail .answer-detail {\n  margin-top: 24px;\n}\n.question-detail .question .question-content .question-list .takeUp {\n  display: none;\n}\n.question-detail .question .question-content .comment {\n  height: 300px;\n}\n.question-detail .question .question-content .comment-detail {\n  margin-top: 12px;\n  box-shadow: 0 0 1px #b2b2b2;\n  padding: 24px;\n  display: none;\n}\n.question-detail .question .question-content .comment-detail .comment-length {\n  height: 30px;\n  line-height: 30px;\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.question-detail .question .question-content .comment-detail .comment-info {\n  margin-bottom: 12px;\n}\n.question-detail .question .question-content .comment-detail .comment-info .user-info {\n  height: 30px;\n}\n.question-detail .question .question-content .comment-detail .comment-info .user-info .user-portrait {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n}\n.question-detail .question .question-content .comment-detail .comment-info .user-info .user-name,\n.question-detail .question .question-content .comment-detail .comment-info .user-info .user-description {\n  margin-left: 12px;\n}\n.question-detail .question .question-content .comment-detail .comment-info .user-info .user-name {\n  font-size: 20px;\n}\n.question-detail .question .question-content .comment-detail .comment-info .comment-content {\n  margin-left: 42px;\n}\n.question-detail .question .question-content .comment-detail .add-comment {\n  display: flex;\n  height: 40px;\n  margin-top: 12px;\n}\n.question-detail .question .question-content .comment-detail .add-comment .write-comment {\n  flex: 8;\n}\n.question-detail .question .question-content .comment-detail .add-comment .add-comment {\n  flex: 1;\n  margin: 0;\n}\n.question-detail .question .question-content .comment-detail .takeUp-comment {\n  position: fixed;\n  bottom: 30px;\n  left: 900px;\n  height: 30px;\n  width: 93px;\n  background-color: #b2b2b2;\n  color: white;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.question-detail .question-author {\n  margin-left: 24px;\n  box-shadow: 0 0 2px #b2b2b2;\n  padding: 12px;\n}\n.question-detail .question-author .about-author {\n  font-size: 18px;\n}\n.question-detail .question-author .user-info {\n  display: flex;\n  margin-top: 12px;\n}\n.question-detail .question-author .user-info .user-right {\n  flex: 2;\n}\n.question-detail .question-author .user-info .user-right .user-portrait {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n.question-detail .question-author .user-info .user-left {\n  flex: 5;\n  margin-left: 12px;\n}\n.question-detail .question-author .user-info .user-left .user-name,\n.question-detail .question-author .user-info .user-left .user-description {\n  display: block;\n  font-size: 18px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.question-detail .question-author .user-info .user-left .user-description {\n  font-size: 12px;\n}\n.question-detail .question-author .bottom {\n  margin-top: 12px;\n  height: 60px;\n  display: flex;\n}\n.question-detail .question-author .bottom .article,\n.question-detail .question-author .bottom .answer,\n.question-detail .question-author .bottom .article-count,\n.question-detail .question-author .bottom .answer-count {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n}\n.question-detail .question-author .bottom .article,\n.question-detail .question-author .bottom .answer {\n  font-weight: 500;\n  color: #8590a6;\n}\n.question-detail .question-author .bottom .article-count,\n.question-detail .question-author .bottom .answer-count {\n  margin-top: 12px;\n}\n.question-detail .question-author .bottom .bottom-left,\n.question-detail .question-author .bottom .bottom-right {\n  flex: 1;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/question-detail/question-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/question-detail/question-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailComponent", function() { return QuestionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionDetailComponent = /** @class */ (function () {
    function QuestionDetailComponent(toolJs, commonService, questionService, userService, routInfo, ls) {
        var _this = this;
        this.toolJs = toolJs;
        this.commonService = commonService;
        this.questionService = questionService;
        this.userService = userService;
        this.routInfo = routInfo;
        this.ls = ls;
        this.isShowReadAll = true;
        this.isShowComment = false;
        this.firstClickComment = true;
        this.firstClickEditor = true;
        this.isWriteAnswer = true;
        this.isShowEditor = false;
        this.readAll = function (event, isShowReadAll, index) {
            if (index >= 0) {
                $(event.currentTarget).parent().removeClass('is-collapsed');
                $(event.currentTarget).hide();
                $($('.answer-item .takeUp')[index]).show();
            }
            else {
                _this.isShowReadAll = false;
            }
            event.stopPropagation();
        };
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var questionId = this.routInfo.snapshot.params['questionId'];
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.currentUser = this.userService.getCurrentUser();
            this.currentUserMobile = this.currentUser.mobile;
        }
        // if (!$.isEmptyObject(this.ls.getDate('newQuestionDetail'))) {
        //   if (Number(questionId) ===  Number(this.ls.getDate('newQuestionDetail').question.questionId )) {
        //     this.questionDetail = this.ls.getDate('newQuestionDetail');
        //     this.ls.removeDate('newQuestionDetail');
        //   } else {
        //     this.questionService.getQuestionDetail({
        //       questionId: questionId,
        //       user: this.currentUserMobile
        //     })
        //       .subscribe(result => {
        //         if (result.code === 1) {
        //           this.questionDetail = result.data;
        //         }
        //       });
        //   }
        // } else {
        this.questionService.getQuestionDetail({
            questionId: questionId,
            user: this.currentUserMobile
        })
            .subscribe(function (result) {
            if (result.code === 1) {
                _this.questionDetail = result.data;
            }
        });
        // }
    };
    QuestionDetailComponent.prototype.writeAnswer = function (event, firstClickEditor) {
        if (this.currentUserMobile) {
            if (firstClickEditor) {
                this.isShowEditor = true;
                if (this.isShowComment) {
                    this.isShowComment = false;
                    this.firstClickComment = true;
                }
                this.firstClickEditor = false;
            }
            else {
                this.isShowEditor = false;
                this.firstClickEditor = true;
            }
        }
        else {
            this.toolJs.next('/login-register');
        }
    };
    QuestionDetailComponent.prototype.showComment = function (event, firstClickComment) {
        if (firstClickComment) {
            this.isShowComment = true;
            this.firstClickComment = false;
            if (this.isShowEditor) {
                this.isShowEditor = false;
                this.firstClickEditor = true;
            }
        }
        else {
            this.isShowComment = false;
            this.firstClickComment = true;
        }
    };
    QuestionDetailComponent.prototype.takeUp = function (event, isShowReadAll, index) {
        if (index >= 0) {
            $(event.currentTarget).hide();
            $(event.currentTarget).parent().siblings('.answer-content').children('.answer').addClass('is-collapsed');
            $($('.answer .read-all')[index]).show();
        }
        else {
            this.isShowReadAll = true;
        }
    };
    QuestionDetailComponent.prototype.follow = function (isFollow) {
        var _this = this;
        if (this.currentUserMobile) {
            this.questionService.follow({
                questionId: this.questionDetail.question.questionId,
                user: this.currentUserMobile,
                isFollowed: isFollow
            }).subscribe(function (result) {
                if (result.code === 1) {
                    _this.questionDetail.isFollowed = result.data.isFollowed;
                }
                else if (result.code === 0) {
                    _this.commonService.showTipsBox.emit({
                        message: '操作错误，请重试',
                        isTips: true
                    });
                }
            });
        }
        else {
            this.toolJs.next('/login-register');
        }
    };
    QuestionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-detail',
            template: __webpack_require__(/*! ./question-detail.component.html */ "./src/app/question-detail/question-detail.component.html"),
            styles: [__webpack_require__(/*! ./question-detail.component.less */ "./src/app/question-detail/question-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_6__["ToolJsService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], QuestionDetailComponent);
    return QuestionDetailComponent;
}());



/***/ }),

/***/ "./src/app/question-list/question-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-list/question-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-mine\" *ngIf=\"questions\">\n  <div class=\"question-list home-left\" *ngFor=\"let question of questions ; let i = index\" >\n    <app-question-type1 [(recommend)]=\"questions[i]\"></app-question-type1>\n  </div>\n  <div style=\"height: 40px;background-color:white; text-align:center; color: #a62d26;line-height: 40px; margin: 12px 0px\" *ngIf=\"error\">{{error}}</div>\n  <div class=\"get-more\" (click)=\"updata()\">换一批</div>\n</div>\n<div *ngIf=\"!questions\" class=\"no-content\" style=\"height: 300px; width: 100%; text-align: center;line-height: 300px ;background-color: white;box-shadow: 0 0 1px rgba(200,200,200,0.3)\">暂无内容</div>\n"

/***/ }),

/***/ "./src/app/question-list/question-list.component.less":
/*!************************************************************!*\
  !*** ./src/app/question-list/question-list.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-list {\n  border-top: 1px solid #b2b2b2;\n  padding: 24px;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/question-list/question-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-list/question-list.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/get-question.service */ "./src/app/shared/get-question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(ls, getQuestionService, routeInfo, questionService) {
        this.ls = ls;
        this.getQuestionService = getQuestionService;
        this.routeInfo = routeInfo;
        this.questionService = questionService;
        this.clickMoreCount = 1;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.ls.getDate('userInfo');
        this.questionService.getWriteAnswerQuestionList().subscribe(function (result) {
            if (result.code === 1) {
                _this.questions = result.data;
            }
        });
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
    };
    QuestionListComponent.prototype.updata = function () {
        var _this = this;
        this.questionService.getWriteAnswerQuestionList().subscribe(function (result) {
            if (result.code === 1) {
                _this.questions = result.data;
            }
        });
    };
    QuestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.less */ "./src/app/question-list/question-list.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"], _shared_get_question_service__WEBPACK_IMPORTED_MODULE_1__["GetQuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/recommend/recommend.component.html":
/*!****************************************************!*\
  !*** ./src/app/recommend/recommend.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"recommend\" *ngIf=\"recommends\">\n  <div class=\"question-list home-left\" *ngFor=\"let recommend of recommends ; let i = index\" >\n    <app-question-type1 [(recommend)]=\"recommends[i]\"></app-question-type1>\n  </div>\n  <div style=\"height: 40px;background-color:white; text-align:center; color: #a62d26;line-height: 40px; margin: 12px 0px\" *ngIf=\"error\">{{error}}</div>\n  <div class=\"get-more\" (click)=\"getMore(clickMoreCount)\">获取更多</div>\n</div>\n<div *ngIf=\"!recommends\" class=\"no-content\" style=\"height: 300px; width: 100%; text-align: center;line-height: 300px ;background-color: white;box-shadow: 0 0 1px rgba(200,200,200,0.3)\">暂无内容</div>\n"

/***/ }),

/***/ "./src/app/recommend/recommend.component.less":
/*!****************************************************!*\
  !*** ./src/app/recommend/recommend.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-list {\n  padding: 24px;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/recommend/recommend.component.ts":
/*!**************************************************!*\
  !*** ./src/app/recommend/recommend.component.ts ***!
  \**************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/answer/answer.service */ "./src/app/shared/answer/answer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendComponent = /** @class */ (function () {
    function RecommendComponent(ls, questionService, answerService) {
        this.ls = ls;
        this.questionService = questionService;
        this.answerService = answerService;
        this.clickMoreCount = 1;
    }
    RecommendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.ls.getDate('userInfo');
        this.answerService.getRecommend({
            page: 1
        }).subscribe(function (result) {
            console.log(result);
            if (result.code === 1) {
                _this.recommends = result.data;
            }
        });
    };
    RecommendComponent.prototype.ngOnChanges = function (changes) {
    };
    RecommendComponent.prototype.getMore = function (count) {
        var _this = this;
        this.answerService.getMoreRecommends({
            page: count
        }).subscribe(function (result) {
            if (result.code === 1) {
                result.data.forEach(function (ele) {
                    _this.recommends.push(ele);
                });
                _this.clickMoreCount = _this.clickMoreCount + 1;
            }
            else if (result.code === 0) {
                _this.error = result.message;
            }
        });
    };
    RecommendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommend',
            template: __webpack_require__(/*! ./recommend.component.html */ "./src/app/recommend/recommend.component.html"),
            styles: [__webpack_require__(/*! ./recommend.component.less */ "./src/app/recommend/recommend.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_3__["AnswerService"]])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/app/registe-ok/registe-ok.component.html":
/*!******************************************************!*\
  !*** ./src/app/registe-ok/registe-ok.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ok clear-nav\">注册成功</div>\n"

/***/ }),

/***/ "./src/app/registe-ok/registe-ok.component.less":
/*!******************************************************!*\
  !*** ./src/app/registe-ok/registe-ok.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registe-ok/registe-ok.component.ts":
/*!****************************************************!*\
  !*** ./src/app/registe-ok/registe-ok.component.ts ***!
  \****************************************************/
/*! exports provided: RegisteOkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteOkComponent", function() { return RegisteOkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisteOkComponent = /** @class */ (function () {
    function RegisteOkComponent() {
    }
    RegisteOkComponent.prototype.ngOnInit = function () {
    };
    RegisteOkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registe-ok',
            template: __webpack_require__(/*! ./registe-ok.component.html */ "./src/app/registe-ok/registe-ok.component.html"),
            styles: [__webpack_require__(/*! ./registe-ok.component.less */ "./src/app/registe-ok/registe-ok.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisteOkComponent);
    return RegisteOkComponent;
}());



/***/ }),

/***/ "./src/app/right-bar/right-bar.component.html":
/*!****************************************************!*\
  !*** ./src/app/right-bar/right-bar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-bar\">\n  <div class=\"card \">\n    <div class=\"write\">\n      <div class=\"write-nav\">\n        <a target=\"_blank\" class=\"write-nav-item\" routerLink=\"/question-list\" >写回答</a>\n        <a target=\"_blank\" class=\"write-nav-item\" routerLink=\"/editor\">写文章</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <ul class=\"nav-list\">\n      <!--<li class=\"nav-list-item\"><a href=\"#\"><span class=\"glyphicon glyphicon-star icon-margin\"></span>我的收藏</a></li>-->\n      <li class=\"nav-list-item\"><a class=\"follow\"  (click)=\"goNext('follow')\" ><span class=\"glyphicon glyphicon-star icon-margin\"></span>我关注的问题</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/right-bar/right-bar.component.less":
/*!****************************************************!*\
  !*** ./src/app/right-bar/right-bar.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-bar {\n  background-color: white;\n  width: 100%;\n}\n.right-bar .card {\n  margin-bottom: 10px;\n  background: #fff;\n  overflow: hidden;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);\n  box-sizing: border-box;\n}\n.right-bar .write-nav {\n  display: flex;\n}\n.right-bar .write-nav .write-nav-item {\n  flex: 1;\n  align-items: center;\n  text-align: center;\n  line-height: 1;\n  flex-direction: column;\n  margin: 22px;\n  color: #333333;\n}\n.right-bar .write-nav .write-nav-item:hover {\n  text-decoration: none;\n  color: #004b95;\n  cursor: pointer;\n}\n.right-bar .nav-list .nav-list-item {\n  padding: 0 12px;\n  height: 30px;\n  line-height: 30px;\n}\n.right-bar .nav-list .nav-list-item .follow {\n  color: #333333;\n}\n.right-bar .nav-list .nav-list-item .follow:hover {\n  text-decoration: none;\n  color: #004b95;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/right-bar/right-bar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/right-bar/right-bar.component.ts ***!
  \**************************************************/
/*! exports provided: RightBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightBarComponent", function() { return RightBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightBarComponent = /** @class */ (function () {
    function RightBarComponent(userSerVice, toolJSService) {
        this.userSerVice = userSerVice;
        this.toolJSService = toolJSService;
    }
    RightBarComponent.prototype.ngOnInit = function () {
        if (!$.isEmptyObject(this.userSerVice.getCurrentUser())) {
            this.user = this.userSerVice.getCurrentUser();
        }
    };
    RightBarComponent.prototype.goNext = function (type) {
        if (this.user) {
            var url = void 0;
            if (type === 'follow') {
                url = '/profile/' + this.user.mobile + '/follow';
            }
            else {
                url = type;
            }
            this.toolJSService.next(url);
        }
        else {
            this.toolJSService.next('/login-register');
        }
    };
    RightBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-bar',
            template: __webpack_require__(/*! ./right-bar.component.html */ "./src/app/right-bar/right-bar.component.html"),
            styles: [__webpack_require__(/*! ./right-bar.component.less */ "./src/app/right-bar/right-bar.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_2__["ToolJsService"]])
    ], RightBarComponent);
    return RightBarComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-box\" >\n  <div class=\"container-mine\">\n    <div class=\"search-list\" *ngIf=\"searchResults\">\n      <div class=\"search-item \"  *ngFor=\"let result of searchResults\">\n      <div class=\"search-result-title\">\n        <div class=\"result-title\" *ngIf=\"result.answerId\">\n          <h3 ><a [routerLink]=\"['/question-detail',result.question.questionId]\" [innerHTML]=\"result.question.questionTitle | keyword:keyword\"></a></h3>\n        </div>\n        <div class=\"result-title\" *ngIf=\"result.articleId\">\n          <h3 ><a [routerLink]=\"['/article-detail',result.article.articleId]\" [innerHTML]=\"result.article.articleTitle | keyword:keyword\"></a></h3>\n        </div>\n        <div class=\"search-result-detail\">\n          <div class=\"result-detail\" *ngIf=\"result.articleId\" [innerHTML]=\"((result.article.articleContent.replace(imgReg,'')).replace(deleteHreg,'').substr(0,200)+ '...') | keyword:keyword\"></div>\n          <div class=\"result-detail\" *ngIf=\"result.answerId\" [innerHTML]=\"((result.answer.answerContent.replace(imgReg,'')).replace(deleteHreg,'').substr(0,200)+ '...' ) | keyword:keyword\"></div>\n        </div>\n        <div class=\"search-result-bottom\">\n          <span class=\"result-author\" ><span class=\"author\">作者：</span>{{result.articleId?result.articleAuthor.userName:result.answerAuthor.userName}}</span>\n          <span class=\"result-time\" ><span class=\"time\">日期：</span>{{(result.articleId?result.article.articletime:result.answer.answertime)| date:'yyyy-MM-dd'}} </span>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div *ngIf=\"!searchResults\" class=\"no-content\" style=\"height: 300px; width: 100%; text-align: center;line-height: 300px ;background-color: white;box-shadow: 0 0 1px rgba(200,200,200,0.3)\">暂无搜索结果</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.less":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  min-height: 100%;\n  overflow: hidden;\n}\n.search-box .search-item {\n  padding: 12px 24px;\n  border: 1px solid rgba(200, 200, 200, 0.3);\n  border-top: none;\n  background-color: white;\n}\n.search-box .search-item:first-child {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n}\n.search-box .search-item:hover {\n  background-color: rgba(245, 245, 245, 0.5);\n}\n.search-box .search-item .search-result-title .result-title a:hover {\n  text-decoration: none;\n  color: #333333;\n}\n.search-box .search-item .search-result-bottom {\n  height: 30px;\n  line-height: 30px;\n}\n.search-box .search-item .search-result-bottom .result-author {\n  color: #0084FF;\n  font-size: 14px;\n}\n.search-box .search-item .search-result-bottom .result-author .author {\n  font-size: 16px;\n  color: #333333;\n}\n.search-box .search-item .search-result-bottom .result-time {\n  margin-left: 34px;\n  font-size: 12px;\n  color: #333333;\n}\n.search-box .search-item .search-result-bottom .result-time .time {\n  font-size: 16px;\n  color: #333333;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(routeInfo, router, commonService, routerInfo, questionService, ls) {
        this.routeInfo = routeInfo;
        this.router = router;
        this.commonService = commonService;
        this.routerInfo = routerInfo;
        this.questionService = questionService;
        this.ls = ls;
        this.imgReg = /<img.*?(?:>|\/>)/gi;
        this.deleteHreg = /<\/?.+?\/?>/g;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerInfo.queryParams.subscribe(function (params) {
            if (params.keyword) {
                _this.keyword = params.keyword;
            }
        });
        this.init();
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })
            .map(function () { return _this.routeInfo; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .subscribe(function (event) {
            event.queryParams.subscribe(function (params) {
                _this.keyword = params.keyword;
            });
            _this.init();
        });
    };
    SearchComponent.prototype.init = function () {
        var _this = this;
        if (!$.isEmptyObject(this.ls.getDateSes('searchResult'))) {
            var result = this.ls.getDateSes('searchResult');
            if (result.keyword.trim() === this.keyword.trim()) {
                var searchResult = result.result;
                if (searchResult.code === 1) {
                    this.searchResults = searchResult.data;
                }
            }
        }
        this.commonService.searchEvent.subscribe(function (result) {
            var searchResult = result.result;
            if (searchResult.code === 1) {
                _this.searchResults = searchResult.data;
            }
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.less */ "./src/app/search/search.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/set/set.component.html":
/*!****************************************!*\
  !*** ./src/app/set/set.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"set clear-nav\">\n  <app-navbar></app-navbar>\n  <div class=\"container-mine\">\n    <div class=\"set-inner row\">\n      <div class=\"col-sm-3\">\n        <ul class=\"ul-left\">\n          <li class=\"set-item change-password\" [ngClass]=\"{'active': showChangPassword}\" (click)=\"show('password')\">修改密码</li>\n          <li  class=\"set-item change-mobile\" [ngClass]=\"{'active': showChangMobile}\" (click)=\"show('mobile')\">修改手机号</li>\n        </ul>\n      </div>\n      <div class=\"col-sm-9\">\n          <div class=\"change-item change-password-box\" *ngIf=\"showChangPassword\">\n              <div class=\"change-index\">\n                <h3>修改密码</h3>\n              </div>\n              <div class=\"change-content\">\n                <!--<div class=\"password-box\">-->\n                  <!--<label for=\"password\" class=\"lab-item\"> 请输入旧密码:</label>-->\n                  <!--<input type=\"password\" id=\"password\" class=\"form-control inp-password\" [(ngModel)]=\"password\">-->\n                <!--</div>-->\n                <div class=\"mobile-box\">\n                  <label for=\"inp-mobile\" class=\"lab-item\"> {{'手机号:'}}</label>\n                  <input type=\"text\" id=\"inp-mobile\" class=\"form-control inp-mobile\"  disabled placeholder=\"{{showCurrentMobile?currentUser.mobile.substr(0,2)+'****'+currentUser.mobile.substr(7,11):''}}\" maxlength=\"11\">\n                  <button class=\"get-identifying-code right\" [ngClass]=\"{'bg-gray':!isGetIdentifyCode}\" [disabled]=\"(!isGetIdentifyCode && time>0)\" (click)=\"getIdentifyingCode(true)\"> {{isGetIdentifyCode?'获取验证码':'重新获取'+time+'s' }}</button>\n                </div>\n                <div class=\"password-box warning\" [class.hidden]=\"!error || mobile.valid\">{{error}}</div>\n                <div class=\"mobile-box\">\n                  <label for=\"identifying-code\"  class=\"lab-item\"> 请输入验证码:</label>\n                  <input type=\"text\" id = \"identifying-code\"  class=\"form-control identifying-code\" [(ngModel)]=\"identifyCode\">\n                </div>\n                <div class=\"password-box warning\" [class.hidden]=\"identify\">验证码输入错误，请重新输入</div>\n                <!--<div class=\"password-box warning\" *ngIf=\"isChangSuccess !== undefined && !isChangSuccess\">密码错误 请重新输入 </div>-->\n                <div class=\"password-box\">\n                  <label for=\"new-password\"  class=\"lab-item\"> 请输入新密码:</label>\n                  <input type=\"password\" id=\"new-password\" class=\"form-control inp-password\" [(ngModel)]=\"newPassword\" >\n                </div>\n                <div class=\"password-box warning\" *ngIf=\"newPassword !== undefined && newPassword.length <6\">请输入6个字符以上</div>\n                <div class=\"password-box warning\" *ngIf=\"newPassword !== undefined && password === newPassword\">请输入不同的密码</div>\n                <div class=\"password-box\">\n                  <label for=\"p-new-password\" class=\"lab-item\"> 请确认新密码:</label>\n                  <input type=\"password\" id=\"p-new-password\" class=\"form-control inp-password\" [(ngModel)]=\"newPconfirm\">\n                </div>\n                <div class=\"password-box warning\" *ngIf=\"newPconfirm !== undefined && newPconfirm !== newPassword\"> 两次密码不相同 </div>\n                <div class=\"password-box warning\" *ngIf=\"isChangSuccess !== undefined && isChangSuccess\">修改成功 </div>\n                <div class=\"password-box warning\" *ngIf=\"changeResult && changeResult.code === 2\"> 修改失败 </div>\n                <button class=\"button confirm\" type=\"submit\" (click)=\"confirm('password')\">确认</button>\n              </div>\n          </div>\n        <div class=\"change-item change-mobile-box\" *ngIf=\" showChangMobile\">\n          <div class=\"change-index\">\n            <h3>修改手机号</h3>\n          </div>\n          <div class=\"change-content\">\n            <div class=\"old-mobile\">\n              <div class=\"mobile-box\">\n                <label  class=\"lab-item\"> {{showCurrentMobile?'当前手机号:':'请输入新手机号:'}}</label>\n                <input type=\"text\" class=\"form-control inp-mobile\" *ngIf=\"showCurrentMobile\" [disabled]=\"showCurrentMobile\" placeholder=\"{{showCurrentMobile?currentUser.mobile.substr(0,2)+'****'+currentUser.mobile.substr(7,11):''}}\">\n                <input type=\"text\" class=\"form-control inp-mobile\"   *ngIf=\"!showCurrentMobile\" placeholder=\"请输入新号码\" [formControl]=\"newMobile\" maxlength=\"11\">\n                <button class=\"get-identifying-code right\" [ngClass]=\"{'bg-gray':!isGetIdentifyCode}\" [disabled]=\"(!isGetIdentifyCode && time>0)\" (click)=\"getIdentifyingCode(showCurrentMobile)\"> {{isGetIdentifyCode?'获取验证码':'重新获取'+time+'s' }}</button>\n              </div>\n              <div class=\"password-box warning\" [class.hidden]=\"!newMobile.hasError('mobile')\">请输入正确的手机号码</div>\n              <div class=\"password-box warning\" *ngIf=\"!changMobileMessage && currentUser.mobile === newMobile.value\">请不同的手机号码</div>\n              <div class=\"mobile-box\">\n                <label for=\"new-password\"  class=\"lab-item\"> 请输入验证码:</label>\n                <input type=\"text\"  class=\"form-control identifying-code\" [(ngModel)]=\"identifyCode\">\n              </div>\n              <div class=\"password-box warning\" [class.hidden]=\"identify\">验证码输入错误，请重新输入</div>\n              <div class=\"password-box warning\" *ngIf=\"changMobileMessage\">修改成功</div>\n              <button class=\"button confirm\" type=\"submit\" (click)=\"confirm('changeMobile')\">确认</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/set/set.component.less":
/*!****************************************!*\
  !*** ./src/app/set/set.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".set {\n  height: 100%;\n  width: 100%;\n  background-color: #cccccc;\n}\n.set .set-inner {\n  height: 700px;\n}\n.set .set-inner .ul-left {\n  margin-right: 12px;\n}\n.set .set-inner .ul-left .set-item {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 16px;\n  color: #333333;\n  border-radius: 2px;\n  background-color: white;\n}\n.set .set-inner .ul-left .set-item.active {\n  color: white;\n  background-color: #4ca1ff;\n}\n.set .set-inner .change-item {\n  padding: 24px;\n  background-color: white;\n}\n.set .set-inner .change-item .change-index {\n  height: 60px;\n  border-bottom: 1px solid #b2b2b2;\n}\n.set .set-inner .change-item .change-content {\n  width: 80%;\n  margin: 24px auto 0;\n}\n.set .set-inner .change-item .change-content .password-box,\n.set .set-inner .change-item .change-content .mobile-box {\n  display: flex;\n  height: 40px;\n  line-height: 40px;\n  margin-bottom: 24px;\n}\n.set .set-inner .change-item .change-content .password-box.warning,\n.set .set-inner .change-item .change-content .mobile-box.warning {\n  margin-left: 120px;\n  color: #a62d26;\n}\n.set .set-inner .change-item .change-content .password-box .lab-item,\n.set .set-inner .change-item .change-content .mobile-box .lab-item {\n  height: 40px;\n  flex: 2;\n}\n.set .set-inner .change-item .change-content .password-box .inp-password,\n.set .set-inner .change-item .change-content .mobile-box .inp-password,\n.set .set-inner .change-item .change-content .password-box .identifying-code,\n.set .set-inner .change-item .change-content .mobile-box .identifying-code {\n  height: 40px;\n  flex: 7;\n}\n.set .set-inner .change-item .change-content .password-box .inp-mobile,\n.set .set-inner .change-item .change-content .mobile-box .inp-mobile {\n  height: 40px;\n  flex: 5;\n  font-size: 24px;\n}\n.set .set-inner .change-item .change-content .password-box .get-identifying-code,\n.set .set-inner .change-item .change-content .mobile-box .get-identifying-code {\n  flex: 2;\n  padding: 4px;\n  font-size: 12px;\n  margin-left: 2px;\n  background-color: green;\n  color: white;\n  border: none;\n  border-radius: 2px;\n}\n.set .set-inner .change-item .change-content .password-box .get-identifying-code.bg-gray,\n.set .set-inner .change-item .change-content .mobile-box .get-identifying-code.bg-gray {\n  background-color: #b2b2b2;\n}\n.set .set-inner .change-item .change-content .confirm {\n  height: 40px;\n  width: 80px;\n  line-height: 40px;\n  color: white;\n  background-color: #0084FF;\n  border: none;\n  margin-left: 120px;\n}\n"

/***/ }),

/***/ "./src/app/set/set.component.ts":
/*!**************************************!*\
  !*** ./src/app/set/set.component.ts ***!
  \**************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validator/ValidatorScript */ "./src/app/validator/ValidatorScript.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SetComponent = /** @class */ (function () {
    function SetComponent(toolJs, ls, userService, commonService) {
        this.toolJs = toolJs;
        this.ls = ls;
        this.userService = userService;
        this.commonService = commonService;
        this.isLogin = false;
        this.newMobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_4__["mobileVlidator"]]);
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validator_ValidatorScript__WEBPACK_IMPORTED_MODULE_4__["mobileVlidator"]]);
        this.showChangPassword = true;
        this.showChangMobile = false;
        this.showCurrentMobile = true;
        this.time = 10;
        this.identify = true;
        this.isGetIdentifyCode = true;
        this.changMobileMessage = false;
    }
    SetComponent.prototype.ngOnInit = function () {
        if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
            this.isLogin = this.ls.getDate('userInfo').login;
            this.currentUser = this.ls.getDate('userInfo').userInfo;
        }
        else {
            this.isLogin = false;
            this.toolJs.currentPage('/login-register');
        }
    };
    SetComponent.prototype.show = function (type) {
        if (type === 'mobile') {
            this.showCurrentMobile = true;
            if (this.isLogin) {
                this.showChangMobile = true;
                this.showChangPassword = false;
            }
            else {
                return;
            }
        }
        else if (type === 'password') {
            this.showChangMobile = false;
            this.showChangPassword = true;
        }
    };
    SetComponent.prototype.confirm = function (type) {
        var _this = this;
        if (type === 'password') {
            if (this.newPassword !== undefined && this.newPassword === this.newPconfirm) {
                if (this.commonService.identifyCode(this.currentUser.mobile, this.identifyCode)) {
                    this.identify = true;
                    this.identifyCode = undefined;
                    this.userService.upDateUserInfo({
                        user: { mobile: this.currentUser.mobile },
                        value: this.newPassword,
                        type: type
                    })
                        .subscribe(function (result) {
                        _this.changeResult = result;
                        if (result.code === 1) {
                            _this.isChangSuccess = true;
                            _this.newPassword = undefined;
                            _this.newPconfirm = undefined;
                            _this.ls.removeDate('userInfo');
                            _this.commonService.showTipsBox.emit({
                                message: '修改密码成功',
                                type: '',
                                id: '',
                                isTips: true,
                                nextUrl: '/login-register',
                                currentPage: true
                            });
                        }
                        else if (result.code === 0) {
                            _this.isChangSuccess = false;
                        }
                    });
                }
                else {
                    this.identify = false;
                    this.identifyCode = undefined;
                }
            }
        }
        if (type === 'changeMobile') {
            if (this.showCurrentMobile) {
                if (this.commonService.identifyCode(this.currentUser.mobile, this.identifyCode)) {
                    this.showCurrentMobile = false;
                    this.identify = true;
                    this.identifyCode = undefined;
                }
                else {
                    this.identify = false;
                    this.showCurrentMobile = true;
                    this.identifyCode = undefined;
                }
            }
            else if (!this.showCurrentMobile) {
                this.identify = true;
                if (this.currentUser.mobile !== this.newMobile.value) {
                    if (this.commonService.identifyCode(this.newMobile, this.identifyCode)) {
                        this.identify = true;
                        this.userService.upDateUserInfo({
                            user: { mobile: this.currentUser.mobile },
                            value: this.newMobile.value,
                            type: 'mobile'
                        })
                            .subscribe(function (result) {
                            console.log(result);
                            if (result.code === 1) {
                                _this.changMobileMessage = true;
                                _this.currentUser.mobile = _this.newMobile.value;
                                _this.ls.removeDate('userInfo');
                                _this.commonService.showTipsBox.emit({
                                    message: '修改号码成功',
                                    type: '',
                                    id: '',
                                    isTips: true,
                                    nextUrl: '/login-register',
                                    currentPage: true
                                });
                            }
                            else {
                                _this.commonService.showTipsBox.emit({
                                    message: result.message,
                                    isTips: true,
                                });
                            }
                        });
                    }
                    else {
                        this.identify = false;
                        this.identifyCode = undefined;
                    }
                }
                else {
                }
            }
        }
    };
    SetComponent.prototype.getIdentifyingCode = function (iscurrentUser) {
        var _this = this;
        var can = false;
        if (this.newMobile.valid || this.mobile.valid) {
            can = true;
        }
        else if (iscurrentUser) {
            can = true;
        }
        if (can) {
            this.error = undefined;
            var timer_1;
            this.isGetIdentifyCode = !this.isGetIdentifyCode;
            timer_1 = setInterval(function () {
                if (_this.time > 0 && !_this.isGetIdentifyCode) {
                    _this.time--;
                }
                else {
                    clearInterval(timer_1);
                    _this.isGetIdentifyCode = true;
                    _this.time = 10;
                }
            }, 1000);
        }
        else {
            this.error = ' 请输入正确手机号吗';
        }
    };
    SetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set',
            template: __webpack_require__(/*! ./set.component.html */ "./src/app/set/set.component.html"),
            styles: [__webpack_require__(/*! ./set.component.less */ "./src/app/set/set.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_6__["ToolJsService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], SetComponent);
    return SetComponent;
}());



/***/ }),

/***/ "./src/app/shared/alter/alter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alter/alter.service.ts ***!
  \***********************************************/
/*! exports provided: AlterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterService", function() { return AlterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlterService = /** @class */ (function () {
    function AlterService() {
    }
    AlterService.prototype.showConfirm = function (data) {
    };
    AlterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlterService);
    return AlterService;
}());



/***/ }),

/***/ "./src/app/shared/answer/answer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/answer/answer.service.ts ***!
  \*************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
    }
    AnswerService.prototype.getRecommend = function (data) {
        return this.http.get('/api/getRecommendAnswer' + '?t=' + (new Date()).getTime().toString(), { params: data });
    };
    AnswerService.prototype.getMoreRecommends = function (data) {
        return this.http.get('/api/getMoreRecommendAnswers' + '?t=' + (new Date()).getTime().toString(), { params: data });
    };
    AnswerService.prototype.getUserAnsawer = function (userMobile) {
        return this.http.get('/api/getUserAnswers/' + userMobile + '?t=' + (new Date()).getTime().toString());
    };
    AnswerService.prototype.addAnswer = function (data) {
        return this.http.post('/api/addAnswer', data);
    };
    AnswerService.prototype.getAnswerForQuestion = function (id) {
        return this.http.get('/api/getAnswerForQuestion');
    };
    AnswerService.prototype.deleteAnswer = function (data) {
        return this.http.get('/api/deleteAnswer', { params: data });
    };
    AnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/shared/article/article.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/article/article.service.ts ***!
  \***************************************************/
/*! exports provided: ArticleService, Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = /** @class */ (function () {
    function ArticleService(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    ArticleService.prototype.getUserArticles = function (userMobile) {
        return this.http.get('/api/getUserArticles/' + userMobile);
    };
    ArticleService.prototype.getArticleDetail = function (articleId) {
        return this.http.get('/api/getArticleDetail/' + articleId);
    };
    ArticleService.prototype.getHotArticles = function (data) {
        return this.http.get('/api/getHotArticles', { params: data });
    };
    ArticleService.prototype.getMoreHotArticle = function (data) {
        return this.http.get('/api/getMoreHotArticles', { params: data });
    };
    ArticleService.prototype.deleteArticle = function (data) {
        return this.http.get('/api/deleteArticle', { params: data });
    };
    ArticleService.prototype.addArticle = function (data) {
        return this.http.post('/api/addArticle', data);
    };
    ArticleService.prototype.uploadFile = function (data) {
        return this.http.post('/api/uploadFile', data);
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());

var Article = /** @class */ (function () {
    function Article(articleId, articleTitle, articleContent) {
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleContent = articleContent;
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/shared/ask/ask.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/ask/ask.service.ts ***!
  \*******************************************/
/*! exports provided: AskService, Ask, UserAsk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskService", function() { return AskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ask", function() { return Ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAsk", function() { return UserAsk; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AskService = /** @class */ (function () {
    function AskService() {
        this.userAskArr = [
            new UserAsk('13111111111', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11)),
            new UserAsk('13111111111', new Ask('111111113', '怎样吃的好又吃的饱？', new Date(2018, 8, 24), 2, 2)),
            new UserAsk('13111111111', new Ask('111111114', '好吃又健康的美食有哪些？', new Date(2018, 8, 24), 90, 8)),
            new UserAsk('13111111111', new Ask('111111115', '花菜的吃法有哪些', new Date(2018, 8, 24), 0, 0)),
            new UserAsk('13111111111', new Ask('111111116', '水水水水 ', new Date(2018, 8, 24), 9, 2)),
            new UserAsk('13111111111', new Ask('111111112', '如何健康饮食？', new Date(2018, 8, 24), 23, 3)),
            new UserAsk('13111111112', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11)),
            new UserAsk('13111111112', new Ask('111111113', '如何健康饮食？', new Date(2018, 8, 24), 2, 2)),
            new UserAsk('13111111112', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018, 8, 24), 90, 8)),
            new UserAsk('13111111112', new Ask('111111115', '好吃又健康的美食', new Date(2018, 8, 24), 0, 0)),
            new UserAsk('13111111112', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018, 8, 24), 9, 2)),
            new UserAsk('13111111112', new Ask('111111112', '水水水水？', new Date(2018, 8, 24), 23, 3)),
            new UserAsk('13111111113', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11)),
            new UserAsk('13111111113', new Ask('111111113', '如何健康饮食？', new Date(2018, 8, 24), 2, 2)),
            new UserAsk('13111111113', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018, 8, 24), 90, 8)),
            new UserAsk('13111111113', new Ask('111111115', '好吃又健康的美食', new Date(2018, 8, 24), 0, 0)),
            new UserAsk('13111111113', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018, 8, 24), 9, 2)),
            new UserAsk('13111111113', new Ask('111111112', '水水水水？', new Date(2018, 8, 24), 23, 3)),
            new UserAsk('13111111114', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11)),
            new UserAsk('13111111114', new Ask('111111113', '如何健康饮食？', new Date(2018, 8, 24), 2, 2)),
            new UserAsk('13111111114', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018, 8, 24), 90, 8)),
            new UserAsk('13111111114', new Ask('111111115', '好吃又健康的美食', new Date(2018, 8, 24), 0, 0)),
            new UserAsk('13111111114', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018, 8, 24), 9, 2)),
            new UserAsk('13111111114', new Ask('111111112', '水水水水？', new Date(2018, 8, 24), 23, 3)),
        ];
    }
    AskService.prototype.getUswerAsk = function (userMobile) {
        var userAsk = this.userAskArr.filter(function (ele) {
            return ele.mobile === userMobile;
        });
        var question = [];
        userAsk.forEach(function (ele, index) {
            question[index] = ele['question'];
        });
        return question;
    };
    AskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AskService);
    return AskService;
}());

var Ask = /** @class */ (function () {
    function Ask(questionId, questionTitle, questionTime, answerCount, followCount) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionTime = questionTime;
        this.answerCount = answerCount;
        this.followCount = followCount;
    }
    return Ask;
}());

var UserAsk = /** @class */ (function () {
    function UserAsk(mobile, question) {
        this.mobile = mobile;
        this.question = question;
    }
    return UserAsk;
}());



/***/ }),

/***/ "./src/app/shared/comment/comment.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/comment/comment.service.ts ***!
  \***************************************************/
/*! exports provided: CommentService, Comment, CommentDetail, CommentForAnswer, CommentForArticle, CommentForQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentDetail", function() { return CommentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForAnswer", function() { return CommentForAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForArticle", function() { return CommentForArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForQuestion", function() { return CommentForQuestion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    CommentService.prototype.getComments = function (data) {
        return this.http.get('/api/getComments', { params: data });
    };
    CommentService.prototype.addComment = function (data) {
        return this.http.post('/api/addComment', data);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());

var Comment = /** @class */ (function () {
    function Comment(commentId, commentContent) {
        this.commentId = commentId;
        this.commentContent = commentContent;
    }
    return Comment;
}());

var CommentDetail = /** @class */ (function () {
    function CommentDetail(commentDetail, commentAuthor) {
        this.commentDetail = commentDetail;
        this.commentAuthor = commentAuthor;
    }
    return CommentDetail;
}());

var CommentForAnswer = /** @class */ (function () {
    function CommentForAnswer(questionId, answerId, comment) {
        this.questionId = questionId;
        this.answerId = answerId;
        this.comment = comment;
    }
    return CommentForAnswer;
}());

var CommentForArticle = /** @class */ (function () {
    function CommentForArticle(articleId, comment) {
        this.articleId = articleId;
        this.comment = comment;
    }
    return CommentForArticle;
}());

var CommentForQuestion = /** @class */ (function () {
    function CommentForQuestion(questionId, comment) {
        this.questionId = questionId;
        this.comment = comment;
    }
    return CommentForQuestion;
}());



/***/ }),

/***/ "./src/app/shared/common/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/common/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.showTipsBox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keywordEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CommonService.prototype.identifyCode = function (mobile, code) {
        if (code === '666666') {
            return true;
        }
        else {
            return false;
        }
    };
    CommonService.prototype.addThanks = function (data) {
        return this.http.get('/api/addThanks', { params: data });
    };
    CommonService.prototype.search = function (keyword) {
        return this.http.get('/api/search', { params: keyword });
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/shared/get-question.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/get-question.service.ts ***!
  \************************************************/
/*! exports provided: GetQuestionService, Question, Answer, Comment, CommentForAnswer, UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQuestionService", function() { return GetQuestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForAnswer", function() { return CommentForAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetQuestionService = /** @class */ (function () {
    function GetQuestionService() {
        this.user1 = new UserInfo('test1', 'test1的介绍', 'http://placehold.it/30x30', '13111111111', '111111');
        this.comments = [new Comment('1', 'comment1', this.user1),
            new Comment('2', 'comment1', this.user1),
            new Comment('3', 'comment1', this.user1),
            new Comment('4', 'comment1', this.user1)];
        this.colletsForAnswer = [new UserInfo('我是第一个收藏的', 'ssssss', 'xxxxx', '13111111112', '111111'),
            new UserInfo('我是第er个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111113', '111111'),
            new UserInfo('我是第3个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111114', '111111'),
            new UserInfo('shiwo', 'sjjsjssjjsjs', 'www.baidu.com', '13111111115', '111111')
        ];
        this.str = '<p>啊啊啊啊啊啊啊啊啊啊啊撒</p><p><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1551879510&amp;di=f652cacc4ba3c4c76fd36ac8d028dffd&amp;src=http://hbimg.b0.upaiyun.com/01f13dd8fcbfcfd38bd13f92cca49a0bd8ec434b12cea-0yEhtq_fw658" style="max-width:100%;"><br></p>';
        this.ansterArr = [new Answer('1', '因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿1111饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿...饿over', this.user1, this.comments, 222, true),
            new Answer('2', this.str, this.user1, [], 221, false),
            new Answer('3', '因为为因为饿因为因为饿饿饿因2', this.user1, [], 223, false),
        ];
        this.questions = [
            new Question('11111111', '人为什么要吃饭1', '因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭', this.ansterArr, this.user1, this.comments),
            new Question('11111112', '人为什么要吃饭2', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new Question('11111113', '人为什么要吃饭3', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new Question('11111114', '人为什么要吃饭4', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new Question('11111115', '人为什么要吃饭5', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new Question('11111116', '人为什么要吃饭6', '因为要吃饭', this.ansterArr, this.user1, this.comments),
        ];
        this.commentForAnswer = new CommentForAnswer(this.comments, '1');
    }
    GetQuestionService.prototype.getQuestion = function (questionId) {
        return this.questions.filter(function (ele, index, self) {
            return ele.questionId === questionId;
        });
    };
    GetQuestionService.prototype.getcommentForAnswer = function (questionId, answeerId) {
        // for (let i = 0; i < this.comments.length; i++) {
        //   this.questions.filter((ele, index, self) => {
        //     return ele.questionId === questionId;
        //   })[0].answer.filter((ele, index, self) => {
        //     return ele.answerId === answeerId;
        //   })[0].answerComments.push(this.comments[i]);
        // };
        return this.questions.filter(function (ele, index, self) {
            return ele.questionId === questionId;
        })[0].answer.filter(function (ele, i, self) {
            return ele.answerId === answeerId;
        })[0].answerComments.slice(0, 3);
    };
    GetQuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GetQuestionService);
    return GetQuestionService;
}());

var Question = /** @class */ (function () {
    function Question(questionId, questionTitle, questionContent, answer, questionAuthor, questionComments) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.answer = answer;
        this.questionAuthor = questionAuthor;
        this.questionComments = questionComments;
    }
    return Question;
}());

var Answer = /** @class */ (function () {
    function Answer(answerId, answerContent, answerAuthor, answerComments, thanks, iscolleted) {
        this.answerId = answerId;
        this.answerContent = answerContent;
        this.answerAuthor = answerAuthor;
        this.answerComments = answerComments;
        this.thanks = thanks;
        this.iscolleted = iscolleted;
    }
    return Answer;
}());

var Comment = /** @class */ (function () {
    function Comment(commentId, commentContent, commentUser) {
        this.commentId = commentId;
        this.commentContent = commentContent;
        this.commentUser = commentUser;
    }
    return Comment;
}());

var CommentForAnswer = /** @class */ (function () {
    function CommentForAnswer(comment, answerID) {
        this.comment = comment;
        this.answerID = answerID;
    }
    return CommentForAnswer;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo(userName, userDescription, userportrait, mobile, password) {
        this.userName = userName;
        this.userDescription = userDescription;
        this.userportrait = userportrait;
        this.mobile = mobile;
        this.password = password;
    }
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/shared/http-interceptors/base-interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/http-interceptors/base-interceptor.ts ***!
  \**************************************************************/
/*! exports provided: BaseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInterceptor", function() { return BaseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local.storage */ "./src/app/shared/local.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*设置请求的基地址，方便替换*/
var baseurl = 'http://localhost:8080';
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor(ls) {
        this.ls = ls;
    }
    BaseInterceptor.prototype.intercept = function (req, next) {
        /*此处清除缓存304*/
        // if (req.method === 'GET') {
        //   req.url = req.url + '?t=' + (new Date()).getTime().toString();
        // }
        var newReq = req.clone({
            url: req.hadBaseurl ? "" + req.url : "" + baseurl + req.url,
        });
        // newReq.headers = newReq.headers.set('If-Modified-Since', '0');
        // newReq.headers = newReq.headers.set('Cache-Control', 'no-cache');
        /*此处设置额外的头部，token常用于登陆令牌*/
        var token;
        if (!$.isEmptyObject(this.ls.getDate('userInfo'))) {
            token = this.ls.getDate('userInfo').userrInfo;
        }
        if (!req.cancelToken) {
            /*token数据来源自己设置，我常用localStorage存取相关数据*/
            newReq.headers = newReq.headers.set('token', token);
        }
        // send cloned request with header to the next handler.
        return next.handle(newReq)
            .pipe(
        /*失败时重试2次，可自由设置*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), 
        /*捕获响应错误，可根据需要自行改写，我偷懒了，直接用的官方的*/
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseInterceptor.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    BaseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"]])
    ], BaseInterceptor);
    return BaseInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/http-interceptors/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/http-interceptors/index.ts ***!
  \***************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-interceptor */ "./src/app/shared/http-interceptors/base-interceptor.ts");


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _base_interceptor__WEBPACK_IMPORTED_MODULE_1__["BaseInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/shared/local.storage.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/local.storage.ts ***!
  \*****************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    LocalStorage.prototype.set = function (key, value) {
        this.localStorage[key] = value;
    };
    LocalStorage.prototype.get = function (key) {
        return this.localStorage[key] || false;
    };
    LocalStorage.prototype.saveDate = function (key, value) {
        this.localStorage[key] = JSON.stringify(value);
    };
    LocalStorage.prototype.saveDateSes = function (key, value) {
        this.sessionStorage[key] = JSON.stringify(value);
    };
    LocalStorage.prototype.getDate = function (key) {
        return JSON.parse(this.localStorage[key] || '{}');
    };
    LocalStorage.prototype.getDateSes = function (key) {
        return JSON.parse(this.sessionStorage[key] || '{}');
    };
    LocalStorage.prototype.removeDate = function (key) {
        this.localStorage.removeItem(key);
    };
    LocalStorage.prototype.removeDateSes = function (key) {
        this.sessionStorage.removeItem(key);
    };
    return LocalStorage;
}());



/***/ }),

/***/ "./src/app/shared/pipe/innerhtmlpipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipe/innerhtmlpipe.ts ***!
  \**********************************************/
/*! exports provided: HtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlPipe", function() { return HtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlPipe = /** @class */ (function () {
    function HtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    };
    HtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "html"
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], HtmlPipe);
    return HtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/searchkeyword.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipe/searchkeyword.pipe.ts ***!
  \***************************************************/
/*! exports provided: SearchkeywordPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchkeywordPipe", function() { return SearchkeywordPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchkeywordPipe = /** @class */ (function () {
    function SearchkeywordPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SearchkeywordPipe.prototype.transform = function (val, keyword) {
        var RegArr = [];
        for (var i = 0; i < keyword.length; i++) {
            var keywordElement = keyword[i];
            RegArr.push(keywordElement);
            if (RegArr.length = keyword.length) {
                RegArr = RegArr.filter(function (ele, index, self) {
                    return self.indexOf(ele) === index && ele !== ' ';
                });
            }
        }
        if (val) {
            var res = void 0;
            var rval = val;
            for (var i = 0; i < RegArr.length; i++) {
                var regArrElement = RegArr[i];
                var Reg = new RegExp(regArrElement, 'g');
                rval = rval.replace(Reg, "<em style=\"color: #ff2424;\">" + regArrElement + "</em>");
                if (i === RegArr.length - 1) {
                    res = rval;
                    return this.sanitizer.bypassSecurityTrustHtml(res);
                }
            }
        }
    };
    SearchkeywordPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keyword'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SearchkeywordPipe);
    return SearchkeywordPipe;
}());



/***/ }),

/***/ "./src/app/shared/question/question.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/question/question.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionService, Question, QuestionDetail, Recommend, Hot, Answer, Answerdetail, UserAnswer, AnswerDetailForQuestionDetail, AnswerDetailListForQuestionDetail, Comment, CommentForAnswer, CommentForQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetail", function() { return QuestionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recommend", function() { return Recommend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hot", function() { return Hot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answerdetail", function() { return Answerdetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAnswer", function() { return UserAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDetailForQuestionDetail", function() { return AnswerDetailForQuestionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerDetailListForQuestionDetail", function() { return AnswerDetailListForQuestionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForAnswer", function() { return CommentForAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentForQuestion", function() { return CommentForQuestion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = /** @class */ (function () {
    function QuestionService(userService, ls, http) {
        this.userService = userService;
        this.ls = ls;
        this.http = http;
    }
    QuestionService.prototype.getQuestionDetail = function (data) {
        return this.http.post('/api/getQuestionDetail', data);
    };
    // 获取热门
    QuestionService.prototype.getHotQuestion = function (data) {
        return this.http.get('/api/getHotQuestion', { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({ fromObject: data }) });
    };
    QuestionService.prototype.follow = function (data) {
        return this.http.get('/api/follow', { params: data });
    };
    QuestionService.prototype.addQuestion = function (data) {
        return this.http.post('/api/addQuestion', data);
    };
    QuestionService.prototype.getQuestionsForUser = function (user) {
        return this.http.get('/api/getQuestionForUser/' + user);
    };
    QuestionService.prototype.getFollowForUser = function (user) {
        return this.http.get('/api/getFollowForUser/' + user);
    };
    QuestionService.prototype.getWriteAnswerQuestionList = function () {
        return this.http.get('/api/getWriteAnswerQuestionList');
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());

var Question = /** @class */ (function () {
    function Question(questionId, questionTitle, questionContent) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
    }
    return Question;
}());

var QuestionDetail = /** @class */ (function () {
    function QuestionDetail(questionDetail, questionAuthor, follw) {
        this.questionDetail = questionDetail;
        this.questionAuthor = questionAuthor;
        this.follw = follw;
    }
    return QuestionDetail;
}());

var Recommend = /** @class */ (function () {
    function Recommend(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return Recommend;
}());

var Hot = /** @class */ (function () {
    function Hot(question, answer, hot) {
        this.question = question;
        this.answer = answer;
        this.hot = hot;
    }
    return Hot;
}());

var Answer = /** @class */ (function () {
    function Answer(answerId, answerContent) {
        this.answerId = answerId;
        this.answerContent = answerContent;
    }
    return Answer;
}());

var Answerdetail = /** @class */ (function () {
    function Answerdetail(questionId, answerDetail, answerAuthor, thanks, isColleted) {
        this.questionId = questionId;
        this.answerDetail = answerDetail;
        this.answerAuthor = answerAuthor;
        this.thanks = thanks;
        this.isColleted = isColleted;
    }
    return Answerdetail;
}());

var UserAnswer = /** @class */ (function () {
    function UserAnswer(mobile, answerDetail, questionDetail, thanks, isColleted) {
        this.mobile = mobile;
        this.answerDetail = answerDetail;
        this.questionDetail = questionDetail;
        this.thanks = thanks;
        this.isColleted = isColleted;
    }
    return UserAnswer;
}());

var AnswerDetailForQuestionDetail = /** @class */ (function () {
    function AnswerDetailForQuestionDetail(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return AnswerDetailForQuestionDetail;
}());

var AnswerDetailListForQuestionDetail = /** @class */ (function () {
    function AnswerDetailListForQuestionDetail(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return AnswerDetailListForQuestionDetail;
}());

var Comment = /** @class */ (function () {
    function Comment(commentId, commentContent, commentUser) {
        this.commentId = commentId;
        this.commentContent = commentContent;
        this.commentUser = commentUser;
    }
    return Comment;
}());

var CommentForAnswer = /** @class */ (function () {
    function CommentForAnswer(comment, answerID) {
        this.comment = comment;
        this.answerID = answerID;
    }
    return CommentForAnswer;
}());

var CommentForQuestion = /** @class */ (function () {
    function CommentForQuestion(comment, questionId) {
        this.comment = comment;
        this.questionId = questionId;
    }
    return CommentForQuestion;
}());



/***/ }),

/***/ "./src/app/shared/tool-js.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/tool-js.service.ts ***!
  \*******************************************/
/*! exports provided: ToolJsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolJsService", function() { return ToolJsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.storage */ "./src/app/shared/local.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolJsService = /** @class */ (function () {
    function ToolJsService(ls) {
        this.ls = ls;
    }
    ToolJsService.prototype.changCurrentTab = function (item) {
        var tabLinkArr = document.querySelectorAll('.tab-link');
        jquery__WEBPACK_IMPORTED_MODULE_1__(tabLinkArr).each(function (index, element) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(element).removeClass('is-active');
        });
        // console.log($('.' + pathName));
        jquery__WEBPACK_IMPORTED_MODULE_1__('.' + item).addClass('is-active');
    };
    ToolJsService.prototype.nextStep = function (option) {
        if (option.newWindow) {
            window.open(window.location.href.split('#')[0] + '#' + option.nextUrl);
        }
        else {
            window.location.href = window.location.href.split('#')[0] + '#' + option.nextUrl;
        }
        if (option.currentPage) {
            this.ls.saveDateSes('referrer', option.curentPage);
        }
        if (option.back) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_1__["isEmptyObject"](this.ls.getDateSes('referrer'))) {
                window.location.href = this.ls.getDateSes('referrer');
            }
            else {
                window.location.href = window.location.href.split('#')[0] + '#/';
            }
        }
    };
    ToolJsService.prototype.next = function (url) {
        window.open(window.location.href.split('#')[0] + '#' + url);
        // window.location.href = window.location.href.split('#')[0] + '#' + url;
    };
    ToolJsService.prototype.currentPage = function (url) {
        window.location.href = window.location.href.split('#')[0] + '#' + url;
    };
    ToolJsService.prototype.goBack = function () {
        window.history.go(-1);
        console.log(window.location.href);
        // window.location.reload();
    };
    ToolJsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], ToolJsService);
    return ToolJsService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-question.service */ "./src/app/shared/get-question.service.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.storage */ "./src/app/shared/local.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(ls) {
        this.ls = ls;
        this.user1 = new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]('test1', 'test1的介绍', 'http://placehold.it/30x30', '13111111111', '111111');
        this.comments = [new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Comment"]('1', 'comment1', this.user1),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Comment"]('2', 'comment1', this.user1),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Comment"]('3', 'comment1', this.user1),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Comment"]('4', 'comment1', this.user1)];
        this.colletsForAnswer = [new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]('我是第一个收藏的', 'ssssss', 'xxxxx', '13111111112', '111111'),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]('我是第er个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111113', '111111'),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]('我是第3个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111114', '111111'),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]('shiwo', 'sjjsjssjjsjs', 'www.baidu.com', '13111111115', '111111')
        ];
        this.str = '<p>啊啊啊啊啊啊啊啊啊啊啊撒</p><p><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1551879510&amp;di=f652cacc4ba3c4c76fd36ac8d028dffd&amp;src=http://hbimg.b0.upaiyun.com/01f13dd8fcbfcfd38bd13f92cca49a0bd8ec434b12cea-0yEhtq_fw658" style="max-width:100%;"><br></p>';
        this.ansterArr = [new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Answer"]('1', '因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿1111饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿...饿over', this.user1, this.comments, 222, true),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Answer"]('2', this.str, this.user1, [], 221, false),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Answer"]('3', '因为为因为饿因为因为饿饿饿因2', this.user1, [], 223, false),
        ];
        this.questions = [
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111111', '人为什么要吃饭1', '因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭', this.ansterArr, this.user1, this.comments),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111112', '人为什么要吃饭2', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111113', '人为什么要吃饭3', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111114', '人为什么要吃饭4', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111115', '人为什么要吃饭5', '因为要吃饭', this.ansterArr, this.user1, this.comments),
            new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["Question"]('11111116', '人为什么要吃饭6', '因为要吃饭', this.ansterArr, this.user1, this.comments),
        ];
        this.commentForAnswer = new _get_question_service__WEBPACK_IMPORTED_MODULE_1__["CommentForAnswer"](this.comments, '1');
    }
    UserService.prototype.getUser = function () {
        var userArr = [this.user1];
        return userArr;
    };
    UserService.prototype.getUserForAnswer = function (userInfo) {
        console.log(this.questions);
        return this.questions;
    };
    UserService.prototype.loginLdentify = function (userInfo) {
        var user = this.getUser();
        var test1 = user.find(function (ele) { return (ele.mobile === userInfo.mobile); });
        if (test1) {
            var test2 = test1.password === userInfo.password;
            if (test2) {
                return { login: true, userInfo: test1, massage: '登录成功' };
            }
            else {
                return { login: false, userInfo: {}, massage: '密码错误' };
            }
        }
        else {
            return { login: false, userInfo: {}, massage: '用户不存在' };
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
    };
    UserService.prototype.getUserInfoShow = function () {
        return;
    };
    UserService.prototype.getCurrentUserInfoShow = function () {
        return this.ls.getDate('userInfo');
    };
    UserService.prototype.opentLogin = function () {
        window.location.href = window.location.origin + '/login-register';
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/user/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/user/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService, UserCollect, UserInfoShow, UserInfoLogin, UserInfoRegister, UserInfo, UserAnswerDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCollect", function() { return UserCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoShow", function() { return UserInfoShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoLogin", function() { return UserInfoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoRegister", function() { return UserInfoRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAnswerDetail", function() { return UserAnswerDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(ls, http) {
        this.ls = ls;
        this.http = http;
    }
    UserService.prototype.getUserCollet = function (mobile) {
        return this.http.get('/api/collect/' + mobile + '?t=' + (new Date()).getTime().toString());
    };
    UserService.prototype.getUserInfo = function (mobile) {
        return this.http.get('/api/getUserInfo/' + mobile);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.ls.getDate('userInfo').userInfo;
    };
    UserService.prototype.getLoginIdentify = function (userInfo) {
        return this.http.post('/api/loginIdentify', userInfo);
    };
    UserService.prototype.upDateUserPicture = function (formData, user) {
        return this.http.post('/api/upDateUserPicture', formData, { params: user });
    };
    UserService.prototype.upDateUserInfo = function (date) {
        return this.http.post('/api/upDateUserInfo', date);
    };
    UserService.prototype.getUserActive = function (user) {
        return this.http.get('/api/getUserActive/' + user + '?t=' + (new Date()).getTime().toString());
    };
    UserService.prototype.getRegisterIdentify = function (user) {
        return this.http.post('/api/register', new UserInfoRegister(user.mobile, user.userName, user.passwordGroup.password));
    };
    UserService.prototype.opentLogin = function () {
        window.location.href = window.location.href.split('/#')[0] + '#' + '/login-register';
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());

var UserCollect = /** @class */ (function () {
    function UserCollect(mobile, type, content) {
        this.mobile = mobile;
        this.type = type;
        this.content = content;
    }
    return UserCollect;
}());

var UserInfoShow = /** @class */ (function () {
    function UserInfoShow(mobile, userName, userDescription, userPicture) {
        this.mobile = mobile;
        this.userName = userName;
        this.userDescription = userDescription;
        this.userPicture = userPicture;
    }
    return UserInfoShow;
}());

var UserInfoLogin = /** @class */ (function () {
    function UserInfoLogin(mobile, password) {
        this.mobile = mobile;
        this.password = password;
    }
    return UserInfoLogin;
}());

var UserInfoRegister = /** @class */ (function () {
    function UserInfoRegister(mobile, userName, password) {
        this.mobile = mobile;
        this.userName = userName;
        this.password = password;
    }
    return UserInfoRegister;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo(mobile, userName, password, userDescription, userPicture) {
        this.mobile = mobile;
        this.userName = userName;
        this.password = password;
        this.userDescription = userDescription;
        this.userPicture = userPicture;
    }
    return UserInfo;
}());

var UserAnswerDetail = /** @class */ (function () {
    function UserAnswerDetail(mobile, answerId) {
        this.mobile = mobile;
        this.answerId = answerId;
    }
    return UserAnswerDetail;
}());



/***/ }),

/***/ "./src/app/user/actives/actives.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/actives/actives.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"active-box\" >\n  <div class=\"user-active\">{{isMe?'我的动态':'他的动态'}}</div>\n  <div class=\"item-box\" *ngIf=\"actives\">\n    <div class=\"active-item\" *ngFor=\"let active of actives ; let i = index\">\n      <div class=\"answer-box\" *ngIf=\"active.type == 'answer'\">\n        <app-answer [(userAnswerDetail)]=\"actives[i]\" [isActive]=\"true\" ></app-answer>\n      </div>\n      <div class=\"article-box\" *ngIf=\"active.type == 'article'\">\n        <app-article [(article)]=\"actives[i]\" [isActive]=\"true\"></app-article>\n      </div>\n      <div class=\"ask-box\" *ngIf=\"active.type == 'question'\">\n        <app-ask [(question)]=\"actives[i]\"></app-ask>\n      </div>\n      <div class=\"follow-box\" *ngIf=\"active.type == 'follow'\">\n        <app-ask [(question)]=\"actives[i]\"></app-ask>\n      </div>\n    </div>\n  </div>\n  <div class=\"no-content\" *ngIf=\"!actives\"><img src=\"assets/img/no-content.png\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/actives/actives.component.less":
/*!*****************************************************!*\
  !*** ./src/app/user/actives/actives.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-box .user-active {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.active-box .article-item {\n  border-bottom: 8px solid rgba(200, 200, 200, 0.3);\n}\n.active-box .active-item {\n  border-top: 1px solid #b2b2b2;\n}\n"

/***/ }),

/***/ "./src/app/user/actives/actives.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/actives/actives.component.ts ***!
  \***************************************************/
/*! exports provided: ActivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivesComponent", function() { return ActivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivesComponent = /** @class */ (function () {
    function ActivesComponent(routeInfo, userService) {
        this.routeInfo = routeInfo;
        this.userService = userService;
        this.isMe = false;
    }
    ActivesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
        }
        this.userService.getUserActive(this.userMobile).subscribe(function (result) {
            if (result.code === 1) {
                _this.actives = result.data;
            }
            else {
            }
        });
    };
    ActivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actives',
            template: __webpack_require__(/*! ./actives.component.html */ "./src/app/user/actives/actives.component.html"),
            styles: [__webpack_require__(/*! ./actives.component.less */ "./src/app/user/actives/actives.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ActivesComponent);
    return ActivesComponent;
}());



/***/ }),

/***/ "./src/app/user/answers/answers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/answers/answers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-answer\">\n  <div class=\"user-ans\">{{ isMe ?'我的回答':'他的回答'}}</div>\n  <div class=\"answer-list\" *ngIf=\"userAnswerArr\">\n    <div class=\"item-box\" *ngFor=\"let answer of userAnswerArr ; let i = index \" >\n      <app-answer [(userAnswerDetail)]=\"userAnswerArr[i]\" ></app-answer>\n    </div>\n  </div>\n  <div class=\"no-content\" *ngIf=\"!userAnswerArr\"><img src=\"assets/img/no-content.png\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/answers/answers.component.less":
/*!*****************************************************!*\
  !*** ./src/app/user/answers/answers.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-ans {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.item-box {\n  border-top: 1px solid #b2b2b2;\n}\n"

/***/ }),

/***/ "./src/app/user/answers/answers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/answers/answers.component.ts ***!
  \***************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/answer/answer.service */ "./src/app/shared/answer/answer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswersComponent = /** @class */ (function () {
    function AnswersComponent(userService, routeInfo, answerService, questionService) {
        this.userService = userService;
        this.routeInfo = routeInfo;
        this.answerService = answerService;
        this.questionService = questionService;
        this.isMe = false;
    }
    AnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
        }
        this.answerService.getUserAnsawer(this.userMobile).subscribe(function (result) {
            if (result.code === 1 || result.code === 2) {
                _this.userAnswerArr = result.data;
            }
        });
    };
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/user/answers/answers.component.html"),
            styles: [__webpack_require__(/*! ./answers.component.less */ "./src/app/user/answers/answers.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_answer_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]])
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/user/articles/articles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/articles/articles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-article\" >\n  <div class=\"user-article\">{{isMe?'我的文章':'他的文章'}}</div>\n  <div *ngIf=\"articles\">\n    <div class=\"article-item\" *ngFor=\"let article of articles; let i = index\" >\n      <app-article [(article)]=\"articles[i]\"></app-article>\n    </div>\n  </div>\n  <div class=\"no-content\" *ngIf=\"!articles \"><img src=\"./assets/img/no-content.png\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/articles/articles.component.less":
/*!*******************************************************!*\
  !*** ./src/app/user/articles/articles.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-article .user-article {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.user-article .article-item {\n  border-bottom: 8px solid rgba(200, 200, 200, 0.3);\n}\n"

/***/ }),

/***/ "./src/app/user/articles/articles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/articles/articles.component.ts ***!
  \*****************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/article/article.service */ "./src/app/shared/article/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(commonService, userService, articleService, routeInfo) {
        this.commonService = commonService;
        this.userService = userService;
        this.articleService = articleService;
        this.routeInfo = routeInfo;
        this.isMe = false;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
        }
        this.articleService.getUserArticles(this.userMobile).subscribe(function (result) {
            if (result.code === 1 || result.code === 2) {
                _this.articles = result.data;
            }
            else if (result.code === 0) {
                _this.commonService.showTipsBox.emit({
                    message: '发表失败',
                    type: '',
                    id: '',
                    isTips: true,
                });
            }
        });
        //   this.articleId = this.articles[0].articleDetail.articleId
        //   this.articleService.getArticles(this.articleId).subscribe(
        //     article => this.test = article
        //   );
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/user/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.less */ "./src/app/user/articles/articles.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/user/asks/asks.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/asks/asks.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ask box\" >\n  <div class=\"user-ask\">{{isMe?'我的提问':'他的提问'}}</div>\n  <div class=\"ask-box\" *ngIf=\"questions\">\n    <div class=\"list-item\" *ngFor=\"let question of questions; let i = index\">\n      <app-ask [(question)]=\"questions[i]\"></app-ask>\n    </div>\n  </div>\n  <div class=\"no-content\" *ngIf=\"!questions\"><img src=\"./assets/img/no-content.png\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/asks/asks.component.less":
/*!***********************************************!*\
  !*** ./src/app/user/asks/asks.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-ask {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.list-item {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n}\n"

/***/ }),

/***/ "./src/app/user/asks/asks.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/asks/asks.component.ts ***!
  \*********************************************/
/*! exports provided: AsksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsksComponent", function() { return AsksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_ask_ask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ask/ask.service */ "./src/app/shared/ask/ask.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AsksComponent = /** @class */ (function () {
    function AsksComponent(commonService, askService, userService, questionService, routeInfo) {
        this.commonService = commonService;
        this.askService = askService;
        this.userService = userService;
        this.questionService = questionService;
        this.routeInfo = routeInfo;
        this.isMe = false;
    }
    AsksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
        }
        this.questionService.getQuestionsForUser(this.userMobile).subscribe(function (result) {
            if (result.code === 1 || result.code === 2) {
                _this.questions = result.data;
            }
            else {
                _this.commonService.showTipsBox.emit({
                    isTips: true,
                    message: '加载失败',
                });
            }
        });
    };
    AsksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asks',
            template: __webpack_require__(/*! ./asks.component.html */ "./src/app/user/asks/asks.component.html"),
            styles: [__webpack_require__(/*! ./asks.component.less */ "./src/app/user/asks/asks.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _shared_ask_ask_service__WEBPACK_IMPORTED_MODULE_4__["AskService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AsksComponent);
    return AsksComponent;
}());



/***/ }),

/***/ "./src/app/user/collect/collect.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/collect/collect.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collect\" *ngFor=\"let collect of collects ; let i = index\">\n  <span>{{collect.type}}</span>\n  <div class=\"answer\" *ngIf=\" collect.type ==='answer'\">\n    <app-answer [userAnswerCollect]=\"collects[i].content\"></app-answer>\n  </div>\n  <div class=\"article\" *ngIf=\"collect.type === 'article'\">\n    <app-article [(article)]=\"collects[i].content.article\"></app-article>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/collect/collect.component.less":
/*!*****************************************************!*\
  !*** ./src/app/user/collect/collect.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/collect/collect.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/collect/collect.component.ts ***!
  \***************************************************/
/*! exports provided: CollectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectComponent", function() { return CollectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectComponent = /** @class */ (function () {
    function CollectComponent(userService, routeInfo) {
        this.userService = userService;
        this.routeInfo = routeInfo;
        this.collects = [];
    }
    CollectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        console.log(this.userMobile);
        this.userService.getUserCollet(this.userMobile).subscribe(function (collects) { return _this.collects = collects; });
        // this.currentUserInfo = this.userService.getUserForShow(this.userMobile);
    };
    CollectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collect',
            template: __webpack_require__(/*! ./collect.component.html */ "./src/app/user/collect/collect.component.html"),
            styles: [__webpack_require__(/*! ./collect.component.less */ "./src/app/user/collect/collect.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CollectComponent);
    return CollectComponent;
}());



/***/ }),

/***/ "./src/app/user/content/content.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/content/content.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{state}}\n</p>\n<div class=\"header\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/content/content.component.less":
/*!*****************************************************!*\
  !*** ./src/app/user/content/content.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/content/content.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/content/content.component.ts ***!
  \***************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContentComponent.prototype, "state", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/user/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.less */ "./src/app/user/content/content.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/user/editor-profile/editor-profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/editor-profile/editor-profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-mine\" *ngIf=\"user\">\r\n  <div class=\"profile\" >\r\n    <div class=\"edit-profile row\">\r\n      <div class=\" col-sm-2\">\r\n        <div class=\"user-picture\">\r\n          <img class=\"user-portrait\"  [src]=\"_d.bypassSecurityTrustUrl(user.userPicture? user.userPicture:'assets/img/noUserPicture.jpg')\" >\r\n          <div class=\"update-img \"><span class=\"glyphicon glyphicon-camera camera\"></span><input type=\"file\" (change)=\"fileChange($event)\" value=\"修改图片\" ></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"user-detail col-sm-10\">\r\n        <div class=\"Profile-contentHead\">\r\n          <h1 class=\"Profile-title\">\r\n            <div class=\"Fullname-editable\" (mouseenter)=\"enter($event)\" (mouseleave)=\"leave($event)\" *ngIf=\"!showNameChange\">\r\n              <span class=\"user-name\" >{{user.userName}}</span>\r\n              <button type=\"button\" class=\"change  button button-margin-right-24 \" (click)=\"showNameChange=true\">\r\n                <span class=\"glyphicon glyphicon-pencil icon-margin\"></span>\r\n                修改\r\n              </button>\r\n            </div>\r\n            <div class=\"name-change\" *ngIf=\"showNameChange\">\r\n                <input type=\"text\" class=\"form-control new-user-name\" maxlength=\"10\" [(ngModel)]=\"user.userName\">\r\n                <div class=\"btnGroup\">\r\n                  <button class=\"save\" (click)=\"savaChange(user.userName,'userName')\">保存</button>\r\n                  <button class=\"cancel\" (click)=\"showNameChange=false\">取消</button>\r\n                </div>\r\n            </div>\r\n          </h1>\r\n          <div class=\"go-profile pull-right\">\r\n            <a type=\"button\" class=\" Button Button--plain\" [routerLink]=\"['/profile',user.mobile,'actives']\">返回我的主页</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"ProfileEdit-fields\">\r\n          <div class=\"Field\">\r\n            <h3 class=\"Field-label\">性别</h3>\r\n            <div class=\"Field-content\"  >\r\n              <div (mouseenter)=\"enter($event)\" (mouseleave)=\"leave($event)\"  *ngIf=\"!showSexChange\">\r\n                <span class=\"Field-text\" >{{user.sex}}</span>\r\n                <button type=\"button\" class=\"change button button-margin-right-24 \"  (click)=\"showSexChange= true\">\r\n                  <span class=\"glyphicon glyphicon-pencil icon-margin\"></span>\r\n                  修改\r\n                </button>\r\n              </div>\r\n              <div class=\"sex-change\" *ngIf=\"showSexChange\">\r\n                <input type=\"radio\" class=\"sex\" name=\"sex\" [(ngModel)]=\"user.sex\" value=\"男\"> <label class=\"Field-text\">男</label>\r\n                <input type=\"radio\" class=\"sex\" name=\"sex\" [(ngModel)]=\"user.sex\" value=\"女\"> <label  class=\"Field-text\">女</label>\r\n                <div class=\"btnGroup\">\r\n                  <button class=\"save\" (click)=\"savaChange(user.sex,'sex')\">保存</button>\r\n                  <button class=\"cancel\"  (click)=\"showSexChange= false\">取消</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"Field\">\r\n            <h3 class=\"Field-label\">一句话介绍</h3>\r\n            <div class=\"Field-content\"  >\r\n              <div *ngIf=\"!showDescriptionChange\" (mouseenter)=\"enter($event)\" (mouseleave)=\"leave($event)\">\r\n                <span class=\"Field-text\" >{{user.userDescription? user.userDescription : '暂无'}}</span>\r\n                <button type=\"button\" class=\"change button button-margin-right-24 \" (click)=\"showDescriptionChange= true\">\r\n                  <span class=\"glyphicon glyphicon-pencil icon-margin\"></span>\r\n                  修改\r\n                </button>\r\n              </div>\r\n              <div class=\"description-change\" *ngIf=\"showDescriptionChange\">\r\n                <input class=\"description form-control\" type=\"text\" maxlength=\"20\" [(ngModel)]=\"user.userDescription\">\r\n                <div class=\"btnGroup\">\r\n                  <button class=\"save\" (click)=\"savaChange(user.userDescription,'description')\">保存</button>\r\n                  <button class=\"cancel\" (click)=\"showDescriptionChange= false\">取消</button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"Field\">\r\n            <h3 class=\"Field-label\">个人简介</h3>\r\n            <div class=\"Field-content\">\r\n              <div (mouseenter)=\"enter($event)\" (mouseleave)=\"leave($event)\" *ngIf=\"!showIntroductionChange\">\r\n                <span class=\"Field-text\" >{{user.introduction?user.introduction:'暂无'}}</span>\r\n                <button type=\"button\" class=\"change button button-margin-right-24 \" (click)=\"showIntroductionChange=true\">\r\n                  <span class=\"glyphicon glyphicon-pencil icon-margin\"></span>\r\n                  修改\r\n                </button>\r\n              </div>\r\n              <div class=\"introduction-change\" *ngIf=\"showIntroductionChange\">\r\n                <textarea class=\"introduction form-control\" type=\"text\" [(ngModel)]=\"user.introduction\"></textarea>\r\n                <div class=\"btnGroup\">\r\n                  <button class=\"save\" (click)=\"savaChange(user.introduction,'introduction')\">保存</button>\r\n                  <button class=\"cancel\" (click)=\"showIntroductionChange=false\">取消</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/editor-profile/editor-profile.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/user/editor-profile/editor-profile.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  min-height: 100%;\n  overflow: hidden;\n  background-color: white;\n  padding: 24px;\n}\n.edit-profile .user-picture {\n  height: 100px;\n  width: 100px;\n  position: relative;\n}\n.edit-profile .user-picture .user-portrait {\n  height: 100px;\n  width: 100px;\n}\n.edit-profile .user-picture:hover .update-img {\n  opacity: 0.6;\n}\n.edit-profile .user-picture .update-img {\n  position: absolute;\n  height: 50px;\n  width: 50px;\n  left: 50%;\n  top: 50%;\n  z-index: 10000;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 0.3s;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n}\n.edit-profile .user-picture .update-img .camera {\n  height: 50px;\n  width: 50px;\n  font-size: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #c4bec7;\n}\n.edit-profile .user-picture .update-img input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 50px;\n  width: 50px;\n  border: none;\n  opacity: 0;\n}\n.edit-profile .Profile-contentHead {\n  position: relative;\n}\n.edit-profile .Profile-contentHead .go-profile {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n}\n.edit-profile .name-change,\n.edit-profile .sex-change,\n.edit-profile .description-change,\n.edit-profile .introduction-change {\n  height: 40px;\n  width: 70%;\n}\n.edit-profile .name-change .form-control,\n.edit-profile .sex-change .form-control,\n.edit-profile .description-change .form-control,\n.edit-profile .introduction-change .form-control {\n  height: 40px;\n}\n.edit-profile .sex-change .sex {\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n}\n.edit-profile .sex-change .Field-text {\n  margin-right: 12px;\n  height: 16px;\n  min-width: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  font-weight: 400;\n}\n.edit-profile .name-change {\n  height: 80px;\n}\n.edit-profile .name-change .new-user-name {\n  font-size: 36px;\n  font-weight: 500;\n}\n.edit-profile .name-change .form-control {\n  height: 60px;\n}\n.edit-profile .user-name {\n  display: inline-block;\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.edit-profile .change {\n  display: none;\n  height: 30px;\n  width: 60px;\n  font-size: 14px;\n  position: absolute;\n  margin-left: 16px;\n  line-height: inherit;\n  transition: opacity 100ms;\n  color: #175199;\n}\n.edit-profile .Field {\n  padding: 30px 0;\n  border-bottom: 1px solid #EBEBEB;\n}\n.edit-profile .Field .Field-label {\n  position: absolute;\n  font-size: 15px;\n  font-weight: 600;\n  font-synthesis: style;\n  height: 40px;\n  line-height: 40px;\n  color: #444444;\n  margin: 0;\n}\n.edit-profile .Field .Field-content {\n  padding: 0 64px 0 140px;\n  height: 40px;\n  line-height: 40px;\n}\n.edit-profile .form {\n  display: block;\n  margin-top: 0em;\n}\n.btnGroup {\n  height: 50px;\n  margin-bottom: 24px;\n}\n.btnGroup .save,\n.btnGroup .cancel {\n  height: 30px;\n  width: 60px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  margin-right: 24px;\n  border: none;\n}\n.btnGroup .save {\n  background-color: #0084FF;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/user/editor-profile/editor-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/editor-profile/editor-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorProfileComponent", function() { return EditorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditorProfileComponent = /** @class */ (function () {
    function EditorProfileComponent(toolJsService, router, routeInfo, userService, fb, _d, ls) {
        this.toolJsService = toolJsService;
        this.router = router;
        this.routeInfo = routeInfo;
        this.userService = userService;
        this.fb = fb;
        this._d = _d;
        this.ls = ls;
        this.showNameChange = false;
        this.showSexChange = false;
        this.showDescriptionChange = false;
        this.showIntroductionChange = false;
    }
    EditorProfileComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getCurrentUser();
    };
    EditorProfileComponent.prototype.fileChange = function (e) {
        var _this = this;
        var file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
        if (file) {
            var formData = new FormData();
            formData.append("userfile", file);
            this.userService.upDateUserPicture(formData, this.user).subscribe(function (result) {
                if (result.code === 1) {
                    _this.user.userPicture = result.uploadPath;
                    _this.ls.saveDate('userInfo', { login: true, userInfo: _this.user, message: '登录成功' });
                    _this.userPicture = result.uploadPath; // 获取上传的图片临时路径;
                    _this.user = _this.ls.getDate('userInfo').userInfo;
                    console.log(_this.user);
                }
            });
        }
    };
    EditorProfileComponent.prototype.enter = function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_6__(event.currentTarget).children('.change').show();
    };
    EditorProfileComponent.prototype.leave = function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_6__(event.currentTarget).children('.change').hide();
    };
    EditorProfileComponent.prototype.savaChange = function (value, type) {
        var _this = this;
        if (type === 'userName') {
            this.userService.upDateUserInfo({ user: this.user, value: value, type: type }).subscribe(function (result) {
                if (result.code === 1) {
                    _this.user.userName = value;
                    _this.ls.saveDate('userInfo', { login: true, userInfo: _this.user, message: '登录成功' });
                }
            });
            this.showNameChange = false;
        }
        if (type === 'sex') {
            this.userService.upDateUserInfo({ user: this.user, value: value, type: type }).subscribe(function (result) {
                if (result.code === 1) {
                    _this.user.sex = value;
                    _this.ls.saveDate('userInfo', { login: true, userInfo: _this.user, message: '登录成功' });
                }
            });
            this.showSexChange = false;
        }
        if (type === 'description') {
            this.userService.upDateUserInfo({ user: this.user, value: value, type: type }).subscribe(function (result) {
                if (result.code === 1) {
                    _this.user.userDescription = value;
                    _this.ls.saveDate('userInfo', { login: true, userInfo: _this.user, message: '登录成功' });
                }
            });
            this.showDescriptionChange = false;
        }
        if (type === 'introduction') {
            this.userService.upDateUserInfo({ user: this.user, value: value, type: type }).subscribe(function (result) {
                if (result.code === 1) {
                    _this.user.introduction = value;
                    _this.ls.saveDate('userInfo', { login: true, userInfo: _this.user, message: '登录成功' });
                }
            });
            this.showIntroductionChange = false;
        }
    };
    EditorProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-profile',
            template: __webpack_require__(/*! ./editor-profile.component.html */ "./src/app/user/editor-profile/editor-profile.component.html"),
            styles: [__webpack_require__(/*! ./editor-profile.component.less */ "./src/app/user/editor-profile/editor-profile.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__["ToolJsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]])
    ], EditorProfileComponent);
    return EditorProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/follow/follow.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/follow/follow.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ask box\">\n  <div class=\"user-ask\">{{isMe ?'我的关注':'他的关注'}}</div>\n  <div class=\"ask-box\"  *ngIf=\"questions\">\n    <div class=\"list-item\" *ngFor=\"let question of questions; let i = index\">\n      <app-ask [(question)]=\"questions[i]\"></app-ask>\n    </div>\n  </div>\n  <div class=\"no-content\" *ngIf=\"!questions\"><img src=\"assets/img/no-content.png\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/follow/follow.component.less":
/*!***************************************************!*\
  !*** ./src/app/user/follow/follow.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-ask {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n  padding: 24px 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.list-item {\n  border-top: 1px solid rgba(200, 200, 200, 0.3);\n}\n"

/***/ }),

/***/ "./src/app/user/follow/follow.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/follow/follow.component.ts ***!
  \*************************************************/
/*! exports provided: FollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function() { return FollowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var _shared_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/common/common.service */ "./src/app/shared/common/common.service.ts");
/* harmony import */ var _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/question/question.service */ "./src/app/shared/question/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowComponent = /** @class */ (function () {
    function FollowComponent(commonService, userService, questionService, routeInfo) {
        this.commonService = commonService;
        this.userService = userService;
        this.questionService = questionService;
        this.routeInfo = routeInfo;
        this.isMe = false;
    }
    FollowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeInfo.parent.params.subscribe(function (params) { return _this.userMobile = params['userMobile']; });
        if (!$.isEmptyObject(this.userService.getCurrentUser())) {
            this.isMe = this.userService.getCurrentUser().mobile === this.userMobile ? true : false;
        }
        this.questionService.getFollowForUser(this.userMobile).subscribe(function (result) {
            if (result.code === 1 || result.code === 2) {
                _this.questions = result.data;
            }
            else if (result.code === 0) {
                _this.commonService.showTipsBox.emit({
                    isTips: true,
                    message: '加载失败',
                });
            }
        });
    };
    FollowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-follow',
            template: __webpack_require__(/*! ./follow.component.html */ "./src/app/user/follow/follow.component.html"),
            styles: [__webpack_require__(/*! ./follow.component.less */ "./src/app/user/follow/follow.component.less")]
        }),
        __metadata("design:paramtypes", [_shared_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_question_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FollowComponent);
    return FollowComponent;
}());



/***/ }),

/***/ "./src/app/user/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\" *ngIf=\"user\" >\n    <div class=\"container-mine\">\n    <div class=\"user-info row\">\n      <div class=\"col-sm-2\" >\n        <a class=\"a-link a-user-portrait \" [routerLink]=\"['/profile',user.mobile,'actives']\" ><img class=\"user-portrait\" [src]=\"user.userPicture?user.userPicture:'assets/img/noUserPicture.jpg'\" alt=\"\"></a>\n      </div>\n      <div class=\"col-sm-10\" >\n        <a class=\"a-link a-user-name\" [routerLink]=\"['/profile',user.mobile,'actives']\"><span class=\"user-name\">{{user.userName}}</span></a>\n        <span class=\"user-description\">{{user.userDescription}}</span>\n        <div class=\"user-detail\" *ngIf=\"showAll\">\n          <div class=\"sex\"><span class=\"detail-item\">性别：</span> <span class=\"detail-item\">{{user.sex ? user.sex: '暂无'}}</span></div>\n          <div class=\"introduction\"><span class=\"detail-item\">个人简介：</span> <span class=\"detail-item\">{{user.introduction ? user.introduction: '暂无'}}</span></div>\n        </div>\n      </div>\n      <div class=\"all\" (click)=\"showAll =! showAll\"><span class=\"glyphicon margin-right-12\" [ngClass]=\"{'glyphicon-chevron-down':!showAll, 'glyphicon-chevron-up':showAll}\"></span>查看全部资料</div>\n      <a target=\"_blank\" class=\" editor-profile pull-right\" [routerLink]=\"['/editor-profile']\" *ngIf=\"showEditor\" >编辑个人资料</a>\n    </div>\n    <div class=\"profile-item col-sm-9\">\n      <div class=\"card-box\">\n        <app-tab-card [user]=\"user\" [item]=\"item\"></app-tab-card>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"right col-sm-3\">\n      <app-right-bar></app-right-bar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/profile/profile.component.less":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  overflow: hidden;\n  min-height: 100%;\n}\n.profile .user-info {\n  position: relative;\n  margin-bottom: 24px;\n  padding: 32px 32px;\n  background-color: white;\n  box-shadow: 0 0 2px rgba(200, 222, 199, 0.5);\n}\n.profile .user-info .user-detail {\n  width: 80%;\n  padding: 24px;\n}\n.profile .user-info .a-link {\n  display: inline-block;\n  color: #333333;\n}\n.profile .user-info .a-link:hover {\n  color: #333333;\n  text-decoration: none;\n}\n.profile .user-info .editor-profile,\n.profile .user-info .all {\n  display: inline-block;\n  height: 30px;\n  width: 120px;\n  line-height: 30px;\n  text-align: center;\n  position: absolute;\n  right: 12px;\n  bottom: 32px;\n  cursor: pointer;\n}\n.profile .user-info .editor-profile {\n  right: 32px;\n}\n.profile .user-info .user-detail {\n  margin-bottom: 12px;\n}\n.profile .user-info .user-detail .sex,\n.profile .user-info .user-detail .introduction {\n  padding: 12px;\n  font-size: 16px;\n}\n.profile .user-info .editor-profile {\n  border: 1px solid #0084FF;\n  color: #0084FF;\n}\n.profile .user-info .all {\n  width: 150px;\n  left: 20%;\n  font-size: 14px;\n}\n.profile .user-info .a-user-portrait {\n  height: 100px;\n  width: 100px;\n  margin-left: -15px;\n}\n.profile .user-info .user-portrait {\n  display: inline-block;\n  height: 100px;\n  width: 100px;\n  margin-bottom: 40px;\n}\n.profile .user-info .user-name,\n.profile .user-info .user-description {\n  margin-left: 12px;\n  font-size: 16px;\n}\n.profile .user-info .user-name {\n  font-size: 24px;\n}\n.profile .profile-item {\n  box-shadow: 0 0 2px #b2b2b2;\n  background-color: white;\n}\n.profile .top-tabCard {\n  height: 48px;\n}\n.profile .top-tabCard .tab-list .tab-item {\n  display: inline-block;\n  height: 48px;\n  padding: 0 16px;\n  line-height: 48px;\n}\n.profile .top-tabCard .tab-list .tab-item:first-child {\n  padding-left: 0;\n}\n.profile .top-tabCard .tab-list .tab-item .tab-link {\n  position: relative;\n  display: inline-block;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  color: black;\n}\n.profile .top-tabCard .tab-list .tab-item .tab-link:hover {\n  text-decoration: none;\n}\n.profile .top-tabCard .tab-list .tab-item .tab-link.is-active {\n  font-weight: 600;\n}\n.profile .top-tabCard .tab-list .tab-item .tab-link.is-active:after {\n  position: absolute;\n  right: 0;\n  bottom: -1px;\n  left: 0;\n  height: 3px;\n  background: #0084ff;\n  content: \"\";\n}\n"

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user/user.service */ "./src/app/shared/user/user.service.ts");
/* harmony import */ var rxjs_compat_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/filter */ "./node_modules/rxjs-compat/add/operator/filter.js");
/* harmony import */ var rxjs_compat_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/local.storage */ "./src/app/shared/local.storage.ts");
/* harmony import */ var _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tool-js.service */ "./src/app/shared/tool-js.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, routeInfo, toolJsService, userService, ls) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.toolJsService = toolJsService;
        this.userService = userService;
        this.ls = ls;
        this.showEditor = false;
        this.showAll = false;
        this.item = 'actives';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!jquery__WEBPACK_IMPORTED_MODULE_1__["isEmptyObject"](this.ls.getDate('userInfo'))) {
            this.currentUser = this.ls.getDate('userInfo').userInfo;
        }
        this.currentUserMobile = this.routeInfo.snapshot.params['userMobile'];
        this.init(this.currentUserMobile);
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .map(function () { return _this.routeInfo; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .subscribe(function (event) {
            _this.currentUserMobile = _this.routeInfo.snapshot.params['userMobile'];
            _this.init(_this.currentUserMobile);
        });
    };
    ProfileComponent.prototype.init = function (currentUserMobile) {
        var _this = this;
        var pathName = window.location.href;
        this.item = pathName.split('/')[pathName.split('/').length - 1];
        this.userService.getUserInfo(currentUserMobile).subscribe(function (result) {
            if (result.code === 1) {
                _this.user = result.user;
                _this.toolJsService.changCurrentTab(_this.item);
                _this.showEditor = _this.currentUser ? (_this.currentUser.mobile === _this.user.mobile ? true : false) : false;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.less */ "./src/app/user/profile/profile.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_tool_js_service__WEBPACK_IMPORTED_MODULE_7__["ToolJsService"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/validator/ValidatorScript.ts":
/*!**********************************************!*\
  !*** ./src/app/validator/ValidatorScript.ts ***!
  \**********************************************/
/*! exports provided: mobileVlidator, mobileAsyncVlidator, equalsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileVlidator", function() { return mobileVlidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileAsyncVlidator", function() { return mobileAsyncVlidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsValidator", function() { return equalsValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");

// import 'rxjs/add/observable/of';


// 手机号码校验
function mobileVlidator(control) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!control.value) {
        return null;
    }
    var valid = myreg.test(control.value);
    return valid ? null : { mobile: true };
}
// 手机号码异步校验
function mobileAsyncVlidator(control) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!control.value) {
        return null;
    }
    var valid = myreg.test(control.value);
    return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(valid ? null : { mobile: true }).delay(5000);
}
// 确认密码验证
function equalsValidator(group) {
    var password = group.get('password');
    var pConfirm = group.get('pConfirm');
    var valid = (password.value === pConfirm.value);
    return valid ? null : { equals: true };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myWeb\myWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map