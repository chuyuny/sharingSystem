import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { OperationComponent } from './common/operation/operation.component';
import { EditorComponent } from './common/editor/editor.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionListComponent } from './question-list/question-list.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ContentComponent } from './user/content/content.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';
import { RecommendComponent } from './recommend/recommend.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ActivesComponent } from './user/actives/actives.component';
import { AsksComponent } from './user/asks/asks.component';
import { AnswersComponent } from './user/answers/answers.component';
import { ArticleComponent } from './common/article/article.component';
import {UserService} from './shared/user.service';
import {LocalStorage} from './shared/local.storage';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommentDetailComponent } from './common/comment-detail/comment-detail.component';
import { HtmlPipe} from './shared/pipe/innerhtmlpipe';
import { HotComponent } from './hot/hot.component';
import {HttpClientModule} from '@angular/common/http';
import { HotArticleComponent } from './hot-article/hot-article.component';
import { ArticlesComponent } from './user/articles/articles.component';
import { AskComponent } from './common/ask/ask.component';
import { AnswerComponent } from './common/answer/answer.component';
import {ArticleService} from './shared/article/article.service';
import {QuestionService} from './shared/question/question.service';
import {AskService} from './shared/ask/ask.service';
import {CommentService} from './shared/comment/comment.service';
import { EditorProfileComponent } from './user/editor-profile/editor-profile.component';
import { CollectComponent } from './user/collect/collect.component';
import { FollowComponent } from './user/follow/follow.component';
import { SetComponent } from './set/set.component';
import { SearchComponent } from './search/search.component';
import {httpInterceptorProviders} from './shared/http-interceptors';
import { RegisteOkComponent } from './registe-ok/registe-ok.component';
import { SearchkeywordPipe } from './shared/pipe/searchkeyword.pipe';
import { ConfirmBoxComponent } from './common/confirm-box/confirm-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabCardComponent } from './common/tab-card/tab-card.component';
import { QuestionType1Component } from './common/question-type1/question-type1.component';
import { FooterComponent } from './common/footer/footer.component';
import {AlterService} from './shared/alter/alter.service';
import {AnswerService} from './shared/answer/answer.service';
import {CommonService} from './shared/common/common.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


const routeConfig: Routes = [
  {path: '', component: HomeComponent, children: [
      { path: '', component : RecommendComponent },
      { path: 'hot', component : HotComponent },
      {path: 'hot-article', component: HotArticleComponent},
    ]},
  { path: 'home', component: HomeComponent},
  { path: 'question-detail/:questionId', component: QuestionDetailComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'question-list', component: QuestionListComponent},
  {path: 'article-detail/:articleId', component: ArticleDetailComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile/:userMobile', component: ProfileComponent, children: [
      {path: 'actives', component: ActivesComponent},
      {path: 'answers', component: AnswersComponent},
      {path: 'articles', component: ArticlesComponent},
      {path: 'asks', component: AsksComponent},
      {path: 'collect', component: CollectComponent},
      {path: 'follow', component: FollowComponent},
    ]},
  {path: 'editor-profile', component: EditorProfileComponent},
  {path: 'set', component: SetComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OperationComponent,
    EditorComponent,
    HomeComponent,
    RightBarComponent,
    QuestionListComponent,
    LoginRegisterComponent,
    ProfileComponent,
    ContentComponent,
    AnswerListComponent,
    AnswerDetailComponent,
    RecommendComponent,
    QuestionDetailComponent,
    ActivesComponent,
    AsksComponent,
    AnswersComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CommentDetailComponent,
    HtmlPipe,
    HotComponent,
    HotArticleComponent,
    ArticlesComponent,
    AskComponent,
    AnswerComponent,
    EditorProfileComponent,
    CollectComponent,
    FollowComponent,
    SetComponent,
    SearchComponent,
    RegisteOkComponent,
    SearchkeywordPipe,
    ConfirmBoxComponent,
    TabCardComponent,
    QuestionType1Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UserService,
    QuestionService,
    LocalStorage,
    ArticleService,
    AskService,
    CommentService,
    AlterService,
    AnswerService,
    CommonService,
    httpInterceptorProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
