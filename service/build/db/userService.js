"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('./dbConfig');
var userSQL = require('./usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.init = function (user) {
        this.mobile = user.mobile;
        this.userName = user.userName;
        this.password = user.password;
        this.userDescription = user.userDescription;
        this.userPicture = user.userPicture;
        this.sex = user.sex;
        this.introduction = user.introduction;
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
                        console.log(result);
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
                            message: '修改失败'
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
                        result = {
                            code: 1,
                            message: '获取成功',
                            user: result[0]
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
    return UserService;
}());
exports.UserService = UserService;
