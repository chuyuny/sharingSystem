import {ArticleService} from "../article/articleService";
import {AnswerService} from "../answer/answerService";

export class SearchService {
    public keyword: string;
    constructor() {}
    init(keyword){
        this.keyword = keyword
    }
    getKeywordArr(keyword){
        let keywordArr;
        let newKeywordArr=[];
        for (let i = 0; i < keyword.length; i++) {
            const keywordElement = keyword[i];
            newKeywordArr.push(keywordElement)
            if(newKeywordArr.length === keyword.length-1){
                newKeywordArr = newKeywordArr.filter((ele,index, self)=>{
                    return self.indexOf(ele) === index && ele !== ' ';
                })
            }
        }
        return newKeywordArr
    }
    unique(arr,id){
        let oldArr = arr;
        let newArr = [];//新数组
        for(let i=0;i<oldArr.length;i++){
            let flag = true;
            for(let j=0;j<newArr.length;j++){
                if(oldArr[i][id] == newArr[j][id]){
                    newArr[j]['count']++;
                    flag = false;
                };
            };
            if(flag){
                oldArr[i]['count'] = 1;
                newArr.push(oldArr[i]);
            };
            if(i === oldArr.length-1){
                return newArr.sort((a,b)=> b['count'] - a['count'])
            }
        };
    }
    getSearchArticleResults(keyword,callback){
        let searchArticleResult = [];
        let searchResult;
        const keywordArr = this.getKeywordArr(keyword)
        for (let i = 0; i < keywordArr.length; i++) {
            const keyword = keywordArr[i];
            const articleService = new ArticleService()
            articleService.searchArticle(keyword,function (result) {
                if(result.code === 1 || result.code === 2){
                    if(result.code === 1){
                        result.data.forEach((ele,i)=>{
                            searchArticleResult.push(ele);
                        })
                    }
                } else if(result.code ===0){
                    searchResult = result
                    callback(searchResult);
                    return;
                }
                if(i === keywordArr.length-1 ){
                    let searchResult ;
                    if(searchArticleResult.length>0){
                        const searchService =new SearchService()
                        let result = searchService.unique(searchArticleResult,'articleId')
                        searchResult= {
                            code:1,
                            message: '搜索成功',
                            data: result
                        }
                    } else {
                        searchResult= {
                            code:2,
                            message: '搜索成功',
                            data: null
                        }
                    }
                    callback(searchResult)
                }
            })

        }
    }
    getSearchAnswerResults(keyword,callback){
        let searchAnswerResult = [];
        let searchResult2;
        const keywordArr = this.getKeywordArr(keyword)
        for (let i = 0; i < keywordArr.length; i++) {
            const keyword = keywordArr[i];
            const answerService = new AnswerService()
            answerService.searchAnswer(keyword,function (searchAnswer) {
                if(searchAnswer.code === 1 || searchAnswer.code === 2){
                    if(searchAnswer.code === 1){
                        searchAnswer.data.forEach((ele,i)=>{
                            searchAnswerResult.push(ele);
                        })
                    }
                } else if(searchAnswer.code ===0){
                    searchResult2 = searchAnswer;
                    callback(searchResult2);
                    return;
                }
                if(i === keywordArr.length-1 ){
                    let searchResult2;
                    if(searchAnswerResult.length>0){
                        const searchService = new SearchService()
                        let result = searchService.unique(searchAnswerResult,'answerId')
                        searchResult2 = {
                            code:1,
                            message: '搜索成功',
                            data: result
                        }
                    } else {
                        searchResult2 = {
                            code:2,
                            message: '搜索成功',
                            data: null
                        }
                    }
                    callback(searchResult2)
                }
            })

        }
    }
    getSearchResults(req,res){
        const keyword =req.query.keyword;
        let result;
         this.getSearchArticleResults(keyword,function (searchArticle) {
             let searchArticleResult;
            if(searchArticle.code = 1 || searchArticle.code ===2){
                if(searchArticle.code === 1){
                    searchArticleResult = searchArticle.data;
                }
                const searchService = new SearchService();
                searchService.getSearchAnswerResults(keyword,function (searchAnswer) {
                    let searchAnswerResult;
                    if(searchAnswer.code === 1 || searchAnswer.code === 2){
                        if(searchAnswer.code = 1){
                            searchAnswerResult = searchAnswer.data;
                        }
                        result = searchArticleResult && searchAnswerResult? searchArticleResult.concat(searchAnswerResult): searchAnswerResult ? searchAnswerResult : searchArticleResult ?searchArticleResult:null;
                        let searchResult;
                        if(result){
                            searchResult= {
                                code: 1,
                                message:'搜索成功',
                                data: result
                            }
                        } else {
                            searchResult= {
                                code: 1,
                                message:'搜索成功',
                                data: null
                            }
                        }
                        res.json(searchResult)
                    } else  if(searchAnswer.code = 0) {
                        res.json(searchArticle);
                    }
                })
            } else if(searchArticle.code = 0) {
                res.json(searchArticle);
                return;
            }
        })
    }
}