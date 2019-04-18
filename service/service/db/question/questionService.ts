import { AnswerService} from "../answer/answerService";
const mysql = require('mysql');
const dbConfig = require('../dbConfig');
const questionSQL = require('./questionsql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool( dbConfig.mysql );
import {UserInfoShow, UserService} from "../user/userService";
import {ArticleService} from "../article/articleService";
export class QuestionService {
    constructor() {}
    init(question){
       return new Question(question.questionId,question.questionTitle,question.questionContent,question.questionAuthor,question.questiontime)
    }
    getQuestionAndHotAnswerByQuestionId(question,callback){
        const questionId = question.questionId
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryByQuestionId,[questionId], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    let questionArr = [];
                    result.forEach((ele,i,self)=>{
                        const questionService = new QuestionService()
                        let questionDetail = questionService.init(ele);
                        const userService = new UserService()
                        let author = userService.init(ele)
                        const answerService = new AnswerService()
                        let data ={
                            question: questionDetail,
                            author: author,
                            hot: question.A + question.T
                        }
                        questionArr.push(data);
                        answerService.getHotAnswer(ele.questionId,function (answerArr) {
                            if(answerArr.code === 1){
                                questionArr[i]['hotAnswer']= answerArr.data;
                                if(i === self.length-1 ){
                                    result = {
                                        code: 1,
                                        message:'搜索成功',
                                        data: questionArr[0]
                                    }
                                    callback(result)
                                }
                            } else if(answerArr.code === 0){
                                result={
                                    code:0,
                                    message:'失败'
                                }
                                callback(result)
                            }
                        })
                    })
                }
                if(result===undefined){
                    result={
                        code:0,
                        message:'失败'
                    }
                    callback(result)
                }

                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        })
    }
    getIsFollowed(user,questionId,callback){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.queryIsFollowed, [user,questionId], function (err,result) {
                if(err){}
                if(result){
                    result = {
                        code: 1,
                        message: '成功',
                        data: result[0]
                    }
                }
                if(result === undefined){
                    result = {
                        code: 0,
                        message: '错误',
                        error:err
                    }
                }
                callback(result);
                connection.release();
            })
        })
    }
    getQuestionDetailByQuestionId(req,res){
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryByQuestionId,[req.body.questionId], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    if(result.length>0){
                        let questionArr = [];
                        result.forEach((ele,i,self)=>{
                            const questionService = new QuestionService()
                            let question = questionService.init(ele);
                            const userService = new UserService()
                            let author = userService.init(ele);
                            let data ={
                                question: question,
                                author: author,
                                isFollowed: 0
                            }
                            questionService.getIsFollowed(req.body.user,req.body.questionId,function (isFollowResult) {
                                if(isFollowResult.code === 1){
                                    data.isFollowed = isFollowResult.data.isFollowed;
                                    const answerService = new AnswerService();
                                    answerService.getAnswerCountByAuthor(ele.mobile,function (countResult) {
                                        if(countResult.code === 1){
                                            data.author['answerCount'] = countResult.data.userAnswerCount;
                                        }else if( countResult.code === 2){
                                            data.author['answerCount'] = 0;
                                        } else {
                                            result={
                                                code:0,
                                                message:'失败'
                                            }
                                            res.send(result);
                                            connection.release()
                                        }
                                        const articleService = new ArticleService()
                                        articleService.getArticleCountByAuthor(ele.mobile,function (countResult) {
                                            if(countResult.code === 1){
                                                data.author['articleCount'] = countResult.data.userArticleCount;
                                            }else if( countResult.code === 2){
                                                data.author['articleCount'] = 0;
                                            } else {
                                                result={
                                                    code:0,
                                                    message:'失败'
                                                }
                                                res.send(result);
                                                connection.release()
                                            }
                                            questionArr.push(data)
                                            if(i === self.length-1 ){
                                                const answerService = new AnswerService()
                                                answerService.getAnswerbyQuestion(req.body.questionId,function (answerArr) {
                                                    if(answerArr.code === 1){
                                                        questionArr[0]['answerArr']= answerArr.data
                                                        result = {
                                                            code: 1,
                                                            message:'搜索成功',
                                                            data: questionArr[0]
                                                        }
                                                    }
                                                    if(answerArr.code === 0){
                                                        result = answerArr
                                                    }
                                                    res.send(result);
                                                    connection.release();
                                                })

                                            }
                                        })

                                    })
                                } else {
                                    result = isFollowResult;
                                    res.send(result);
                                    connection.release();
                                }
                            })


                        })
                    }

                }
                if(result===undefined){
                    result={
                        code:0,
                        message:'失败'
                    }
                    res.send(result);
                    connection.release();
                }
            });
        })
    }
    getFollowForQuestion(questionId,callback){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.queryCountByQuestion,[questionId],function (err,result) {
                if(err){
                    callback({
                        code: 0,
                        message:'错误',
                        error: err
                    })
                }
                if(result){
                    if(result.length>0){
                        result = {
                            code: 1,
                            message:'成功',
                            data: result[0]
                        }
                    }else if(result.length === 0){
                        result = {
                            code: 2,
                            message:'成功',
                            data: []
                        }

                    }
                }
                callback(result);
                connection.release();
            })
        })
    }
    getHotQuestion(req,res){
       this.getHotQuestionId(req,function (result) {
            if(result.code === 1){
                let hotQuestionResult = [];
                let resultSearch;
                for (let i = 0; i < result.data.length; i++) {
                        const ele = result.data[i];
                        const questionService = new QuestionService();
                        questionService.getQuestionAndHotAnswerByQuestionId(ele,function (hotQuestionArr) {
                            if(hotQuestionArr.code === 1){
                                hotQuestionResult.push(hotQuestionArr.data)
                            } else {
                                resultSearch={
                                    code:0,
                                    message:'失败'
                                }
                            }
                            if( hotQuestionResult.length === result.data.length ){
                                if(resultSearch){
                                    res.json(resultSearch)
                                }else {
                                    result = {
                                        code:1,
                                        message:'成功',
                                        data: hotQuestionResult
                                    }
                                    res.json(result)
                                }
                            }
                        })
                    }
            }else {
                res.json(result)
            }
        })
    }
    getHotQuestionId(req,callback){
        let data = req.query;
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryHotQuestionId,[(Number(data.pageNo)-1)*Number(data.pageSize), Number(data.pageSize)], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result){
                    if(result.length > 0) {
                        result = {
                            code:1,
                            message:'成功',
                            data: result
                        }
                    }else if(result.length === 0) {
                        result = {
                            code: 2 ,
                            message:'没有更多了',
                            data: []
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
                // 释放连接
                connection.release();
            });
        })
    }
    getNewQuestionByAuthor(author,callback){
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryNewQuestion,[author], function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    if(result.length>0){
                        let questionArr = [];
                        result.forEach((ele,i,self)=>{
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            let data ={
                                question: question,
                                questionAuthor: author,
                                answerArr: null
                            }
                            questionArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: questionArr[0]
                                }
                            }
                        })
                    } else if(result.length === 0){
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
    addQuestion(req,res){
        const question = req.body;
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.insert,[question.question.questionTitle,question.question.questionContent,question.questionAuthor,new Date()], function (err,result) {
                if(result){
                    const questionService = new QuestionService()
                    questionService.getNewQuestionByAuthor(question.questionAuthor,function (data) {
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
    getQuestionsByAuthor(author,callback){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.queryQuestionByAuthor,[author],function (err,result) {
                if(err){
                    result ={
                        code: 0,
                        message:'错误',
                        error: err
                    }
                    callback(result);
                }
                if(result){
                    if(result.length > 0){
                        let questionArr = [];
                        for (let i = 0; i < result.length; i++) {
                            let ele  = result[i];
                            const questionService = new QuestionService()
                            let question = questionService.init(ele);
                            let data = {
                                question: question,
                                answerCount: 0
                            }
                            questionArr.push(data);
                            let answerService = new AnswerService();
                            let questionId = ele.questionId;
                            answerService.getAnswerCountByQuestion(questionId,function (countReesult) {
                                if(countReesult.code === 1 || countReesult.code === 2){
                                    if(countReesult.code === 1){
                                        questionArr[i]['answerCount'] = countReesult.data.questionAnswerCount;
                                    } else if( countReesult.code === 2){
                                        questionArr[i]['answerCount'] = 0
                                    }
                                    let questionService = new QuestionService()
                                    questionService.getFollowForQuestion(questionId,function (followCountResult) {
                                        if(followCountResult.code === 1 || followCountResult.code === 2 ){
                                            if(followCountResult.code === 1){
                                                questionArr[i]['followCount'] = followCountResult.data.followCount;
                                            } else if( followCountResult.code === 2){
                                                questionArr[i]['followCount'] = 0
                                            }
                                            if( i === result.length-1){
                                                result = {
                                                        code: 1,
                                                        message: '获取成功',
                                                        data: questionArr
                                                    }
                                                callback(result);
                                            }
                                        } else {
                                            callback(followCountResult);
                                        }
                                    })
                                } else {
                                    callback(countReesult);
                                }

                            })

                        }
                    }else {
                        result ={
                            code: 2,
                            message:'成功',
                            data: null
                        }
                        callback(result);
                    }
                }
                connection.release();
            })
        })
    }
    getFollowQuestionByQuestionId(questionId,callback){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.queryQuestionByQuestionId,[questionId], function (err,result) {
                if(result){
                    if(result.length>0){
                        const questionService = new QuestionService()
                        let question = questionService.init(result[0]);
                        let data = {
                            question: question,
                            answerCount: 0
                        };
                        let answerService = new AnswerService();
                        answerService.getAnswerCountByQuestion(questionId,function (countResult) {
                            let errResult;
                            if(countResult.code === 1 ||  countResult.code === 2){
                                if(countResult.code === 1){
                                    data['answerCount'] = countResult.data.questionAnswerCount;
                                } else if( countResult.code === 2){
                                    data['answerCount'] = 0
                                }
                                let questionService = new QuestionService()
                                questionService.getFollowForQuestion(questionId,function (followCountResult) {
                                    if(followCountResult.code === 1 ||  followCountResult.code === 2){
                                        if(followCountResult.code === 1){
                                            data['followCount'] = followCountResult.data.followCount;
                                        } else if( followCountResult.code === 2){
                                            data['followCount'] = 0
                                        }
                                        result = {
                                            code: 1,
                                            message: '获取成功',
                                            data: data
                                        }
                                        callback(result);
                                        connection.release();
                                    } else if( followCountResult.code === 0){
                                        errResult = countResult;
                                        callback(errResult);
                                        connection.release();
                                    }
                                })
                            }else {
                                errResult = countResult;
                                callback(errResult);
                                connection.release();
                            }

                        })
                    }else {
                        result = {
                            code: 2,
                            message: '获取成功',
                            data: null
                        };
                        callback(result);
                        connection.release();
                    }
                }
                if(result === undefined){
                    result ={
                        code: 0,
                        message:'错误',
                        error: err
                    }
                    callback(result);
                    connection.release();
                }
            })
        })

    }
    getWriteAnswerQuestionList(req,res){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.questionListForWA,function (err,result) {
                if(result){
                    if(result.length>0){
                        let questionArr = [];
                        result.forEach((ele,i,self)=>{
                            const questionService = new QuestionService();
                            const userService = new UserService();
                            let question = questionService.init(ele);
                            let questionAuthor = userService.init(ele);
                            const answerService = new AnswerService();
                            let errResult;
                            let data
                            answerService.getHotAnswer(ele.questionId,function (hotAnswer) {
                                if(hotAnswer.code === 1){
                                    if(hotAnswer.data !== null){
                                        data = {
                                            question: question,
                                            questionAuthor:questionAuthor,
                                            answer: hotAnswer.data.answer,
                                            answerAuthor: hotAnswer.data.answerAuthor
                                        }
                                    } else if(hotAnswer.data == null){
                                        data = {
                                            question: question,
                                            questionAuthor:questionAuthor,
                                            answer: null,
                                            answerAuthor: null
                                        }
                                    }
                                    questionArr.push(data)
                                } else if(hotAnswer.code === 0){
                                     errResult = hotAnswer
                                }
                                if(i === self.length-1){
                                    if(errResult){
                                        res.json(errResult);
                                        connection.release();
                                    }else {
                                        res.json({
                                            code:1,
                                            message:'获取成功',
                                            data: questionArr
                                        })
                                        connection.release()
                                    }
                                }
                            })

                        })
                    }
                }
                if(err){
                    res.json({
                        code:0,
                        message: '错误',
                        error:err
                    });
                    connection.release()
                }
            })
        })
    }
    getFollowForUser(author,callback){
        pool.getConnection(function (err,connection) {
            connection.query(questionSQL.queryFollowByAuthor,[author],function (err,result) {
                if(err){
                }
                if(result){
                    if(result.length > 0){
                        let questionArr = [];
                        for (let i = 0; i < result.length; i++) {
                            let ele  = result[i];
                            const questionService = new QuestionService();
                            questionService.getFollowQuestionByQuestionId(ele.questionId,function (followResult) {
                                if(followResult.code ===1){
                                    followResult.data['followTime'] = ele.followtime;
                                    questionArr.push(followResult.data);
                                    if(questionArr.length === result.length){
                                        callback({
                                            code:1,
                                            message: '成功',
                                            data: questionArr
                                        });
                                        connection.release();
                                    }
                                }else {
                                    callback(followResult);
                                    connection.release();
                                }
                            })

                        }
                    }else {
                        result ={
                            code: 2,
                            message:'成功',
                            data: null
                        }
                        callback(result);
                        connection.release();
                    }
                }
                if(result === undefined){
                    result ={
                        code: 0,
                        message:'错误',
                        error: err
                    }
                    callback(result);
                    connection.release();
                }
            })
        })
    }
    follow(req,res){
        let querySQl;
        let isFollowed = req.query.isFollowed
        if(isFollowed == 1){
            querySQl = questionSQL.deleteFollow;
        }else if(isFollowed == 0){
            querySQl = questionSQL.addFollow;
        }
        pool.getConnection(function (err,connection) {
            connection.query(querySQl,[req.query.user,req.query.questionId, new Date()],function (err,result) {
                if(err){}
                if(result){
                    result = {
                        code: 1,
                        message: '操作成功',
                        data:{
                            isFollowed: isFollowed == 0?1:0
                        }
                    }
                }
                if(result === undefined){
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    }
                }
                res.json(result);
                connection.release();
            })
        })
    }
}

export class Question {
    constructor(
        public questionId: string,
        public questionTitle: string,
        public questionContent: string,
        public questionAuthor: string,
        public questiontime: Date,
    ) {}
}