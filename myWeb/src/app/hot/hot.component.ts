import { Component, OnInit } from '@angular/core';
import {GetQuestionService} from '../shared/get-question.service';
import {ActivatedRoute, Params} from '@angular/router';
import {QuestionService} from '../shared/question/question.service';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.less']
})
export class HotComponent implements OnInit {
  public questions;
  public hots;
  public userMobile;
  public imgReg = /<img.*?(?:>|\/>)/gi;
  public deleteHreg = /<\/?.+?\/?>/g;
  public pageNo = 2;
  public error;
  constructor(private getQuestionService: GetQuestionService, private routeInfo: ActivatedRoute, private questionService: QuestionService) { }
  ngOnInit() {
    // this.hots = this.questionService.getHot();
    this.questionService.getHotQuestion({
      pageNo: 1,
      pageSize: 2,
      type: 'hotQuestion'
    }).subscribe(
      result => {
        if (result.code === 1) {
          this.hots = result.data;
        }
      }
    )
    this.routeInfo.parent.params.subscribe((params: Params) => this.userMobile = params['userMobile']);

  }
  getMore(pageNo) {
    console.log(pageNo)
    this.questionService.getHotQuestion({
      pageNo: pageNo,
      pageSize: 2,
      type: 'hotQuestion'
    }).subscribe(
      result => {
        console.log(result)
        if (result.code === 1) {
          result.data.forEach((ele, i) => {
            this.hots.push(ele);
          })
        } else if ( result.code === 2) {
            this.error = result.message;
        }
      }
    )
    this.pageNo = this.pageNo + 1;
  }
}
