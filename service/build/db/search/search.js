"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var articleService_1 = require("../article/articleService");
var answerService_1 = require("../answer/answerService");
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.init = function (keyword) {
        this.keyword = keyword;
    };
    SearchService.prototype.getKeywordArr = function (keyword) {
        var keywordArr;
        var newKeywordArr = [];
        for (var i = 0; i < keyword.length; i++) {
            var keywordElement = keyword[i];
            newKeywordArr.push(keywordElement);
            if (newKeywordArr.length === keyword.length - 1) {
                newKeywordArr = newKeywordArr.filter(function (ele, index, self) {
                    return self.indexOf(ele) === index && ele !== ' ';
                });
            }
        }
        return newKeywordArr;
    };
    SearchService.prototype.unique = function (arr, id) {
        var oldArr = arr;
        var newArr = []; //新数组
        for (var i = 0; i < oldArr.length; i++) {
            var flag = true;
            for (var j = 0; j < newArr.length; j++) {
                if (oldArr[i][id] == newArr[j][id]) {
                    newArr[j]['count']++;
                    flag = false;
                }
                ;
            }
            ;
            if (flag) {
                oldArr[i]['count'] = 1;
                newArr.push(oldArr[i]);
            }
            ;
            if (i === oldArr.length - 1) {
                return newArr.sort(function (a, b) { return b['count'] - a['count']; });
            }
        }
        ;
    };
    SearchService.prototype.getSearchArticleResults = function (keyword, callback) {
        var searchArticleResult = [];
        var searchResult;
        var keywordArr = this.getKeywordArr(keyword);
        var _loop_1 = function (i) {
            var keyword_1 = keywordArr[i];
            var articleService = new articleService_1.ArticleService();
            articleService.searchArticle(keyword_1, function (result) {
                if (result.code === 1 || result.code === 2) {
                    if (result.code === 1) {
                        result.data.forEach(function (ele, i) {
                            searchArticleResult.push(ele);
                        });
                    }
                }
                else if (result.code === 0) {
                    searchResult = result;
                    callback(searchResult);
                    return;
                }
                if (i === keywordArr.length - 1) {
                    var searchResult_1;
                    if (searchArticleResult.length > 0) {
                        var searchService = new SearchService();
                        var result_1 = searchService.unique(searchArticleResult, 'articleId');
                        searchResult_1 = {
                            code: 1,
                            message: '搜索成功',
                            data: result_1
                        };
                    }
                    else {
                        searchResult_1 = {
                            code: 2,
                            message: '搜索成功',
                            data: null
                        };
                    }
                    callback(searchResult_1);
                }
            });
        };
        for (var i = 0; i < keywordArr.length; i++) {
            _loop_1(i);
        }
    };
    SearchService.prototype.getSearchAnswerResults = function (keyword, callback) {
        var searchAnswerResult = [];
        var searchResult2;
        var keywordArr = this.getKeywordArr(keyword);
        var _loop_2 = function (i) {
            var keyword_2 = keywordArr[i];
            var answerService = new answerService_1.AnswerService();
            answerService.searchAnswer(keyword_2, function (searchAnswer) {
                if (searchAnswer.code === 1 || searchAnswer.code === 2) {
                    if (searchAnswer.code === 1) {
                        searchAnswer.data.forEach(function (ele, i) {
                            searchAnswerResult.push(ele);
                        });
                    }
                }
                else if (searchAnswer.code === 0) {
                    searchResult2 = searchAnswer;
                    callback(searchResult2);
                    return;
                }
                if (i === keywordArr.length - 1) {
                    var searchResult2_1;
                    if (searchAnswerResult.length > 0) {
                        var searchService = new SearchService();
                        var result = searchService.unique(searchAnswerResult, 'answerId');
                        searchResult2_1 = {
                            code: 1,
                            message: '搜索成功',
                            data: result
                        };
                    }
                    else {
                        searchResult2_1 = {
                            code: 2,
                            message: '搜索成功',
                            data: null
                        };
                    }
                    callback(searchResult2_1);
                }
            });
        };
        for (var i = 0; i < keywordArr.length; i++) {
            _loop_2(i);
        }
    };
    SearchService.prototype.getSearchResults = function (req, res) {
        var keyword = req.query.keyword;
        var result;
        this.getSearchArticleResults(keyword, function (searchArticle) {
            var searchArticleResult;
            if (searchArticle.code = 1 || searchArticle.code === 2) {
                if (searchArticle.code === 1) {
                    searchArticleResult = searchArticle.data;
                }
                var searchService = new SearchService();
                searchService.getSearchAnswerResults(keyword, function (searchAnswer) {
                    var searchAnswerResult;
                    if (searchAnswer.code === 1 || searchAnswer.code === 2) {
                        if (searchAnswer.code = 1) {
                            searchAnswerResult = searchAnswer.data;
                        }
                        result = searchArticleResult && searchAnswerResult ? searchArticleResult.concat(searchAnswerResult) : searchAnswerResult ? searchAnswerResult : searchArticleResult ? searchArticleResult : null;
                        var searchResult = void 0;
                        if (result) {
                            searchResult = {
                                code: 1,
                                message: '搜索成功',
                                data: result
                            };
                        }
                        else {
                            searchResult = {
                                code: 1,
                                message: '搜索成功',
                                data: null
                            };
                        }
                        res.json(searchResult);
                    }
                    else if (searchAnswer.code = 0) {
                        res.json(searchArticle);
                    }
                });
            }
            else if (searchArticle.code = 0) {
                res.json(searchArticle);
                return;
            }
        });
    };
    return SearchService;
}());
exports.SearchService = SearchService;
