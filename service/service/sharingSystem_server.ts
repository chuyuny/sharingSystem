import * as express from 'express'
import {Server} from 'ws'
import * as path from "path";
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.use(bodyParser.urlencoded({
    extended: true
}));
import { UserService} from './db/user/userService';
import { ArticleService } from "./db/article/articleService";
import {SearchService} from "./db/search/search";
import {AnswerService} from "./db/answer/answerService";
import {QuestionService} from "./db/question/questionService";
import {CommentService} from "./db/comment/commentService";
//将访问的路径修改为根目录下的client下的index.html

app.use('/',express.static(path.join(__dirname,'..','myWeb')));
// app.use('/',express.static(path.join(__dirname,'model','resource','20190322095949_791.jpg')));

const multipart = require('connect-multiparty');
//接收表单
const multipartMiddleware = multipart();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('If-Modified-Since', '0');
    // res.header('Cache-Control', 'no-cache');
    next();
}
// 清除缓存
app.disable('etag')
app.use(allowCrossDomain);
const uploadModel = require('./model/upload-model');//上传model

// 获取用户信息
app.get('/api/getUserInfo/:mobile', function (req, res) {
    const userService = new UserService();
    const mobile = req.params.mobile;
    userService.getUserByMobile(mobile,function (result) {
        res.json(result);
    })
});
// 登录验证
app.post('/api/loginIdentify', function (req, res) {
    const userService = new UserService();
    const user = req.body;
    userService.userLoginIdentify(user,function (result) {
        res.send(result);
    })
});
//注册
app.post('/api/register',function (req,res) {
    let user = req.body;
    let hasUser = [];
    const userService = new UserService();
    userService.userRegisterIndentify(user,function (result) {
        if(result.code === 1){
            userService.getUserByMobile(user.mobile,function (userInfo) {
                result['date'] = userInfo;
                res.send(result);
            })
        }
    })
})
app.post('/api/upDateUserPicture',function (req,res) {
    let user = req.query;
    const userService = new UserService();
    uploadModel.uploadPhoto(req,'user-img',function(err,fields,uploadPath){
        if(err){
            return res.json({
                errCode : 0,
                errMsg : '上传图片错误'
            });
        }
        const date = {
            value: 'assets' + uploadPath,
            type: 'userPicture',
            user: user
        };
        userService.updateUserInfo(date,function (result) {
            // res.send(result);
            if(result.code === 1){
                res.json({
                    code : 1,
                    errMsg : '上传成功',
                    fields :  fields,
                    uploadPath : 'assets' + uploadPath
                });
            }else {
                res.send(result);
            }
        })

    });
})
app.post('/api/uploadFile',function (req,res) {
    uploadModel.uploadPhoto(req,'resource',function(err,fields,uploadPath){
        if(err){
            return res.json({
                errCode : 0,
                errMsg : '上传图片错误'
            });
        }
        res.json({
            code : 1,
            errMsg : '上传成功',
            fields :  fields,
            uploadPath : uploadPath
        });
        })
})
app.post('/api/upDateUserInfo',function (req,res) {
    let date = req.body;
    let user = req.query;
    const userService = new UserService();
        userService.updateUserInfo(date,function (result) {
            res.send(result);
        })

})
app.get('/api/getUserActive/:user',function (req,res) {
    const userService = new UserService()
    userService.getUserActive(req,function (result) {
        res.json(result);
    });
})

//搜索
app.get('/api/search',function (req,res) {
    const searchService = new SearchService()
    searchService.getSearchResults(req,res)
})
//文章

app.post('/api/addArticle',function (req,res) {
    const articleService = new ArticleService();
    articleService.addArticle(req,res)
})
app.get('/api/getUserArticles/:userMobile',function (req,res) {
    const articleService = new ArticleService();
    articleService.getArticleListByAuthor(req.params.userMobile, function (result) {
        res.json(result)
    })
})
app.get('/api/getHotArticles',function (req,res) {
    const articleService = new ArticleService();
    articleService.getHotArticles(req.query, function (result) {
        res.json(result)
    })
})
app.get('/api/getMoreHotArticles',function (req,res) {
    const articleService = new ArticleService();
    articleService.getMoreHotArticles(req.query, function (result) {
        res.json(result)
    })
})
app.get('/api/getArticleDetail/:articleId',function (req,res) {
    const articleService = new ArticleService();
    articleService.getArticleDetail(req.params.articleId, function (result) {
            res.json(result)
        })
})
app.get('/api/deleteArticle',function (req,res) {
    const articleService = new ArticleService();
    articleService.deleteArticle(req,res)
})

//问题
app.post('/api/getQuestionDetail', function (req,res) {
    const questionService = new QuestionService();
    questionService.getQuestionDetailByQuestionId(req,res);
})
app.get('/api/getHotQuestion', function (req,res) {
    const questionService = new QuestionService();
    questionService.getHotQuestion(req,res);
})
app.post('/api/addQuestion', function (req,res) {
    const questionService = new QuestionService();
    questionService.addQuestion(req,res);
})

app.get('/api/getQuestionForUser/:userMobile', function (req,res) {
    const author = req.params.userMobile;
    const questionService = new QuestionService();
    questionService.getQuestionsByAuthor(author,function (result) {
        res.json(result);
    });
})
app.get('/api/getWriteAnswerQuestionList', function (req,res) {
    const questionService = new QuestionService();
    questionService.getWriteAnswerQuestionList(req,res);
})
app.get('/api/getFollowForUser/:userMobile', function (req,res) {
    const author = req.params.userMobile;
    const questionService = new QuestionService();
    questionService.getFollowForUser(author,function (result) {
        res.json(result);
    });
})
app.get('/api/follow', function (req,res) {
    const questionService = new QuestionService();
    questionService.follow(req,res);
})
//回答
app.post('/api/addAnswer',function (req,res) {
    const answerService = new AnswerService();
    answerService.addAnswer(req,res)
})
app.get('/api/getUserAnswers/:userMobile',function (req,res) {
    const answerService = new AnswerService();
    answerService.getAnswerListByAuthor(req.params.userMobile, function (result) {
        res.json(result)
    })
})
app.get('/api/addThanks',function (req,res) {
    if(req.query.type === 'answer'){
        const answerService = new  AnswerService();
        answerService.addThanks(req.query.id,res)
    }
    if(req.query.type === 'article'){
        const articleService = new  ArticleService();
        articleService.addThanks(req.query.id,res)
    }
    // if(req.query.)
})
app.get('/api/getRecommendAnswer',function (req,res) {
    const answerService = new AnswerService();
    answerService.getRecommendAnswer(req.query, function (result) {
        res.json(result)
    })
})
app.get('/api/getMoreRecommendAnswers',function (req,res) {
    const answerService = new AnswerService();
    answerService.getMoreRecommendAnswer(req.query, function (result) {
        res.json(result)
    })
})
app.get('/api/deleteAnswer',function (req,res) {
    const answerService = new AnswerService();
    answerService.deleteAnswer(req,res)
})

//评论
app.get('/api/getComments', function (req,res) {
    const commentService = new CommentService()
    commentService.getComments(req,res)
})
app.post('/api/addComment', function (req,res) {
    const comment = req.body;
    const commentService = new CommentService()
    commentService.addComment(req,res)

})
const server = app.listen(8080,"localhost",()=>{
    console.log('服务器已启动，地址是:http://localhost:8080')
})

