"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '1mb' })); //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
    extended: true
}));
var userService_1 = require("./db/user/userService");
var articleService_1 = require("./db/article/articleService");
var search_1 = require("./db/search/search");
var answerService_1 = require("./db/answer/answerService");
var questionService_1 = require("./db/question/questionService");
var commentService_1 = require("./db/comment/commentService");
//将访问的路径修改为根目录下的client下的index.html
app.use('/', express.static(path.join(__dirname, '..', 'myWeb')));
// app.use('/',express.static(path.join(__dirname,'model','resource','20190322095949_791.jpg')));
var multipart = require('connect-multiparty');
//接收表单
var multipartMiddleware = multipart();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('If-Modified-Since', '0');
    // res.header('Cache-Control', 'no-cache');
    next();
};
// 清除缓存
app.disable('etag');
app.use(allowCrossDomain);
var uploadModel = require('./model/upload-model'); //上传model
// 获取用户信息
app.get('/api/getUserInfo/:mobile', function (req, res) {
    var userService = new userService_1.UserService();
    var mobile = req.params.mobile;
    userService.getUserByMobile(mobile, function (result) {
        res.json(result);
    });
});
// 登录验证
app.post('/api/loginIdentify', function (req, res) {
    var userService = new userService_1.UserService();
    var user = req.body;
    userService.userLoginIdentify(user, function (result) {
        res.send(result);
    });
});
//注册
app.post('/api/register', function (req, res) {
    var user = req.body;
    var hasUser = [];
    var userService = new userService_1.UserService();
    userService.userRegisterIndentify(user, function (result) {
        if (result.code === 1) {
            userService.getUserByMobile(user.mobile, function (userInfo) {
                result['date'] = userInfo;
                res.send(result);
            });
        }
    });
});
app.post('/api/upDateUserPicture', function (req, res) {
    var user = req.query;
    var userService = new userService_1.UserService();
    uploadModel.uploadPhoto(req, 'user-img', function (err, fields, uploadPath) {
        if (err) {
            return res.json({
                errCode: 0,
                errMsg: '上传图片错误'
            });
        }
        var date = {
            value: 'assets' + uploadPath,
            type: 'userPicture',
            user: user
        };
        userService.updateUserInfo(date, function (result) {
            // res.send(result);
            if (result.code === 1) {
                res.json({
                    code: 1,
                    errMsg: '上传成功',
                    fields: fields,
                    uploadPath: 'assets' + uploadPath
                });
            }
            else {
                res.send(result);
            }
        });
    });
});
app.post('/api/uploadFile', function (req, res) {
    uploadModel.uploadPhoto(req, 'resource', function (err, fields, uploadPath) {
        if (err) {
            return res.json({
                errCode: 0,
                errMsg: '上传图片错误'
            });
        }
        res.json({
            code: 1,
            errMsg: '上传成功',
            fields: fields,
            uploadPath: uploadPath
        });
    });
});
app.post('/api/upDateUserInfo', function (req, res) {
    var date = req.body;
    var user = req.query;
    var userService = new userService_1.UserService();
    userService.updateUserInfo(date, function (result) {
        res.send(result);
    });
});
app.get('/api/getUserActive/:user', function (req, res) {
    var userService = new userService_1.UserService();
    userService.getUserActive(req, function (result) {
        res.json(result);
    });
});
//搜索
app.get('/api/search', function (req, res) {
    var searchService = new search_1.SearchService();
    searchService.getSearchResults(req, res);
});
//文章
app.post('/api/addArticle', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.addArticle(req, res);
});
app.get('/api/getUserArticles/:userMobile', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.getArticleListByAuthor(req.params.userMobile, function (result) {
        res.json(result);
    });
});
app.get('/api/getHotArticles', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.getHotArticles(req.query, function (result) {
        res.json(result);
    });
});
app.get('/api/getMoreHotArticles', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.getMoreHotArticles(req.query, function (result) {
        res.json(result);
    });
});
app.get('/api/getArticleDetail/:articleId', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.getArticleDetail(req.params.articleId, function (result) {
        res.json(result);
    });
});
app.get('/api/deleteArticle', function (req, res) {
    var articleService = new articleService_1.ArticleService();
    articleService.deleteArticle(req, res);
});
//问题
app.post('/api/getQuestionDetail', function (req, res) {
    var questionService = new questionService_1.QuestionService();
    questionService.getQuestionDetailByQuestionId(req, res);
});
app.get('/api/getHotQuestion', function (req, res) {
    var questionService = new questionService_1.QuestionService();
    questionService.getHotQuestion(req, res);
});
app.post('/api/addQuestion', function (req, res) {
    var questionService = new questionService_1.QuestionService();
    questionService.addQuestion(req, res);
});
app.get('/api/getQuestionForUser/:userMobile', function (req, res) {
    var author = req.params.userMobile;
    var questionService = new questionService_1.QuestionService();
    questionService.getQuestionsByAuthor(author, function (result) {
        res.json(result);
    });
});
app.get('/api/getWriteAnswerQuestionList', function (req, res) {
    var questionService = new questionService_1.QuestionService();
    questionService.getWriteAnswerQuestionList(req, res);
});
app.get('/api/getFollowForUser/:userMobile', function (req, res) {
    var author = req.params.userMobile;
    var questionService = new questionService_1.QuestionService();
    questionService.getFollowForUser(author, function (result) {
        res.json(result);
    });
});
app.get('/api/follow', function (req, res) {
    var questionService = new questionService_1.QuestionService();
    questionService.follow(req, res);
});
//回答
app.post('/api/addAnswer', function (req, res) {
    var answerService = new answerService_1.AnswerService();
    answerService.addAnswer(req, res);
});
app.get('/api/getUserAnswers/:userMobile', function (req, res) {
    var answerService = new answerService_1.AnswerService();
    answerService.getAnswerListByAuthor(req.params.userMobile, function (result) {
        res.json(result);
    });
});
app.get('/api/addThanks', function (req, res) {
    if (req.query.type === 'answer') {
        var answerService = new answerService_1.AnswerService();
        answerService.addThanks(req.query.id, res);
    }
    if (req.query.type === 'article') {
        var articleService = new articleService_1.ArticleService();
        articleService.addThanks(req.query.id, res);
    }
    // if(req.query.)
});
app.get('/api/getRecommendAnswer', function (req, res) {
    var answerService = new answerService_1.AnswerService();
    answerService.getRecommendAnswer(req.query, function (result) {
        res.json(result);
    });
});
app.get('/api/getMoreRecommendAnswers', function (req, res) {
    var answerService = new answerService_1.AnswerService();
    answerService.getMoreRecommendAnswer(req.query, function (result) {
        res.json(result);
    });
});
app.get('/api/deleteAnswer', function (req, res) {
    var answerService = new answerService_1.AnswerService();
    answerService.deleteAnswer(req, res);
});
//评论
app.get('/api/getComments', function (req, res) {
    var commentService = new commentService_1.CommentService();
    commentService.getComments(req, res);
});
app.post('/api/addComment', function (req, res) {
    var comment = req.body;
    var commentService = new commentService_1.CommentService();
    commentService.addComment(req, res);
});
var server = app.listen(8080, "localhost", function () {
    console.log('服务器已启动，地址是:http://localhost:8080');
});
