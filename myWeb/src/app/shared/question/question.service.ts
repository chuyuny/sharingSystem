import {EventEmitter, Injectable} from '@angular/core';
import {UserAnswerDetail, UserInfoShow} from '../user/user.service';
import {UserService} from '../user/user.service';
import {LocalStorage} from '../local.storage';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   constructor( private userService: UserService , private ls: LocalStorage , private http: HttpClient) { }
  getQuestionDetail(data): Observable<any> {
    return this.http.post('/api/getQuestionDetail' , data);
  }
  // 获取热门
  getHotQuestion(data): Observable<any> {
    return this.http.get<any>('/api/getHotQuestion', { params: new HttpParams( {fromObject: data})});
  }
  follow(data): Observable<any> {
     return this.http.get<any>('/api/follow', {params: data});
  }
  addQuestion(data): Observable<any> {
    return this.http.post<any>('/api/addQuestion', data);
  }
  getQuestionsForUser(user): Observable<any> {
     return this.http.get('/api/getQuestionForUser/' + user );
  }
  getFollowForUser(user): Observable<any> {
    return this.http.get('/api/getFollowForUser/' + user);
  }
  getWriteAnswerQuestionList(): Observable<any> {
     return this.http.get('/api/getWriteAnswerQuestionList');
  }
}


export class Question {
  constructor(
    public questionId: string,
    public questionTitle: string,
    public questionContent: string,
  ) {}
}


export class QuestionDetail {
  constructor(
  public questionDetail: Question,
  public questionAuthor: UserInfoShow,
  public follw: boolean
) {}
}

export class Recommend {
  constructor(
    public question: Question,
    public answer: Answerdetail
  ) {}
}
export class Hot {
  constructor(
    public question: Question,
    public answer: Answerdetail,
    public hot: number
  ) {}
}

export class Answer {
  constructor(
    public answerId: string,
    public answerContent: string,
  ) {}
}
export class Answerdetail {
  constructor(
    public questionId: string,
    public answerDetail: Answer,
    public answerAuthor: UserInfoShow,
    public thanks: number,
    public isColleted: boolean
  ) {}
}

export class UserAnswer {
  constructor(
    public mobile: string,
    public answerDetail: Answer,
    public questionDetail: Question,
    public thanks: number,
    public isColleted: boolean
  ) {}
}
export class AnswerDetailForQuestionDetail {
  constructor(
    public question: QuestionDetail,
    public answer: Answerdetail
  ) {}
}

export class AnswerDetailListForQuestionDetail {
  constructor(
    public question: QuestionDetail,
    public answer: Answerdetail[]
  ) {}
}

export class Comment {
  constructor(
    public commentId: string,
    public commentContent: string,
    public commentUser: UserInfoShow,
  ) {
  }
}
export class CommentForAnswer {
  constructor(
    public comment: Comment[],
    public answerID: string
  ) {
  }
}

export class CommentForQuestion {
  constructor(
    public comment: Comment[],
    public questionId: string
  ) {
  }
}
