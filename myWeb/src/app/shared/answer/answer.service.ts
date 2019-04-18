import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }
  getRecommend(data): Observable<any> {
    return this.http.get<any>('/api/getRecommendAnswer' + '?t=' + (new Date()).getTime().toString(), { params: data});
  }
  getMoreRecommends(data): Observable<any> {
    return  this.http.get<any>('/api/getMoreRecommendAnswers' + '?t=' + (new Date()).getTime().toString(), { params: data});
  }
  getUserAnsawer(userMobile): Observable<any> {
    return this.http.get<any>('/api/getUserAnswers/' + userMobile + '?t=' + (new Date()).getTime().toString());
  }
  addAnswer(data): Observable<any> {
    return this.http.post<any>('/api/addAnswer', data)
  }
  getAnswerForQuestion(id): Observable<any>{
    return this.http.get<any> ('/api/getAnswerForQuestion')
  }
  deleteAnswer(data): Observable<any> {
    return this.http.get<any>('/api/deleteAnswer', {params: data});
  }
}
