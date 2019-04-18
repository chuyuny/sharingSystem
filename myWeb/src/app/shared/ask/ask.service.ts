import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskService {
  public userAskArr = [
    new UserAsk('13111111111', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11) ),
    new UserAsk('13111111111', new Ask('111111113', '怎样吃的好又吃的饱？',  new Date(2018, 8, 24), 2, 2)),
    new UserAsk('13111111111', new Ask('111111114', '好吃又健康的美食有哪些？', new Date(2018,8,24), 90, 8)),
    new UserAsk('13111111111', new Ask('111111115', '花菜的吃法有哪些' , new Date(2018,8,24), 0, 0)),
    new UserAsk('13111111111', new Ask('111111116', '水水水水 ', new Date(2018,8,24), 9, 2)),
    new UserAsk('13111111111', new Ask('111111112', '如何健康饮食？', new Date(2018,8,24), 23, 3 )),
    new UserAsk('13111111112', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11) ),
    new UserAsk('13111111112', new Ask('111111113', '如何健康饮食？',  new Date(2018, 8, 24), 2, 2)),
    new UserAsk('13111111112', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018,8,24), 90, 8)),
    new UserAsk('13111111112', new Ask('111111115', '好吃又健康的美食' , new Date(2018,8,24), 0, 0)),
    new UserAsk('13111111112', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018,8,24), 9, 2)),
    new UserAsk('13111111112', new Ask('111111112', '水水水水？', new Date(2018,8,24), 23, 3 )),
    new UserAsk('13111111113', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11) ),
    new UserAsk('13111111113', new Ask('111111113', '如何健康饮食？',  new Date(2018, 8, 24), 2, 2)),
    new UserAsk('13111111113', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018,8,24), 90, 8)),
    new UserAsk('13111111113', new Ask('111111115', '好吃又健康的美食' , new Date(2018,8,24), 0, 0)),
    new UserAsk('13111111113', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018,8,24), 9, 2)),
    new UserAsk('13111111113', new Ask('111111112', '水水水水？', new Date(2018,8,24), 23, 3 )),
    new UserAsk('13111111114', new Ask('11111111', '低碳水饮食到底该怎么吃？', new Date(2018, 3, 1), 11, 11) ),
    new UserAsk('13111111114', new Ask('111111113', '如何健康饮食？',  new Date(2018, 8, 24), 2, 2)),
    new UserAsk('13111111114', new Ask('111111114', '怎样吃的好又吃的饱？', new Date(2018,8,24), 90, 8)),
    new UserAsk('13111111114', new Ask('111111115', '好吃又健康的美食' , new Date(2018,8,24), 0, 0)),
    new UserAsk('13111111114', new Ask('111111116', '花菜的吃法有哪些 ', new Date(2018,8,24), 9, 2)),
    new UserAsk('13111111114', new Ask('111111112', '水水水水？', new Date(2018,8,24), 23, 3 )),
  ]

  constructor() { }
  getUswerAsk(userMobile){
   const userAsk =  this.userAskArr.filter((ele) =>{
      return ele.mobile === userMobile;
    })

    const question = [];
    userAsk.forEach((ele, index) => {
       question[index] = ele['question'];
    })
    return  question;
  }
}
export class Ask {
  constructor(
    public questionId: string,
    public questionTitle: string,
    public questionTime: Date,
    public answerCount: number,
    public followCount: number,

  ) {}
}
export class UserAsk {
  constructor(
    public mobile: string,
    public question: Ask
  ) {}
}

