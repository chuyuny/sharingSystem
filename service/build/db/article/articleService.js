"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var dbConfig = require('../dbConfig');
var articleSQL = require('./articlesql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
var userService_1 = require("../user/userService");
var ArticleService = /** @class */ (function () {
    function ArticleService() {
        this.length = 5;
    }
    ArticleService.prototype.init = function (article) {
        this.articleId = article.articleId;
        this.articleTitle = article.articleTitle;
        this.articleContent = article.articleContent;
        this.thanks = article.thanks;
        this.articleAuthor = article.articleAuthor;
        this.time = article.time;
    };
    ArticleService.prototype.getAllArticles = function (callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryAll, function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    if (result) {
                        var articleArr_1 = [];
                        result.forEach(function (ele, i, self) {
                            var article = new Article(ele.articleId, ele.articleTitle, ele.articleContent, ele.thanks, ele.articleAuthor, ele.articletime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                article: article,
                                articleAuthor: author
                            };
                            articleArr_1.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: articleArr_1
                                };
                                callback(articleArr_1);
                            }
                        });
                    }
                }
                // 以json形式，把操作结果返回给前台页面
                // 释放连接
                connection.release();
            });
        });
    };
    ArticleService.prototype.getMoreHotArticles = function (query, callback) {
        var length = this.length;
        if (query.page) {
            this.getAllArticles(function (allArticles) {
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
                            data: []
                        };
                    }
                }
                else {
                    result = {
                        code: 0,
                        message: '获取错误',
                        data: []
                    };
                }
                callback(result);
            });
        }
    };
    ArticleService.prototype.searchArticle = function (keyword, callback) {
        var str = keyword;
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.search, [str], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var articleArr_2 = [];
                        result.forEach(function (ele, i, self) {
                            var article = new Article(ele.articleId, ele.articleTitle, ele.articleContent, ele.thanks, ele.articleAuthor, ele.articletime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                articleId: ele.articleId,
                                article: article,
                                articleAuthor: author
                            };
                            articleArr_2.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: articleArr_2
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
                        message: '搜索错误',
                        data: []
                    };
                }
                callback(result);
                connection.release();
            });
        });
    };
    ArticleService.prototype.getHotArticles = function (query, callback) {
        if (query.page) {
            var length_1 = this.length;
            this.getAllArticles(function (allArticles) {
                var result;
                if (allArticles.length > query.page * length_1) {
                    result = {
                        code: 1,
                        massage: '获取成功',
                        data: allArticles.slice(0, query.page * length_1)
                    };
                }
                else {
                    result = {
                        code: 1,
                        massage: '获取成功',
                        data: allArticles.slice(0, allArticles.length)
                    };
                }
                callback(result);
            });
        }
    };
    ArticleService.prototype.getArticleListByAuthor = function (mobile, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryUserByAuthor, [mobile], function (err, result) {
                if (result) {
                    if (result.length > 0) {
                        var articleArr_3 = [];
                        result.forEach(function (ele, i, self) {
                            var article = new Article(ele.articleId, ele.articleTitle, ele.articleContent, ele.thanks, ele.articleAuthor, ele.articletime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                article: article,
                                articleAuthor: author
                            };
                            articleArr_3.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '获取文章成功',
                                    data: articleArr_3
                                };
                            }
                        });
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '获取文章成功',
                            data: null
                        };
                    }
                }
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '获取文章错误',
                        err: err
                    };
                }
                callback(result);
                // 释放连接
                connection.release();
            });
        });
    };
    ArticleService.prototype.getNewArticleByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryNewArticle, [author], function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    var articleArr_4 = [];
                    result.forEach(function (ele, i, self) {
                        var article = new Article(ele.articleId, ele.articleTitle, ele.articleContent, ele.thanks, ele.articleAuthor, ele.articletime);
                        var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                        var data = {
                            article: article,
                            articleAuthor: author
                        };
                        articleArr_4.push(data);
                        if (i === self.length - 1) {
                            result = {
                                code: 1,
                                message: '搜索成功',
                                data: articleArr_4[0]
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
    ArticleService.prototype.getArticleDetail = function (articleId, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryArticleDetailById, [articleId], function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: 'err',
                        err: err
                    });
                }
                if (result) {
                    if (result.length > 0) {
                        var articleArr_5 = [];
                        result.forEach(function (ele, i, self) {
                            var article = new Article(ele.articleId, ele.articleTitle, ele.articleContent, ele.thanks, ele.articleAuthor, ele.articletime);
                            var author = new userService_1.UserInfoShow(ele.mobile, ele.userName, ele.userDescription, ele.userPicture, ele.sex, ele.introduction);
                            var data = {
                                article: article,
                                articleAuthor: author
                            };
                            articleArr_5.push(data);
                            if (i === self.length - 1) {
                                result = {
                                    code: 1,
                                    message: '搜索成功',
                                    data: articleArr_5[0]
                                };
                            }
                        });
                    }
                    else {
                        result = {
                            code: 0,
                            message: 'err',
                            err: 'sql'
                        };
                    }
                    callback(result);
                }
                connection.release();
            });
        });
    };
    ArticleService.prototype.addArticle = function (req, res) {
        var article = req.body;
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.insert, [article.articleTitle, article.articleContent, 0, article.articleAuthor, new Date()], function (err, result) {
                if (result) {
                    var articleService = new ArticleService();
                    articleService.getNewArticleByAuthor(article.articleAuthor, function (data) {
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
    ArticleService.prototype.addThanks = function (id, res) {
        var articleId = id;
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.addThanks, [articleId], function (err, result) {
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
    ArticleService.prototype.deleteArticle = function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.delete, [req.query.id], function (err, result) {
                if (result) {
                    result = {
                        code: 1,
                        message: '删除成功',
                    };
                }
                if (err) {
                    console.log(err);
                }
                // 以json形式，把操作结果返回给前台页面
                if (result === undefined) {
                    result = {
                        code: 0,
                        message: '删除失败'
                    };
                }
                res.json(result);
                // 释放连接
                connection.release();
            });
        });
    };
    ArticleService.prototype.getArticleCountByAuthor = function (author, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(articleSQL.queryCountByAuthor, [author], function (err, result) {
                if (err) {
                    callback({
                        code: 0,
                        message: '获取错误',
                        error: err
                    });
                }
                if (result) {
                    if (result.length > 0) {
                        result = {
                            code: 1,
                            message: '获取成功',
                            data: result[0]
                        };
                        callback(result);
                    }
                    else if (result.length === 0) {
                        result = {
                            code: 2,
                            message: '获取成功',
                            data: []
                        };
                        callback(result);
                    }
                }
                connection.release();
            });
        });
    };
    return ArticleService;
}());
exports.ArticleService = ArticleService;
var Article = /** @class */ (function () {
    function Article(articleId, articleTitle, articleContent, thanks, articleAuthor, articletime) {
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleContent = articleContent;
        this.thanks = thanks;
        this.articleAuthor = articleAuthor;
        this.articletime = articletime;
    }
    return Article;
}());
exports.Article = Article;
