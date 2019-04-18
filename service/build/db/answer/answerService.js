"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入MySQL模块
var questionService_1 = require("../question/questionService");
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
var answerSQL = require('./answersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var userService_1 = require("../user/userService");
var AnswerService = /** @class */ (function () {
    function AnswerService() {
        this.length = 5;
    }
    AnswerService.prototype.init = function (answer) {
        return new Answer(answer.answerId, answer.questionId, answer.articleContent, answer.thanks, answer.answerAuthor, answer.answertime);
    };
    AnswerService.prototype.getAllAnswers = function (callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryAll, function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: '搜索成功',
                        err: err
                    });
                }
                if (result) {
                    if (result.length > 0) {
                        var answerArr_1 = [];
                        result.forEach(function (ele, i, self) {
                            var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var question = new questionService_1.Question(ele.questionId, ele.questionTitle, ele.questionContent, ele.questionAuthor, ele.questiontime);
                            var data = {
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            };
                            answerArr_1.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: answerArr_1
                                };
                                callback(answerArr_1);
                            }
                        });
                    }
                    else {
                        // callback();
                        result = {
                            code: 1,
                            message: '搜索成功',
                            data: null
                        };
                        callback(result);
                    }
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        });
    };
    AnswerService.prototype.getMoreRecommendAnswer = function (query, callback) {
        var length = this.length;
        if (query.page) {
            this.getAllAnswers(function (allArticles) {
                var result;
                if (allArticles) {
                    if (allArticles.length > query.page * length - 1) {
                        var left = query.page * length - 1;
                        if (allArticles.length > query.page * length + length) {
                            result = {
                                code: 1,
                                message: '获取成功',
                                data: allArticles.slice(query.page * length - 1, query.page * length + length)
                            };
                        }
                        else {
                            result = {
                                code: 1,
                                massage: '获取成功',
                                data: allArticles.slice(query.page * length - 1, allArticles.length)
                            };
                        }
                    }
                    else {
                        result = {
                            code: 0,
                            message: '没有更多了',
                            data: null
                        };
                    }
                }
                else {
                    result = {
                        code: 0,
                        message: '获取错误',
                        data: null
                    };
                }
                callback(result);
            });
        }
    };
    AnswerService.prototype.searchAnswer = function (keyword, callback) {
        var str = keyword;
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.search, [str], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var answerArr_2 = [];
                        result.forEach(function (ele, i, self) {
                            var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var question = new questionService_1.Question(ele.questionId, ele.questionTitle, ele.questionContent, ele.questionAuthor, ele.questiontime);
                            var data = {
                                answerId: ele.answerId,
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            };
                            answerArr_2.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: answerArr_2
                                };
                            }
                        });
                    }
                    else {
                        result = {
                            code: 2,
                            message: '搜索成功',
                            data: null
                        };
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '搜索错误',
                        err: err
                    };
                }
                callback(result);
                connection.release();
            });
        });
    };
    AnswerService.prototype.getRecommendAnswer = function (query, callback) {
        if (query.page) {
            var length_1 = this.length;
            this.getAllAnswers(function (allanswers) {
                if (!allanswers.code) {
                    var result = void 0;
                    if (allanswers.length > query.page * length_1) {
                        result = {
                            code: 1,
                            massage: '获取成功',
                            data: allanswers.slice(0, query.page * length_1)
                        };
                    }
                    else {
                        result = {
                            code: 1,
                            massage: '获取成功',
                            data: allanswers.slice(0, allanswers.length)
                        };
                    }
                    callback(result);
                }
                else {
                    callback(allanswers);
                }
            });
        }
    };
    AnswerService.prototype.getAnswerListByAuthor = function (mobile, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryAnswerByAuthor, [mobile], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var answerArr_3 = [];
                        result.forEach(function (ele, i, self) {
                            var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var question = new questionService_1.Question(ele.questionId, ele.questionTitle, ele.questionContent, ele.questionAuthor, ele.questiontime);
                            var data = {
                                answer: answer,
                                answerAuthor: author,
                                question: question
                            };
                            answerArr_3.push(data);
                            if (answerArr_3.length === self.length) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: answerArr_3
                                };
                            }
                        });
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '搜索成功',
                            data: null
                        };
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '获取回答错误',
                        err: err
                    };
                }
                callback(result);
                // 释放连接
                connection.release();
            });
        });
    };
    AnswerService.prototype.getAnswerbyQuestion = function (queationId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryAnswerByQuestionId, [queationId], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var answerArr_4 = [];
                        result.forEach(function (ele, i, self) {
                            var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                            var author;
                            var userService = new userService_1.UserService();
                            userService.getUserByMobile(ele.answerAuthor, function (user) {
                                author = user.user;
                                var data = {
                                    answer: answer,
                                    answerAuthor: author,
                                };
                                answerArr_4.push(data);
                                if (i === self.length - 1) {
                                    result = {
                                        code: 1,
                                        message: '搜索成功',
                                        data: answerArr_4
                                    };
                                    callback(result);
                                    connection.release();
                                }
                            });
                        });
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 1,
                            message: '搜索成功',
                            data: null
                        };
                        callback(result);
                        connection.release();
                    }
                }
                if (err) {
                    result = {
                        code: 0,
                        message: '失败',
                        err: err
                    };
                    callback(result);
                    connection.release();
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
            });
        });
    };
    AnswerService.prototype.getNewAnswerByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryNewAnswer, [author], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    var answerArr_5 = [];
                    result.forEach(function (ele, i, self) {
                        var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                        var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                        var question = new questionService_1.Question(ele.questionId, ele.questionTitle, ele.questionContent, ele.questionAuthor, ele.questiontime);
                        var data = {
                            answerId: ele.answerId,
                            answer: answer,
                            answerAuthor: author,
                            question: question
                        };
                        answerArr_5.push(data);
                        if (i === self.length - 1) {
                            result = {
                                code: 1,
                                message: '搜索成功',
                                data: answerArr_5[0]
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
        });
    };
    AnswerService.prototype.addAnswer = function (req, res) {
        var answer = req.body;
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.insert, [answer.answerContent, answer.questionId, answer.answerAuthor, 0, new Date()], function (err, result) {
                if (result) {
                    var answerService = new AnswerService();
                    answerService.getNewAnswerByAuthor(answer.answerAuthor, function (data) {
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
                                message: '添加失败'
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
        });
    };
    AnswerService.prototype.addThanks = function (id, res) {
        var answerId = id;
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.addThanks, [answerId], function (err, result) {
                if (result) {
                    result = {
                        code: 1,
                        message: '更新成功',
                    };
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '更新错误',
                    };
                }
                res.json(result);
                connection.release();
            });
        });
    };
    AnswerService.prototype.deleteAnswer = function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.delete, [req.query.id], function (err, result) {
                if (result) {
                    result = {
                        code: 1,
                        message: '删除成功',
                    };
                }
                // 以json形式，把操作结果返回给前台页面
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '删除失败',
                        err: err
                    };
                }
                res.json(result);
                // 释放连接
                connection.release();
            });
        });
    };
    AnswerService.prototype.getHotAnswer = function (questionId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryHotAnswer, [questionId], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    if (result.length > 0) {
                        var answerArr_6 = [];
                        result.forEach(function (ele, i, self) {
                            var answer = new Answer(ele.answerId, ele.questionId, ele.answerContent, ele.thanks, ele.answerAuthor, ele.answertime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            // let question = new Question(ele.questionId,ele.questionTitle,ele.questionContent,ele.questionAuthor,ele.questiontime)
                            var data = {
                                answer: answer,
                                answerAuthor: author,
                            };
                            answerArr_6.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: answerArr_6[0]
                                };
                            }
                        });
                    }
                    else if (result.length == 0) {
                        result = {
                            code: 1,
                            message: '搜索成功',
                            data: null
                        };
                    }
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
        });
    };
    AnswerService.prototype.getAnswerCountByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryCountByAuthor, [author], function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: '获取错误',
                        error: err
                    });
                    connection.release();
                }
                if (result) {
                    if (result.length > 0) {
                        result = {
                            code: 1,
                            message: '获取成功',
                            data: result[0]
                        };
                        callback(result);
                        connection.release();
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '获取成功',
                            data: null
                        };
                        callback(result);
                        connection.release();
                    }
                }
            });
        });
    };
    AnswerService.prototype.getAnswerCountByQuestion = function (questionId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(answerSQL.queryCountByQuestion, [questionId], function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: '获取错误',
                        error: err
                    });
                    connection.release();
                }
                if (result) {
                    if (result.length > 0) {
                        result = {
                            code: 1,
                            message: '获取成功',
                            data: result[0]
                        };
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '获取成功',
                            data: null
                        };
                    }
                    callback(result);
                    connection.release();
                }
            });
        });
    };
    return AnswerService;
}());
exports.AnswerService = AnswerService;
var Answer = /** @class */ (function () {
    function Answer(answerId, questionId, answerContent, thanks, answerAuthor, answertime) {
        this.answerId = answerId;
        this.questionId = questionId;
        this.answerContent = answerContent;
        this.thanks = thanks;
        this.answerAuthor = answerAuthor;
        this.answertime = answertime;
    }
    return Answer;
}());
exports.Answer = Answer;
