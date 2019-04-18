// 导入MySQL模块
import {Question} from "../question/questionService";

const mysql = require('mysql');
const dbConfig = require('../dbConfig');
const articleSQL = require('./articlesql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool( dbConfig.mysql );
import {UserInfoShow, UserService} from "../user/userService";

export class ArticleService {
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
    getAllArticles(callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryAll, function(err, result) {
                if(err){
                    console.log(err)
                }
                if(result) {
                    if(result) {
                        let articleArr = [];
                        result.forEach((ele,i,self)=>{
                            let article = new Article(ele.articleId,ele.articleTitle,ele.articleContent,ele.thanks,ele.articleAuthor,ele.articletime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                article: article,
                                articleAuthor: author
                            }
                            articleArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: articleArr
                                }
                                callback(articleArr)
                            }
                        })

                    }
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        })

    }
    getMoreHotArticles(query,callback){
        const length = this.length;
        if(query.page){
            this.getAllArticles(function (allArticles) {
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
                            data: []
                        }
                    }
                }else {
                    result = {
                        code:0,
                        message:'获取错误',
                        data: []
                    }
                }

                callback(result)
            })
        }
    }
    searchArticle(keyword,callback){
        let str = keyword
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.search,[str],function (err,result) {
                if(result){
                    if(result.length>0){
                        let articleArr = [];
                        result.forEach((ele,i,self)=>{
                            let article = new Article(ele.articleId,ele.articleTitle,ele.articleContent,ele.thanks,ele.articleAuthor,ele.articletime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                articleId: ele.articleId,
                                article: article,
                                articleAuthor: author
                            }
                            articleArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: articleArr
                                }
                            }
                        })
                    } else if(result.length ===0 ){
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
                        data:[]
                    }
                }
                callback(result)
                connection.release()
            })
        })
    }
    getHotArticles(query,callback){
        if(query.page){
            const length = this.length;
            this.getAllArticles(function (allArticles) {
                let result;
                if(allArticles.length > query.page*length){
                    result = {
                        code:1,
                        massage:'获取成功',
                        data: allArticles.slice(0, query.page * length)
                    }
                }else {
                    result = {
                        code:1,
                        massage:'获取成功',
                        data: allArticles.slice(0, allArticles.length)
                    }
                }

                callback(result)
            })
        }
    }
    getArticleListByAuthor(mobile,callback){
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.queryUserByAuthor, [mobile], function (err, result) {
                if(result){
                    if(result.length> 0){
                        let articleArr = [];
                        result.forEach((ele,i,self)=>{
                            let article = new Article(ele.articleId,ele.articleTitle,ele.articleContent,ele.thanks,ele.articleAuthor,ele.articletime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                article: article,
                                articleAuthor: author
                            }
                            articleArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message: '获取文章成功',
                                    data: articleArr
                                }
                            }
                        })
                    } else if(result.length === 0 ) {
                        result = {
                            code: 2,
                            message: '获取文章成功',
                            data: null
                        }
                    }

                }
                if(result === undefined){
                    result = {
                        code:0,
                        message: '获取文章错误',
                        err: err
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            })
        })
    }
    getNewArticleByAuthor(author,callback){
        pool.getConnection(function (err, connection) {
                connection.query(articleSQL.queryNewArticle,[author], function(err, result) {
                    if(err){
                        console.log(err)
                    }
                    if(result) {
                        let articleArr = [];
                        result.forEach((ele,i,self)=>{
                            let article = new Article(ele.articleId,ele.articleTitle,ele.articleContent,ele.thanks,ele.articleAuthor,ele.articletime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                article: article,
                                articleAuthor: author
                            }
                            articleArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: articleArr[0]
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
    getArticleDetail(articleId,callback){
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.queryArticleDetailById, [articleId],function (err,result) {
                if(err){
                    callback({
                        code:0,
                        message:'err',
                        err:err
                    })
                }
                if(result){
                    if(result.length>0){
                        let articleArr = [];
                        result.forEach((ele,i,self)=>{
                            let article = new Article(ele.articleId,ele.articleTitle,ele.articleContent,ele.thanks,ele.articleAuthor,ele.articletime)
                            let author = new UserInfoShow(ele.mobile,ele.userName,ele.userDescription,ele.userPicture,ele.sex,ele.introduction)
                            let data ={
                                article: article,
                                articleAuthor: author
                            }
                            articleArr.push(data)
                            if(i === self.length-1 ){
                                result = {
                                    code: 1,
                                    message:'搜索成功',
                                    data: articleArr[0]
                                }
                            }
                        })
                    } else {
                        result = {
                            code: 0,
                            message:'err',
                            err:'sql'
                        }
                    }
                    callback(result);
                }
                connection.release();
            })
        })
    }
    addArticle(req,res){
        const article = req.body;
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.insert,[article.articleTitle,article.articleContent,0,article.articleAuthor,new Date()], function (err,result) {
                if(result){
                    const articleService = new ArticleService()
                    articleService.getNewArticleByAuthor(article.articleAuthor,function (data) {
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
        const articleId = id;
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.addThanks,[articleId],function (err,result) {
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
    deleteArticle(req,res){
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.delete,[req.query.id], function (err,result) {
                if(result){
                    result = {
                        code: 1,
                        message: '删除成功',
                    };
                }
                if( err){
                    console.log(err)
                }
                // 以json形式，把操作结果返回给前台页面
                if( result === undefined){
                    result ={
                        code: 0,
                        message: '删除失败'
                    }
                }
                res.json(result);
                // 释放连接
                connection.release();
            })

        })
    }
    getArticleCountByAuthor(author,callback){
        pool.getConnection(function (err,connection) {
            connection.query(articleSQL.queryCountByAuthor,[author],function (err,result) {
                if(err){
                    callback({
                        code:0,
                        message:'获取错误',
                        error: err
                    })
                }
                if(result){
                    if(result.length > 0){
                        result = {
                            code:1,
                            message:'获取成功',
                            data: result[0]
                        }
                        callback(result)
                    } else if(result.length === 0){
                        result = {
                            code:2,
                            message:'获取成功',
                            data: []
                        }
                        callback(result)
                    }
                }
                connection.release();
            })
        })
    }
}

export class Article {
    constructor(
        public articleId: string,
        public articleTitle: string,
        public articleContent: string,
        public thanks: number,
        public articleAuthor: number,
        public articletime: Date,
    ) {}
}