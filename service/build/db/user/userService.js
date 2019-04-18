"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入MySQL模块
var answerService_1 = require("../answer/answerService");
var articleService_1 = require("../article/articleService");
var questionService_1 = require("../question/questionService");
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
var userSQL = require('./usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.init = function (user) {
        return new UserInfoShow(user.mobile, user.userName, user.userDescription, user.userPicture, user.sex, user.introduction);
    };
    UserService.prototype.getAllUser = function (callback) {
        var allUser;
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryAll, function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    callback(result);
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        });
    };
    UserService.prototype.updateUserInfo = function (date, callback) {
        pool.getConnection(function (err, connection) {
            if (date.type === 'userPicture') {
                connection.query(userSQL.updateP, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '修改失败'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'userName') {
                connection.query(userSQL.updateName, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '修改失败'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'sex') {
                connection.query(userSQL.updateSex, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '修改失败'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'description') {
                connection.query(userSQL.updateDescription, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '修改失败'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'introduction') {
                connection.query(userSQL.updateIntroduction, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 0,
                            message: '修改失败'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'password') {
                connection.query(userSQL.updatePassword, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (result === undefined) {
                        result = {
                            code: 2,
                            message: '修改失败',
                            error: err
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
            if (date.type === 'mobile') {
                connection.query(userSQL.updateMobile, [date.value, date.user.mobile], function (err, result) {
                    if (result) {
                        result = {
                            code: 1,
                            message: '修改成功'
                        };
                    }
                    if (err) {
                        result = {
                            code: 0,
                            message: '该号码已存在，请重新输入'
                        };
                    }
                    callback(result);
                    connection.release();
                });
            }
        });
    };
    UserService.prototype.getUserByMobile = function (mobile, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryUserByMobile, [mobile], function (err, result) {
                if (result) {
                    if (result.length <= 0) {
                        result = {
                            code: 0,
                            message: '用户不存在',
                            user: {}
                        };
                    }
                    else {
                        var userService = new UserService();
                        var user = userService.init(result[0]);
                        result = {
                            code: 1,
                            message: '获取成功',
                            user: user
                        };
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            });
        });
    };
    UserService.prototype.userLoginIdentify = function (user, callback) {
        this.init(user);
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryUserByLogin, [user.mobile, user.password], function (err, result) {
                if (result) {
                    if (result.length <= 0) {
                        result = {
                            code: 0,
                            message: 'error',
                            date: {
                                login: false,
                                userInfo: null,
                                message: '用户不存在/密码错误'
                            }
                        };
                    }
                    else {
                        result = {
                            code: 1,
                            message: '成功',
                            date: {
                                login: true,
                                userInfo: result[0],
                                message: '登录成功'
                            }
                        };
                    }
                }
                callback(result);
                // 释放连接
                connection.release();
            });
        });
    };
    UserService.prototype.userRegisterIndentify = function (user, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.queryUserByMobile, [user.mobile], function (err, result) {
                if (result.length > 0) {
                    result = {
                        code: 2,
                        message: '该号码已注册'
                    };
                    callback(result);
                    connection.release();
                }
                else {
                    connection.query(userSQL.insert, [user.mobile, user.userName, user.password, '', '', '', ''], function (err, result) {
                        if (result) {
                            result = {
                                code: 1,
                                message: '注册成功',
                            };
                        }
                        // 以json形式，把操作结果返回给前台页面
                        if (result === undefined) {
                            result = {
                                code: 0,
                                message: '注册失败'
                            };
                        }
                        callback(result);
                        // 释放连接
                        connection.release();
                    });
                }
            });
            // if(hasUser.length<= 0){
            //
            // }
        });
    };
    UserService.prototype.getUserActive = function (req, callback) {
        // let user = req.params.user
        var user = req.params.user;
        var answerService = new answerService_1.AnswerService();
        var dataArr = [];
        answerService.getAnswerListByAuthor(user, function (answerList) {
            if (answerList.code === 1 || answerList.code === 2) {
                if (answerList.code === 1) {
                    answerList.data.forEach(function (ele, i, self) {
                        var answer = ele;
                        answer['time'] = ele.answer.answertime;
                        answer['type'] = 'answer';
                        dataArr.push(answer);
                    });
                }
                var articleService = new articleService_1.ArticleService();
                articleService.getArticleListByAuthor(user, function (articleList) {
                    if (articleList.code === 1 || articleList.code === 2) {
                        if (articleList.code === 1) {
                            articleList.data.forEach(function (ele, i, self) {
                                var article = ele;
                                article['time'] = ele.article.articletime;
                                article['type'] = 'article';
                                dataArr.push(article);
                            });
                        }
                        var questionService = new questionService_1.QuestionService();
                        questionService.getQuestionsByAuthor(user, function (questionArr) {
                            if (questionArr.code === 1 || questionArr.code === 2) {
                                if (questionArr.code === 1) {
                                    questionArr.data.forEach(function (ele, i, self) {
                                        var question = ele;
                                        question['time'] = ele.question.questiontime;
                                        question['type'] = 'question';
                                        dataArr.push(question);
                                    });
                                }
                                var questionService_2 = new questionService_1.QuestionService();
                                questionService_2.getFollowForUser(user, function (followArr) {
                                    if (followArr.code === 1 || followArr.code === 2) {
                                        if (followArr.code === 1) {
                                            followArr.data.forEach(function (ele, i, self) {
                                                var question = ele;
                                                question['time'] = ele.followTime;
                                                question['type'] = 'follow';
                                                dataArr.push(question);
                                                if (i === self.length - 1) {
                                                    dataArr.sort(function (a, b) { return b['time'] - a['time']; });
                                                    callback({
                                                        code: 1,
                                                        message: '成功',
                                                        data: dataArr
                                                    });
                                                }
                                            });
                                        }
                                        else if (followArr.code === 2) {
                                            if (dataArr.length > 0) {
                                                callback({
                                                    code: 1,
                                                    message: '成功',
                                                    data: dataArr
                                                });
                                            }
                                            else {
                                                callback({
                                                    code: 1,
                                                    message: '成功',
                                                    data: null
                                                });
                                            }
                                        }
                                    }
                                    else if (followArr.code === 0) {
                                        callback(followArr);
                                    }
                                });
                            }
                            else {
                                callback(questionArr);
                            }
                        });
                    }
                    else {
                        callback(articleList);
                    }
                });
            }
            else {
                callback(answerList);
            }
        });
    };
    return UserService;
}());
exports.UserService = UserService;
var UserInfoShow = /** @class */ (function () {
    function UserInfoShow(mobile, userName, userDescription, userPicture, sex, introduction) {
        this.mobile = mobile;
        this.userName = userName;
        this.userDescription = userDescription;
        this.userPicture = userPicture;
        this.sex = sex;
        this.introduction = introduction;
    }
    return UserInfoShow;
}());
exports.UserInfoShow = UserInfoShow;
