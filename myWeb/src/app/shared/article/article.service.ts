import { Injectable } from '@angular/core';
import {UserInfoShow, UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor(private userService: UserService, private http: HttpClient) { }

  getUserArticles(userMobile): Observable<any> {
    return this.http.get<any>('/api/getUserArticles/' + userMobile );
  }
  getArticleDetail(articleId): Observable<any> {
    return this.http.get<any>('/api/getArticleDetail/' + articleId );
  }
  getHotArticles(data): Observable<any> {
    return  this.http.get<any>('/api/getHotArticles', { params: data});
  }
  getMoreHotArticle(data): Observable<any> {
    return  this.http.get<any>('/api/getMoreHotArticles', { params: data});
  }
  deleteArticle(data): Observable<any> {
    return this.http.get<any>('/api/deleteArticle', {params: data});
  }
  addArticle(data): Observable<any> {
    return this.http.post<any>('/api/addArticle', data);
  }
  uploadFile(data): Observable<any> {
    return this.http.post<any>('/api/uploadFile', data);
  }
}

export class Article {
  constructor(
    public articleId: string,
    public articleTitle: string,
    public articleContent: string
  ) {}
}
