import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';
import * as wangEditor from '../../../../node_modules/wangeditor/release/wangEditor.min.js';
import {Answer, Question, UserInfo} from '../../shared/get-question.service';
import {FormControl, Validators} from '@angular/forms';
import {QuestionService} from '../../shared/question/question.service';
import {LocalStorage} from '../../shared/local.storage';
import {UserService} from '../../shared/user/user.service';
import {ArticleService} from '../../shared/article/article.service';
import {ToolJsService} from '../../shared/tool-js.service';
import {AnswerService} from '../../shared/answer/answer.service';
import {CommonService} from '../../shared/common/common.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit, OnChanges {
  private editor: any;
  private data: any;
  private articleContent: any;
  public articleTitle = new FormControl('', [ Validators.minLength(3)]);
  @Input() isWriteAnswer: boolean;
  public answerComment: string = '';
  public isSubmit: boolean = false;
  public isShowWarning: boolean = false;
  @Output() private postData: EventEmitter<any> = new EventEmitter();
  @Input() questionId;
  @Input() answerArr;
  @Output() private answerArrChange: EventEmitter<Question> = new EventEmitter();
  constructor(private commonService: CommonService, private answerService: AnswerService, private toolJs: ToolJsService, private ls: LocalStorage, private articleService: ArticleService, private el: ElementRef, private renderer: Renderer2, private questionService: QuestionService, private userService: UserService) { }
  ngOnInit() {
    this.editor = new wangEditor('#div1', '#div2');
    this.setEditorConfig();
    this.editor.customConfig.menus = [
      'head',
      'bold',
      'italic',
      'underline',
      'fontSize',
      'strikeThrough',
      'justify',
      'emoticon',
      'link',
      'image',
      'undo',
      'redo'
    ]
    this.editor.create();


  //  监听articleTitle 的改变
    this.articleTitle.valueChanges.subscribe(data => {
    })
  }
  setEditorConfig () {
    this.editor.customConfig.uploadImgServer = '/api/uploadFile';
    this.editor.customConfig.customUploadImg =  (files, insert) => {
      // 对上传的图片进行处理，图片上传的方式
      const data = new FormData()
      data.append("userfile", files[0])
      this.articleService.uploadFile(data).subscribe(
        result => {
          if (result.code === 1) {
            const imgUrl = result.uploadPath;
            this.editor.cmd.do('insertHTML', '<img style="max-height: 800px; max-width: 100%; margin: 12px " src=" assets' +  imgUrl + '" alt=""><br>');
          }
        }
      )
    }
    this.editor.customConfig.zIndex = 100;
    this.editor.customConfig.onchange = this.editorContentChange;
  }
  editorContentChange = (html) => {
    if (html.length < 12) {
        this.isShowWarning = true;
    } else {
      this.isShowWarning = false;
      if (this.questionId ) {
        this.answerComment = html;
      } else {
        this.articleContent = html;
        this.isSubmit = true;
      }
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  submit(): any {
    this.articleService.addArticle({
      articleTitle: this.articleTitle.value,
      articleContent: this.articleContent.toString(),
      articleAuthor: this.userService.getCurrentUser().mobile,
    }).subscribe(
      result => {
        if (result.code === 1) {
          this.ls.saveDate('articleDetail', result.data);
          this.commonService.showTipsBox.emit({
            message: '发表成功',
            type: '',
            id: '',
            isTips: true,
            nextUrl: '/article-detail/' + result.data.article.articleId,
            currentPage: true
          })
          // this.toolJs.next('/article-detail/' + result.data.article.articleId);
        }
      }
    )
  }
  submitAnswer() {
    if (!this.isShowWarning && this.answerComment.length >= 1) {
      this.answerService.addAnswer({
        answerContent: this.answerComment,
        questionId: this.questionId,
        answerAuthor: this.ls.getDate('userInfo').userInfo.mobile
      }).subscribe(result => {
        if (result.code === 1 ) {
          if (this.answerArr === null) {
            this.answerArr = [];
          }
          this.answerArr.unshift(result.data);
          this.answerArrChange.emit(this.answerArr);
          this.commonService.showTipsBox.emit({
            message: '发表成功',
            type: '',
            id: '',
            isTips: true
          })
        }
      })
    } else {
      return;
    }
  }
}
