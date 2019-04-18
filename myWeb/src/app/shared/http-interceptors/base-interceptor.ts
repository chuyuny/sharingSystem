import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {LocalStorage} from '../local.storage';

/*设置请求的基地址，方便替换*/
const baseurl = 'http://localhost:8080';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private ls: LocalStorage) {}

  intercept(req, next: HttpHandler) {
    /*此处清除缓存304*/
    // if (req.method === 'GET') {
    //   req.url = req.url + '?t=' + (new Date()).getTime().toString();
    // }
    let newReq = req.clone({
      url: req.hadBaseurl ? `${req.url}` : `${baseurl}${req.url}`,
    });
    // newReq.headers = newReq.headers.set('If-Modified-Since', '0');
    // newReq.headers = newReq.headers.set('Cache-Control', 'no-cache');
    /*此处设置额外的头部，token常用于登陆令牌*/
    let token;
     if (!$.isEmptyObject(this.ls.getDate('userInfo')) ) {
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
        retry(3),
        /*捕获响应错误，可根据需要自行改写，我偷懒了，直接用的官方的*/
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
