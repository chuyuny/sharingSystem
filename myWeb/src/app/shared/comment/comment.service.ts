import { Injectable } from '@angular/core';
import {UserInfoShow, UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private userService: UserService, private http: HttpClient) { }
  getComments(data): Observable<any> {
    return this.http.get<any>('/api/getComments', {params: data});
  }
  addComment(data): Observable<any> {
    return this.http.post<any>('/api/addComment', data);
  }
}

export class Comment {
  constructor(
    public commentId: string,
    public commentContent: string,
  ) {}
}

export class CommentDetail {
  constructor(
    public commentDetail: Comment,
    public commentAuthor: UserInfoShow,
  ) {
  }
}
export class CommentForAnswer {
  constructor(
    public questionId: string,
    public answerId: string,
    public comment: CommentDetail,
  ) {
  }
}

export class CommentForArticle {
  constructor(
    public articleId: string,
    public comment: CommentDetail,
  ) {
  }
}
export class CommentForQuestion {
  constructor(
    public questionId: string,
    public comment: CommentDetail,
  ) {
  }
}
