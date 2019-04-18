// 导入MySQL模块
import {Question} from "../question/questionService";

const mysql = require('mysql');
const dbConfig = require('../dbConfig');
const answerSQL = require('./answersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool( dbConfig.mysql );
import {UserInfoShow, UserService} from "../user/userService";
import {Article} from "../article/articleService";

export class AnswerService {
    public answerId: string;
    public questionId: string;
    public answerContent: string;
    public thanks: number;
    public answertime: Date;
    public answerAuthor: UserInfoShow;
    public length = 5;
    constructor() {}
    init(answer){
        return new Answer(answer.answerId,answer.questionId,answer.articleContent,answer.thanks,answer.answerAuthor,answer.answertime)
    }
    getAllAnswers(callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryAll, function(err, result) {
                if(err){
                    callback({
                        code: 0,
                        message:'搜索成功',
                        err: err
                    })
                }
                if(result) {
                    if(result.length>0){
                        let answerArr = [];
                        result.forEach((ele,i,self)=>{
                            let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            let data = {
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            }
                            answerArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: answerArr
                                }
                                callback(answerArr)
                            }
                        })
                    } else {
                        // callback();
                        result = {
                            code: 1,
                            message:'搜索成功',
                            data: null
                        }
                        callback(result)
                    }


                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接

                connection.release();
            });
        })

    }
    getMoreRecommendAnswer(query,callback){
        const length = this.length;
        if(query.page){
            this.getAllAnswers(function (allArticles) {
                let result;
                if(allArticles){
                    if(allArticles.length > query.page*length -1){
                        const left = query.page*length-1
                        if(allArticles.length > query.page*length+length){
                            result = {
                                code:1,
                                message:'获取成功',
                                data: allArticles.slice(query.page * length-1, query.page * length+length)
                            }
                        }else {
                            result = {
                                code:1,
                                massage:'获取成功',
                                data: allArticles.slice(query.page * length-1, allArticles.length)
                            }
                        }
                    }else {
                        result = {
                            code:0,
                            message:'没有更多了',
                            data: null
                        }
                    }
                }else {
                    result = {
                        code:0,
                        message:'获取错误',
                        data: null
                    }
                }

                callback(result)
            })
        }
    }
    searchAnswer(keyword,callback){
        let str = keyword
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.search,[str],function (err,result) {
                if(result){
                    if(result.length>0){
                        let answerArr = [];
                        result.forEach((ele,i,self)=>{
                            let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            let data ={
                                answerId: ele.answerId,
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            }
                            answerArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: answerArr
                                }
                            }
                        })
                    } else {
                        result = {
                            code: 2,
                            message:'搜索成功',
                            data: null
                        }
                    }

                }
                if(result === undefined){
                    result = {
                        code: 0,
                        message:'搜索错误',
                        err: err
                    }
                }
                callback(result)
                connection.release()
            })
        })
    }
    getRecommendAnswer(query,callback){
        if(query.page){
            const length = this.length;
            this.getAllAnswers(function (allanswers) {
                if(!allanswers.code){
                    let result;
                    if(allanswers.length > query.page*length){
                        result = {
                            code:1,
                            massage:'获取成功',
                            data: allanswers.slice(0, query.page * length)
                        }
                    }else {
                        result = {
                            code: 1,
                            massage: '获取成功',
                            data: allanswers.slice(0, allanswers.length)
                        }
                    }

                    callback(result)
                } else {
                    callback(allanswers)
                }

            })
        }
    }
    getAnswerListByAuthor(mobile,callback){
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.queryAnswerByAuthor, [mobile], function (err, result) {
                if(result){
                    if(result.length>0){
                        let answerArr = [];
                        result.forEach((ele,i,self)=>{
                            let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            let data ={
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            }
                            answerArr.push(data)
                            if(answerArr.length === self.length ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: answerArr
                                }
                            }
                        })
                    } else if(result.length === 0){
                        result = {
                            code: 2,
                            message:'搜索成功',
                            data: null
                        }
                    }
                }
                if(result === undefined){
                    result = {
                        code:0,
                        message: '获取回答错误',
                        err: err
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            })
        })
    }
    getAnswerbyQuestion(queationId,callback){
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryAnswerByQuestionId,[queationId], function(err, result) {
                if(result) {
                    if(result.length>0){
                        let answerArr = [];
                        result.forEach((ele,i,self)=>{
                            let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                            let author ;
                            const userService = new UserService()
                            userService.getUserByMobile(ele.answerAuthor,function (user) {
                                author =user.user;
                                let data ={
                                    answer: answer,
                                    answerAuthor: author,
                                }
                                answerArr.push(data);
                                if(i === self.length-1 ){
                                    result = {
                                        code: 1,
                                        message:'搜索成功',
                                        data: answerArr
                                    }
                                    callback(result);
                                    connection.release();
                                }
                            })

                        })
                    } else if(result.length === 0){
                        result = {
                            code: 1 ,
                            message:'搜索成功',
                            data: null
                        }
                        callback(result);
                        connection.release();
                    }

                }
                if(err){
                    result={
                        code:0,
                        message:'失败',
                        err: err
                    }
                    callback(result);
                    connection.release();
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接

            });
        })
    }
    getNewAnswerByAuthor(author,callback){
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryNewAnswer,[author], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    let answerArr = [];
                    result.forEach((ele,i,self)=>{
                        let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                        let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                        let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                        let data ={
                            answerId: ele.answerId,
                            answer: answer,
                            answerAuthor: author,
                            question: question
                        }
                        answerArr.push(data)
                        if(i === self.length-1 ){
                            result = {
                                code: 1,
                                message:'搜索成功',
                                data: answerArr[0]
                            }
                        }
                    })
                }
                if(result===undefined){
                    result={
                        code:0,
                        message:'失败'
                    }
                }
                callback(result)
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        })
    }
    addAnswer(req,res){
        const answer = req.body;
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.insert,[answer.answerContent,answer.questionId,answer.answerAuthor,0,new Date()], function (err,result) {
                if(result){
                    const answerService = new AnswerService()
                    answerService.getNewAnswerByAuthor(answer.answerAuthor,function (data) {
                        if(data.code === 1){
                            result = {
                                code: 1,
                                message: '添加成功',
                                data: data.data
                            };
                            res.send(result);
                        }else {
                            result ={
                                code: 0,
                                message: '添加失败'
                            }
                            res.send(result);
                        }
                    })
                }
                if( err){
                    console.log(err)
                }
                // 以json形式，把操作结果返回给前台页面
                if( result === undefined){
                    result ={
                        code: 0,
                        message: '添加失败'
                    }
                    res.send(result);
                }
                // 释放连接
                connection.release();
            })

        })
    }
    addThanks(id,res){
        const answerId = id;
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.addThanks,[answerId],function (err,result) {
                if(result){
                    result={
                        code:1,
                        message:'更新成功',
                    }
                }
                if(result===undefined){
                    result={
                        code:0,
                        message:'更新错误',
                    }
                }
                res.json(result);
                connection.release()
            })
        })
    }
    deleteAnswer(req,res){
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.delete,[req.query.id], function (err,result) {
                if(result){
                    result = {
                        code: 1,
                        message: '删除成功',
                    };
                }
                // 以json形式，把操作结果返回给前台页面
                if( result === undefined){
                    result ={
                        code: 0,
                        message: '删除失败',
                        err:err
                    }
                }
                res.json(result);
                // 释放连接
                connection.release();
            })

        })
    }
    getHotAnswer(questionId,callback){
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryHotAnswer,[questionId], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    if(result.length >0){
                        let answerArr = [];
                        result.forEach((ele,i,self)=>{
                            let answer = new Answer(ele.answerId,ele.questionId,ele.answerContent,ele.thanks,ele.answerAuthor,ele.answertime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            // let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            let data ={
                                answer: answer,
                                answerAuthor: author,
                            }
                            answerArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: answerArr[0]
                                }
                            }
                        })
                    }else if(result.length == 0){
                        result = {
                            code: 1,
                            message:'搜索成功',
                            data: null
                        }
                    }

                }
                if(result===undefined){
                    result={
                        code:0,
                        message:'失败'
                    }
                }
                callback(result)
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        })
    }
    getAnswerCountByAuthor(author,callback){
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.queryCountByAuthor,[author],function (err,result) {
                if(err){
                    callback({
                        code:0,
                        message:'获取错误',
                        error: err
                    });
                    connection.release();
                }
                if(result){
                    if(result.length > 0){
                        result = {
                            code:1,
                            message:'获取成功',
                            data: result[0]
                        }
                        callback(result);
                        connection.release();
                    } else if(result.length === 0){
                        result = {
                            code:2,
                            message:'获取成功',
                            data: null
                        }
                        callback(result);
                        connection.release();
                    }
                }
            })
        })
    }
    getAnswerCountByQuestion(questionId,callback){
        pool.getConnection(function (err,connection) {
            connection.query(answerSQL.queryCountByQuestion,[questionId],function (err,result) {
                if(err){
                    callback({
                        code:0,
                        message:'获取错误',
                        error: err
                    });
                    connection.release();
                }
                if(result){
                    if(result.length > 0){
                        result = {
                            code:1,
                            message:'获取成功',
                            data: result[0]
                        }
                    } else if(result.length === 0){
                        result = {
                            code:2,
                            message:'获取成功',
                            data: null
                        }
                    }
                    callback(result);
                    connection.release();
                }

            })
        })
    }
}

export class Answer {
    constructor(
        public answerId: string,
        public questionId: string,
        public answerContent: string,
        public thanks: number,
        public answerAuthor: string,
        public answertime: Date,
    ) {}
}