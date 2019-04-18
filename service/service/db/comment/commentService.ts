// 导入MySQL模块
import {UserInfoShow} from "../user/userService";
import {Question} from "../question/questionService";
import {Answer} from "../answer/answerService";

const mysql = require('mysql');
const dbConfig = require('../dbConfig');
const commentSQL = require('./commentsql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool( dbConfig.mysql );
export class CommentService {
    public articleId: string;
    public articleTitle: string;
    public articleContent: any;
    public thanks: number;
    public articleAuthor: string;
    public time: Date;
    public length = 5;
    constructor() {}
    init(article){
        this.articleId = article.articleId ;
        this.articleTitle = article.articleTitle ;
        this.articleContent = article.articleContent ;
        this.thanks = article.thanks ;
        this.articleAuthor = article.articleAuthor ;
        this.time = article.time ;
    }
    getComments(req,res) {
        pool.getConnection(function (err, connection) {
            if(req.query.type === 'article'){
                connection.query(commentSQL.queryAllForArticle,[req.query.id], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                articleId: ele.articleId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr
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
                    res.json(result)
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });

            }
            if(req.query.type === 'question'){
                connection.query(commentSQL.queryAllForQuestion,[req.query.id], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr
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
                    res.json(result)
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });

            }
            if(req.query.type === 'answer'){
                connection.query(commentSQL.queryAllForAnswer,[req.query.id], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                answerId: ele.answerId,
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr
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
                    res.json(result)
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });

            }
        })

    }
    getNewComment(data,callback){
        pool.getConnection(function (err, connection) {
            if(data.type === 'article'){
                connection.query(commentSQL.queryNewForArticle,[data.commentAuthor], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                articleId: ele.articleId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr[0]
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

            }
            if(data.type === 'question'){
                connection.query(commentSQL.queryNewForQuestion,[data.commentAuthor], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr[0]
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

            }
            if(data.type === 'answer'){
                connection.query(commentSQL.queryNewForAnswer,[data.commentAuthor], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let commentArr = [];
                        result.forEach((ele,i,self)=>{
                            let comment = new Comment(ele.commentId,ele.commentContent,ele.commenttime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                answerId: ele.answerId,
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            }
                            commentArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: commentArr[0]
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

            }
        })
    }
    addComment(req,res){
        const comment = req.body;
        console.log(comment)
        pool.getConnection(function (err,connection) {
            if(comment.type === 'answer'){
                connection.query(commentSQL.insertForAnswer,[comment.commentContent,comment.commentAuthor,comment.questionId,comment.answerId,new Date()], function (err,result) {
                    if(result){
                        const commentService = new CommentService();
                        commentService.getNewComment(comment,function (data) {
                            console.log(data)
                            if(data.code === 1){
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
                                res.send(result);
                            }
                        })
                    }
                    if( err){
                        console.log(err)
                        res.send({
                            code:0,
                            error:err
                        })
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
            }
            if(comment.type === 'article'){
                connection.query(commentSQL.insertForArticle,[comment.commentContent,comment.commentAuthor,comment.articleId,new Date()], function (err,result) {
                    if(result){
                        const commentService = new CommentService();
                        commentService.getNewComment(comment,function (data) {
                            if(data.code === 1){
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
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
            }
            if(comment.type === 'question'){
                connection.query(commentSQL.insertForQuestion,[comment.commentContent,comment.commentAuthor,comment.questionId,new Date()], function (err,result) {
                    if(result){
                        const commentService = new CommentService();
                        commentService.getNewComment(comment,function (data) {
                            if(data.code === 1){
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
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
            }

        })
    }
}

export class Comment {
    constructor(
        public commentId: string,
        public commentContent: string,
        public commenttime: Date,
    ) {}
}