var ArticleSQL = {
    insert: 'INSERT INTO article(articleTitle,articleContent,thanks,articleAuthor,articletime) VALUES(?,?,?,?,?)',
    queryAll: 'SELECT * FROM article,userinfo where article.articleAuthor= userinfo.mobile order by thanks desc  ',
    queryUserByAuthor: 'SELECT * FROM article,userinfo WHERE article.articleAuthor = ? and article.articleAuthor = userinfo.mobile order by article.articletime desc',
    queryUserByLogin: 'SELECT articleId,articleTitle,articleContent,thanks,articleAuthor,time FROM article WHERE mobile = ? and password = ? ',
    addThanks: 'update article set thanks = thanks+1 where articleId = ?',
    delete: 'delete from article where articleId = ?',
    queryCountByAuthor: 'select count(*)  as userArticleCount ,articleAuthor from article where articleAuthor = ? and articleAuthor = articleAuthor group by articleAuthor',
    queryNewArticle: 'select * from article as a,userinfo as u  where a.articleAuthor = ? and a.articleAuthor= u.mobile order by a.articletime desc LIMIT 1;',
    queryArticleDetailById: 'select * from article as a,userinfo as u  where a.articleId = ? and a.articleAuthor= u.mobile;',
    search: 'select * from article, userinfo where instr(articleTitle, ? ) > 0 and article.articleAuthor = userinfo.mobile order by thanks desc',
};
module.exports = ArticleSQL;
