import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'keyword'
})

@Injectable()
export class SearchkeywordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(val: string, keyword: string): any {
    let RegArr = [];
    for (let i = 0; i < keyword.length; i++) {
      const keywordElement = keyword[i];
      RegArr.push(keywordElement);
      if (RegArr.length = keyword.length) {
        RegArr =  RegArr.filter((ele, index, self) => {
          return self.indexOf(ele) === index && ele !== ' ';
        })
      }
    }
    if (val) {
      let res;
      let rval = val;
      for (let i = 0; i < RegArr.length; i++) {
        const regArrElement = RegArr[i];
        const Reg = new RegExp(regArrElement, 'g');
        rval = rval.replace(Reg, `<em style="color: #ff2424;">${regArrElement}</em>`);
        if (i === RegArr.length - 1) {
          res = rval;
          return this.sanitizer.bypassSecurityTrustHtml(res);
        }
      }
    }
  }
}
