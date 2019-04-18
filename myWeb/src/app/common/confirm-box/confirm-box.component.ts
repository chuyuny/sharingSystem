import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleService} from '../../shared/article/article.service';
import {AnswerService} from '../../shared/answer/answer.service';
import {ToolJsService} from '../../shared/tool-js.service';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../../shared/common/common.service';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.less']
})
export class ConfirmBoxComponent implements OnInit {
  @Input() data;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  constructor(private commonService: CommonService, private routInfo: ActivatedRoute, private articleService: ArticleService, private answerService: AnswerService, private toolJs: ToolJsService) { }
  public url = window.location.href;
  public firstClick: boolean = true;
  ngOnInit() {
  }
  confirm() {
    if (this.data.isDelete) {
      if (this.data.isShowCancel) {
        if (this.data.type === 'answer') {
          console.log(this.data)
          this.answerService.deleteAnswer({id: this.data.id}).subscribe(
            result => {
              if (result.code === 1) {
                this.data.message = '删除成功';
                this.data.isShowCancel = false;
                this.firstClick = false;
              } else {
                this.data = {
                  isTips: true,
                  message: result.message
                }
              }
            }
          )
        }
        if (this.data.type === 'article') {
          this.articleService.deleteArticle({id: this.data.id}).subscribe(
            result => {
              if (result.code === 1) {
                this.data.message = '删除成功';
                this.data.isShowCancel = false;
                this.firstClick = false;
              }
            }
          )
        }
      } else {
        window.location.reload();
        this.data = undefined;
      }
    } else if (this.data.isTips) {
      if (this.data.nextUrl) {
        if (this.data.currentPage) {
         this.toolJs.currentPage(this.data.nextUrl);
        } else {
          this.toolJs.next(this.data.nextUrl);

        }
      }
      this.data = undefined;
    }

  }
  cancel() {
    this.data = undefined;
    this.dataChange.emit(this.data);
  }
}
