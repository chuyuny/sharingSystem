"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入MySQL模块
var userService_1 = require("../user/userService");
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
var commentSQL = require('./commentsql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var CommentService = /** @class */ (function () {
    function CommentService() {
        this.length = 5;
    }
    CommentService.prototype.init = function (article) {
        this.articleId = article.articleId;
        this.articleTitle = article.articleTitle;
        this.articleContent = article.articleContent;
        this.thanks = article.thanks;
        this.articleAuthor = article.articleAuthor;
        this.time = article.time;
    };
    CommentService.prototype.getComments = function (req, res) {
        pool.getConnection(function (err, connection) {
            if (req.query.type === 'article') {
                connection.query(commentSQL.queryAllForArticle, [req.query.id], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_1 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                articleId: ele.articleId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_1.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_1
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    res.json(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
            if (req.query.type === 'question') {
                connection.query(commentSQL.queryAllForQuestion, [req.query.id], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_2 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_2.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_2
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    res.json(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
            if (req.query.type === 'answer') {
                connection.query(commentSQL.queryAllForAnswer, [req.query.id], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_3 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                answerId: ele.answerId,
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_3.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_3
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    res.json(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
        });
    };
    CommentService.prototype.getNewComment = function (data, callback) {
        pool.getConnection(function (err, connection) {
            if (data.type === 'article') {
                connection.query(commentSQL.queryNewForArticle, [data.commentAuthor], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_4 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                articleId: ele.articleId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_4.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_4[0]
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    callback(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
            if (data.type === 'question') {
                connection.query(commentSQL.queryNewForQuestion, [data.commentAuthor], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_5 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_5.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_5[0]
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    callback(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
            if (data.type === 'answer') {
                connection.query(commentSQL.queryNewForAnswer, [data.commentAuthor], function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        var commentArr_6 = [];
                        result.forEach(function (ele, i, self) {
                            var comment = new Comment(ele.commentId, ele.commentContent, ele.commenttime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                answerId: ele.answerId,
                                questionId: ele.questionId,
                                comment: comment,
                                commentAuthor: author,
                            };
                            commentArr_6.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: commentArr_6[0]
                                };
                            }
                        });
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '失败'
                        };
                    }
                    callback(result);
                    // 以json形式，把操作结果返回给前台页面
                    // 释放连接
                    connection.release();
                });
            }
        });
    };
    CommentService.prototype.addComment = function (req, res) {
        var comment = req.body;
        console.log(comment);
        pool.getConnection(function (err, connection) {
            if (comment.type === 'answer') {
                connection.query(commentSQL.insertForAnswer, [comment.commentContent, comment.commentAuthor, comment.questionId, comment.answerId, new Date()], function (err, result) {
                    if (result) {
                        var commentService = new CommentService();
                        commentService.getNewComment(comment, function (data) {
                            console.log(data);
                            if (data.code === 1) {
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }
                            else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
                                res.send(result);
                            }
                        });
                    }
                    if (err) {
                        console.log(err);
                        res.send({
                            code: 0,
                            error: err
                        });
                    }
                    // 以json形式，把操作结果返回给前台页面
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '添加失败'
                        };
                        res.send(result);
                    }
                    // 释放连接
                    connection.release();
                });
            }
            if (comment.type === 'article') {
                connection.query(commentSQL.insertForArticle, [comment.commentContent, comment.commentAuthor, comment.articleId, new Date()], function (err, result) {
                    if (result) {
                        var commentService = new CommentService();
                        commentService.getNewComment(comment, function (data) {
                            if (data.code === 1) {
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }
                            else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
                                res.send(result);
                            }
                        });
                    }
                    if (err) {
                        console.log(err);
                    }
                    // 以json形式，把操作结果返回给前台页面
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '添加失败'
                        };
                        res.send(result);
                    }
                    // 释放连接
                    connection.release();
                });
            }
            if (comment.type === 'question') {
                connection.query(commentSQL.insertForQuestion, [comment.commentContent, comment.commentAuthor, comment.questionId, new Date()], function (err, result) {
                    if (result) {
                        var commentService = new CommentService();
                        commentService.getNewComment(comment, function (data) {
                            if (data.code === 1) {
                                result = {
                                    code: 1,
                                    message: '添加成功',
                                    data: data.data
                                };
                                res.send(result);
                            }
                            else {
                                result = {
                                    code: 0,
                                    message: '错误',
                                    data: []
                                };
                                res.send(result);
                            }
                        });
                    }
                    if (err) {
                        console.log(err);
                    }
                    // 以json形式，把操作结果返回给前台页面
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '添加失败'
                        };
                        res.send(result);
                    }
                    // 释放连接
                    connection.release();
                });
            }
        });
    };
    return CommentService;
}());
exports.CommentService = CommentService;
var Comment = /** @class */ (function () {
    function Comment(commentId, commentContent, commenttime) {
        this.commentId = commentId;
        this.commentContent = commentContent;
        this.commenttime = commenttime;
    }
    return Comment;
}());
exports.Comment = Comment;
