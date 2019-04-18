import { Injectable } from '@angular/core';
import {element} from 'protractor';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {
  public user1: UserInfo = new UserInfo('test1', 'test1的介绍', 'http://placehold.it/30x30', '13111111111', '111111')
  public comments = [new Comment('1', 'comment1', this.user1),
    new Comment('2', 'comment1', this.user1),
    new Comment('3', 'comment1', this.user1),
    new Comment('4', 'comment1', this.user1)]
  public colletsForAnswer = [new UserInfo('我是第一个收藏的', 'ssssss', 'xxxxx', '13111111112', '111111'),
    new UserInfo('我是第er个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111113', '111111'),
    new UserInfo('我是第3个收藏的', 'ssssssaaasss', 'xxaaxxx', '13111111114', '111111'),
    new UserInfo('shiwo', 'sjjsjssjjsjs', 'www.baidu.com', '13111111115', '111111')
  ]
  public str = '<p>啊啊啊啊啊啊啊啊啊啊啊撒</p><p><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1551879510&amp;di=f652cacc4ba3c4c76fd36ac8d028dffd&amp;src=http://hbimg.b0.upaiyun.com/01f13dd8fcbfcfd38bd13f92cca49a0bd8ec434b12cea-0yEhtq_fw658" style="max-width:100%;"><br></p>';

  public ansterArr: Answer[] = [new Answer('1', '因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿1111饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为为因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿因为饿...饿over', this.user1, this.comments, 222, true),
    new Answer('2', this.str, this.user1, [], 221, false),
    new Answer('3', '因为为因为饿因为因为饿饿饿因2', this.user1, [], 223, false),
  ]
  public questions: Question[] = [
    new Question('11111111', '人为什么要吃饭1', '因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111112', '人为什么要吃饭2',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111113', '人为什么要吃饭3',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111114', '人为什么要吃饭4',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111115', '人为什么要吃饭5',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
    new Question('11111116', '人为什么要吃饭6',  '因为要吃饭', this.ansterArr, this.user1, this.comments),
  ]
  public commentForAnswer = new CommentForAnswer(this.comments, '1')
  constructor() { }
  getQuestion(questionId) {
    return this.questions.filter((ele, index, self) => {
      return ele.questionId === questionId;
    });
  }
  getcommentForAnswer(questionId, answeerId) {
    // for (let i = 0; i < this.comments.length; i++) {
    //   this.questions.filter((ele, index, self) => {
    //     return ele.questionId === questionId;
    //   })[0].answer.filter((ele, index, self) => {
    //     return ele.answerId === answeerId;
    //   })[0].answerComments.push(this.comments[i]);
    // };
    return this.questions.filter((ele, index, self) => {
      return ele.questionId === questionId;
    })[0].answer.filter((ele, i, self) => {
      return ele.answerId === answeerId;
    })[0].answerComments.slice(0, 3);
  }
}


export class Question {
  constructor(
    public questionId: string,
    public questionTitle: string,
    public questionContent: string,
    public answer: Answer[],
    public questionAuthor: UserInfo,
    public questionComments: Comment[],
  ) {}
}
export class Answer {
  constructor(
    public answerId: string,
    public answerContent: string,
    public answerAuthor: UserInfo,
    public answerComments: Comment[],
    public thanks: number,
    public iscolleted: boolean,
  ) {}
}
export class Comment {
  constructor(
    public commentId: string,
    public commentContent: string,
    public commentUser: UserInfo,
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
export class UserInfo {
  constructor(
    public userName: string,
    public userDescription: string,
    public userportrait: string,
    public mobile: string,
    public password: string,
  ) {}
}
