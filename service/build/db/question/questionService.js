"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var answerService_1 = require("../answer/answerService");
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
var questionSQL = require('./questionsql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var userService_1 = require("../user/userService");
var articleService_1 = require("../article/articleService");
var QuestionService = /** @class */ (function () {
    function QuestionService() {
    }
    QuestionService.prototype.init = function (question) {
        return new Question(question.questionId, question.questionTitle, question.questionContent, question.questionAuthor, question.questiontime);
    };
    QuestionService.prototype.getQuestionAndHotAnswerByQuestionId = function (question, callback) {
        var questionId = question.questionId;
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryByQuestionId, [questionId], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    var questionArr_1 = [];
                    result.forEach(function (ele, i, self) {
                        var questionService = new QuestionService();
                        var questionDetail = questionService.init(ele);
                        var userService = new userService_1.UserService();
                        var author = userService.init(ele);
                        var answerService = new answerService_1.AnswerService();
                        var data = {
                            question: questionDetail,
                            author: author,
                            hot: question.A + question.T
                        };
                        questionArr_1.push(data);
                        answerService.getHotAnswer(ele.questionId, function (answerArr) {
                            if (answerArr.code === 1) {
                                questionArr_1[i]['hotAnswer'] = answerArr.data;
                                if (i === self.length - 1) {
                                    result = {
                                        code: 1,
                                        message: '搜索成功',
                                        data: questionArr_1[0]
                                    };
                                    callback(result);
                                }
                            }
                            else if (answerArr.code === 0) {
                                result = {
                                    code: 0,
                                    message: '失败'
                                };
                                callback(result);
                            }
                        });
                    });
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '失败'
                    };
                    callback(result);
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        });
    };
    QuestionService.prototype.getIsFollowed = function (user, questionId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryIsFollowed, [user, questionId], function (err, result) {
                if (err) { }
                if (result) {
                    result = {
                        code: 1,
                        message: '成功',
                        data: result[0]
                    };
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    };
                }
                callback(result);
                connection.release();
            });
        });
    };
    QuestionService.prototype.getQuestionDetailByQuestionId = function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryByQuestionId, [req.body.questionId], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    if (result.length > 0) {
                        var questionArr_2 = [];
                        result.forEach(function (ele, i, self) {
                            var questionService = new QuestionService();
                            var question = questionService.init(ele);
                            var userService = new userService_1.UserService();
                            var author = userService.init(ele);
                            var data = {
                                question: question,
                                author: author,
                                isFollowed: 0
                            };
                            questionService.getIsFollowed(req.body.user, req.body.questionId, function (isFollowResult) {
                                if (isFollowResult.code === 1) {
                                    data.isFollowed = isFollowResult.data.isFollowed;
                                    var answerService = new answerService_1.AnswerService();
                                    answerService.getAnswerCountByAuthor(ele.mobile, function (countResult) {
                                        if (countResult.code === 1) {
                                            data.author['answerCount'] = countResult.data.userAnswerCount;
                                        }
                                        else if (countResult.code === 2) {
                                            data.author['answerCount'] = 0;
                                        }
                                        else {
                                            result = {
                                                code: 0,
                                                message: '失败'
                                            };
                                            res.send(result);
                                            connection.release();
                                        }
                                        var articleService = new articleService_1.ArticleService();
                                        articleService.getArticleCountByAuthor(ele.mobile, function (countResult) {
                                            if (countResult.code === 1) {
                                                data.author['articleCount'] = countResult.data.userArticleCount;
                                            }
                                            else if (countResult.code === 2) {
                                                data.author['articleCount'] = 0;
                                            }
                                            else {
                                                result = {
                                                    code: 0,
                                                    message: '失败'
                                                };
                                                res.send(result);
                                                connection.release();
                                            }
                                            questionArr_2.push(data);
                                            if (i === self.length - 1) {
                                                var answerService_2 = new answerService_1.AnswerService();
                                                answerService_2.getAnswerbyQuestion(req.body.questionId, function (answerArr) {
                                                    if (answerArr.code === 1) {
                                                        questionArr_2[0]['answerArr'] = answerArr.data;
                                                        result = {
                                                            code: 1,
                                                            message: '搜索成功',
                                                            data: questionArr_2[0]
                                                        };
                                                    }
                                                    if (answerArr.code === 0) {
                                                        result = answerArr;
                                                    }
                                                    res.send(result);
                                                    connection.release();
                                                });
                                            }
                                        });
                                    });
                                }
                                else {
                                    result = isFollowResult;
                                    res.send(result);
                                    connection.release();
                                }
                            });
                        });
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '失败'
                    };
                    res.send(result);
                    connection.release();
                }
            });
        });
    };
    QuestionService.prototype.getFollowForQuestion = function (questionId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryCountByQuestion, [questionId], function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: '错误',
                        error: err
                    });
                }
                if (result) {
                    if (result.length > 0) {
                        result = {
                            code: 1,
                            message: '成功',
                            data: result[0]
                        };
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '成功',
                            data: []
                        };
                    }
                }
                callback(result);
                connection.release();
            });
        });
    };
    QuestionService.prototype.getHotQuestion = function (req, res) {
        this.getHotQuestionId(req, function (result) {
            if (result.code === 1) {
                var hotQuestionResult_1 = [];
                var resultSearch_1;
                for (var i = 0; i < result.data.length; i++) {
                    var ele = result.data[i];
                    var questionService = new QuestionService();
                    questionService.getQuestionAndHotAnswerByQuestionId(ele, function (hotQuestionArr) {
                        if (hotQuestionArr.code === 1) {
                            hotQuestionResult_1.push(hotQuestionArr.data);
                        }
                        else {
                            resultSearch_1 = {
                                code: 0,
                                message: '失败'
                            };
                        }
                        if (hotQuestionResult_1.length === result.data.length) {
                            if (resultSearch_1) {
                                res.json(resultSearch_1);
                            }
                            else {
                                result = {
                                    code: 1,
                                    message: '成功',
                                    data: hotQuestionResult_1
                                };
                                res.json(result);
                            }
                        }
                    });
                }
            }
            else {
                res.json(result);
            }
        });
    };
    QuestionService.prototype.getHotQuestionId = function (req, callback) {
        var data = req.query;
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryHotQuestionId, [(Number(data.pageNo) - 1) * Number(data.pageSize), Number(data.pageSize)], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    if (result.length > 0) {
                        result = {
                            code: 1,
                            message: '成功',
                            data: result
                        };
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '没有更多了',
                            data: []
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
                // 释放连接
                connection.release();
            });
        });
    };
    QuestionService.prototype.getNewQuestionByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryNewQuestion, [author], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    if (result.length > 0) {
                        var questionArr_3 = [];
                        result.forEach(function (ele, i, self) {
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var question = new Question(ele.questionId, ele.questionTitle, ele.questionContent, ele.questionAuthor, ele.questiontime);
                            var data = {
                                question: question,
                                questionAuthor: author,
                                answerArr: null
                            };
                            questionArr_3.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: questionArr_3[0]
                                };
                            }
                        });
                    }
                    else if (result.length === 0) {
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
    QuestionService.prototype.addQuestion = function (req, res) {
        var question = req.body;
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.insert, [question.question.questionTitle, question.question.questionContent, question.questionAuthor, new Date()], function (err, result) {
                if (result) {
                    var questionService = new QuestionService();
                    questionService.getNewQuestionByAuthor(question.questionAuthor, function (data) {
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
    QuestionService.prototype.getQuestionsByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryQuestionByAuthor, [author], function (err, result) {
                if (err) {
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    };
                    callback(result);
                }
                if (result) {
                    if (result.length > 0) {
                        var questionArr_4 = [];
                        var _loop_1 = function (i) {
                            var ele = result[i];
                            var questionService = new QuestionService();
                            var question = questionService.init(ele);
                            var data = {
                                question: question,
                                answerCount: 0
                            };
                            questionArr_4.push(data);
                            var answerService = new answerService_1.AnswerService();
                            var questionId = ele.questionId;
                            answerService.getAnswerCountByQuestion(questionId, function (countReesult) {
                                if (countReesult.code === 1 || countReesult.code === 2) {
                                    if (countReesult.code === 1) {
                                        questionArr_4[i]['answerCount'] = countReesult.data.questionAnswerCount;
                                    }
                                    else if (countReesult.code === 2) {
                                        questionArr_4[i]['answerCount'] = 0;
                                    }
                                    var questionService_1 = new QuestionService();
                                    questionService_1.getFollowForQuestion(questionId, function (followCountResult) {
                                        if (followCountResult.code === 1 || followCountResult.code === 2) {
                                            if (followCountResult.code === 1) {
                                                questionArr_4[i]['followCount'] = followCountResult.data.followCount;
                                            }
                                            else if (followCountResult.code === 2) {
                                                questionArr_4[i]['followCount'] = 0;
                                            }
                                            if (i === result.length - 1) {
                                                result = {
                                                    code: 1,
                                                    message: '获取成功',
                                                    data: questionArr_4
                                                };
                                                callback(result);
                                            }
                                        }
                                        else {
                                            callback(followCountResult);
                                        }
                                    });
                                }
                                else {
                                    callback(countReesult);
                                }
                            });
                        };
                        for (var i = 0; i < result.length; i++) {
                            _loop_1(i);
                        }
                    }
                    else {
                        result = {
                            code: 2,
                            message: '成功',
                            data: null
                        };
                        callback(result);
                    }
                }
                connection.release();
            });
        });
    };
    QuestionService.prototype.getFollowQuestionByQuestionId = function (questionId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryQuestionByQuestionId, [questionId], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var questionService = new QuestionService();
                        var question = questionService.init(result[0]);
                        var data_1 = {
                            question: question,
                            answerCount: 0
                        };
                        var answerService = new answerService_1.AnswerService();
                        answerService.getAnswerCountByQuestion(questionId, function (countResult) {
                            var errResult;
                            if (countResult.code === 1 || countResult.code === 2) {
                                if (countResult.code === 1) {
                                    data_1['answerCount'] = countResult.data.questionAnswerCount;
                                }
                                else if (countResult.code === 2) {
                                    data_1['answerCount'] = 0;
                                }
                                var questionService_2 = new QuestionService();
                                questionService_2.getFollowForQuestion(questionId, function (followCountResult) {
                                    if (followCountResult.code === 1 || followCountResult.code === 2) {
                                        if (followCountResult.code === 1) {
                                            data_1['followCount'] = followCountResult.data.followCount;
                                        }
                                        else if (followCountResult.code === 2) {
                                            data_1['followCount'] = 0;
                                        }
                                        result = {
                                            code: 1,
                                            message: '获取成功',
                                            data: data_1
                                        };
                                        callback(result);
                                        connection.release();
                                    }
                                    else if (followCountResult.code === 0) {
                                        errResult = countResult;
                                        callback(errResult);
                                        connection.release();
                                    }
                                });
                            }
                            else {
                                errResult = countResult;
                                callback(errResult);
                                connection.release();
                            }
                        });
                    }
                    else {
                        result = {
                            code: 2,
                            message: '获取成功',
                            data: null
                        };
                        callback(result);
                        connection.release();
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    };
                    callback(result);
                    connection.release();
                }
            });
        });
    };
    QuestionService.prototype.getWriteAnswerQuestionList = function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.questionListForWA, function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var questionArr_5 = [];
                        result.forEach(function (ele, i, self) {
                            var questionService = new QuestionService();
                            var userService = new userService_1.UserService();
                            var question = questionService.init(ele);
                            var questionAuthor = userService.init(ele);
                            var answerService = new answerService_1.AnswerService();
                            var errResult;
                            var data;
                            answerService.getHotAnswer(ele.questionId, function (hotAnswer) {
                                if (hotAnswer.code === 1) {
                                    if (hotAnswer.data !== null) {
                                        data = {
                                            question: question,
                                            questionAuthor: questionAuthor,
                                            answer: hotAnswer.data.answer,
                                            answerAuthor: hotAnswer.data.answerAuthor
                                        };
                                    }
                                    else if (hotAnswer.data == null) {
                                        data = {
                                            question: question,
                                            questionAuthor: questionAuthor,
                                            answer: null,
                                            answerAuthor: null
                                        };
                                    }
                                    questionArr_5.push(data);
                                }
                                else if (hotAnswer.code === 0) {
                                    errResult = hotAnswer;
                                }
                                if (i === self.length - 1) {
                                    if (errResult) {
                                        res.json(errResult);
                                        connection.release();
                                    }
                                    else {
                                        res.json({
                                            code: 1,
                                            message: '获取成功',
                                            data: questionArr_5
                                        });
                                        connection.release();
                                    }
                                }
                            });
                        });
                    }
                }
                if (err) {
                    res.json({
                        code: 0,
                        message: '错误',
                        error: err
                    });
                    connection.release();
                }
            });
        });
    };
    QuestionService.prototype.getFollowForUser = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(questionSQL.queryFollowByAuthor, [author], function (err, result) {
                if (err) {
                }
                if (result) {
                    if (result.length > 0) {
                        var questionArr_6 = [];
                        var _loop_2 = function (i) {
                            var ele = result[i];
                            var questionService = new QuestionService();
                            questionService.getFollowQuestionByQuestionId(ele.questionId, function (followResult) {
                                if (followResult.code === 1) {
                                    followResult.data['followTime'] = ele.followtime;
                                    questionArr_6.push(followResult.data);
                                    if (questionArr_6.length === result.length) {
                                        callback({
                                            code: 1,
                                            message: '成功',
                                            data: questionArr_6
                                        });
                                        connection.release();
                                    }
                                }
                                else {
                                    callback(followResult);
                                    connection.release();
                                }
                            });
                        };
                        for (var i = 0; i < result.length; i++) {
                            _loop_2(i);
                        }
                    }
                    else {
                        result = {
                            code: 2,
                            message: '成功',
                            data: null
                        };
                        callback(result);
                        connection.release();
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    };
                    callback(result);
                    connection.release();
                }
            });
        });
    };
    QuestionService.prototype.follow = function (req, res) {
        var querySQl;
        var isFollowed = req.query.isFollowed;
        if (isFollowed == 1) {
            querySQl = questionSQL.deleteFollow;
        }
        else if (isFollowed == 0) {
            querySQl = questionSQL.addFollow;
        }
        pool.getConnection(function (err, connection) {
            connection.query(querySQl, [req.query.user, req.query.questionId, new Date()], function (err, result) {
                if (err) { }
                if (result) {
                    result = {
                        code: 1,
                        message: '操作成功',
                        data: {
                            isFollowed: isFollowed == 0 ? 1 : 0
                        }
                    };
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '错误',
                        error: err
                    };
                }
                res.json(result);
                connection.release();
            });
        });
    };
    return QuestionService;
}());
exports.QuestionService = QuestionService;
var Question = /** @class */ (function () {
    function Question(questionId, questionTitle, questionContent, questionAuthor, questiontime) {
        this.questionId = questionId;
        this.questionTitle = questionTitle;
        this.questionContent = questionContent;
        this.questionAuthor = questionAuthor;
        this.questiontime = questiontime;
    }
    return Question;
}());
exports.Question = Question;
