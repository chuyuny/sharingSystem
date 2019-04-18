import {EventEmitter, Injectable} from '@angular/core';
import {Comment} from '../get-question.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public showTipsBox: EventEmitter<any> = new EventEmitter();
  public searchEvent: EventEmitter<any> = new EventEmitter();
  public keywordEvent: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }
  identifyCode(mobile, code) {
    if (code === '666666') {
      return true;
    } else {
      return false;
    }
  }
  addThanks(data): Observable<any> {
    return this.http.get<any>('/api/addThanks', {params: data});
  }
  search(keyword): Observable<any> {
    return this.http.get<any>('/api/search', {params: keyword});
  }
}

