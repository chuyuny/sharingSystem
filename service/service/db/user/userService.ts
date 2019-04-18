// 导入MySQL模块
import {AnswerService} from "../answer/answerService";
import {ArticleService} from "../article/articleService";
import {QuestionService} from "../question/questionService";

const mysql = require('mysql');
const dbConfig = require('../dbConfig');
const userSQL = require('./usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool( dbConfig.mysql );

export class UserService {
    constructor() {}
    init(user){
        return new UserInfoShow(user.mobile, user.userName,user.userDescription,user.userPicture, user.sex,  user.introduction )
    }
    getAllUser(callback) {
        let allUser;
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryAll, function(err, result) {

                if(err){
                    console.log(err)
                }
                if(result) {
                    callback(result)
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        })

    }
    updateUserInfo(date,callback){
        pool.getConnection(function (err,connection) {
            if(date.type === 'userPicture'){
                connection.query(userSQL.updateP,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:0,
                            message: '修改失败'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'userName'){
                connection.query(userSQL.updateName,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:0,
                            message: '修改失败'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'sex'){
                connection.query(userSQL.updateSex,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:0,
                            message: '修改失败'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'description'){
                connection.query(userSQL.updateDescription,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:0,
                            message: '修改失败'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'introduction'){
                connection.query(userSQL.updateIntroduction,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:0,
                            message: '修改失败'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'password'){
                connection.query(userSQL.updatePassword,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(result === undefined){
                        result = {
                            code:2,
                            message: '修改失败',
                            error: err
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
            if(date.type === 'mobile'){
                connection.query(userSQL.updateMobile,[date.value, date.user.mobile], function (err, result) {
                    if(result){
                        result = {
                            code:1,
                            message: '修改成功'
                        }
                    }
                    if(err){
                        result = {
                            code:0,
                            message: '该号码已存在，请重新输入'
                        }
                    }
                    callback(result)
                    connection.release();
                })
            }
        })
    }
    getUserByMobile(mobile,callback){
        pool.getConnection(function (err,connection) {
            connection.query(userSQL.queryUserByMobile, [mobile], function (err, result) {
                if(result){
                    if( result.length <= 0){
                        result = {
                            code: 0,
                            message: '用户不存在',
                            user: {}
                        }
                    } else {
                        const userService = new UserService();
                        let user = userService.init(result[0]);
                        result = {
                            code: 1,
                            message: '获取成功',
                            user: user
                        }
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            })
        })
    }
    userLoginIdentify(user,callback){
        this.init(user);
        pool.getConnection(function (err,connection) {
            connection.query(userSQL.queryUserByLogin, [user.mobile,user.password], function (err, result) {
                if(result){
                    if( result.length <= 0){
                        result = {
                            code: 0,
                            message: 'error',
                            date:{
                                login: false,
                                userInfo: null,
                                message: '用户不存在/密码错误'
                            }
                        }
                    } else {
                        result = {
                            code: 1,
                            message: '成功',
                            date:{
                                login: true,
                                userInfo: result[0],
                                message: '登录成功'
                            }
                        }
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            })
        })
    }
    userRegisterIndentify(user,callback){
        pool.getConnection(function (err,connection) {
            connection.query(userSQL.queryUserByMobile,[user.mobile], function (err,result) {
                if(result.length>0){
                    result ={
                        code: 2,
                        message: '该号码已注册'
                    }
                    callback(result)
                    connection.release();

                } else {
                    connection.query(userSQL.insert,[user.mobile,user.userName, user.password,'','','',''], function (err,result){
                        if(result){
                            result = {
                                code: 1,
                                message: '注册成功',
                            };
                        }
                        // 以json形式，把操作结果返回给前台页面
                        if( result === undefined){
                            result ={
                                code: 0,
                                message: '注册失败'
                            }
                        }
                        callback(result);
                        // 释放连接
                        connection.release();
                    })
                }
            })
            // if(hasUser.length<= 0){
            //
            // }

        })
    }
    getUserActive(req,callback){
        // let user = req.params.user
        let user = req.params.user;
        const answerService = new AnswerService();
        let dataArr = [];
        answerService.getAnswerListByAuthor(user,function (answerList) {
            if(answerList.code ===1 || answerList.code === 2){
                if(answerList.code ===1){
                    answerList.data.forEach((ele,i,self)=>{
                        let answer = ele;
                        answer['time'] = ele.answer.answertime;
                        answer['type'] = 'answer';
                        dataArr.push(answer)
                    })
                }
                const articleService = new ArticleService()
                articleService.getArticleListByAuthor(user,function (articleList) {
                    if(articleList.code === 1|| articleList.code === 2){
                        if(articleList.code === 1){
                            articleList.data.forEach((ele,i,self)=>{
                                let article = ele;
                                article['time'] = ele.article.articletime;
                                article['type'] = 'article';
                                dataArr.push(article)
                            })
                        }
                        const questionService= new QuestionService()
                        questionService.getQuestionsByAuthor(user,function (questionArr) {
                            if(questionArr.code === 1|| questionArr.code === 2){
                                if(questionArr.code === 1){
                                    questionArr.data.forEach((ele,i,self)=>{
                                        let question = ele;
                                        question['time'] = ele.question.questiontime;
                                        question['type'] = 'question';
                                        dataArr.push(question)
                                    })
                                }
                                const questionService= new QuestionService()
                                questionService.getFollowForUser(user,function (followArr) {
                                    if(followArr.code === 1|| followArr.code === 2){
                                        if(followArr.code === 1){
                                            followArr.data.forEach((ele,i,self)=>{
                                                let question = ele;
                                                question['time'] = ele.followTime;
                                                question['type'] = 'follow';
                                                dataArr.push(question);
                                                if(i === self.length - 1){
                                                    dataArr.sort((a,b)=> b['time'] - a['time'])
                                                    callback({
                                                        code :1,
                                                        message:'成功',
                                                        data: dataArr
                                                    })
                                                }
                                            })
                                        }else if(followArr.code === 2) {
                                            if(dataArr.length>0){
                                                callback({
                                                    code :1,
                                                    message:'成功',
                                                    data: dataArr
                                                })
                                            } else {
                                                callback({
                                                    code :1,
                                                    message:'成功',
                                                    data: null
                                                })
                                            }
                                        }
                                    }else if(followArr.code === 0){
                                        callback(followArr)
                                    }

                                })
                            }else {
                                callback(questionArr)
                            }
                        })
                    }else {
                        callback(articleList)
                    }
                })
            }else {
                callback(answerList)
            }
        })
    }
}
export class UserInfoShow {
    constructor(
        public mobile: string,
        public userName: string,
        public userDescription: string,
        public userPicture: string,
        public sex: string,
        public introduction: string,
    ) {}
}