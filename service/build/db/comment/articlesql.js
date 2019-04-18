var ArticleSQL = {
    insert: 'INSERT INTO article(articleTitle,articleContent,thanks,articleAuthor,time) VALUES(?,?,?,?,?)',
    queryAll: 'SELECT * FROM article,userinfo where article.articleAuthor= userinfo.mobile order by thanks desc  ',
    queryUserByAuthor: 'SELECT * FROM article,userinfo WHERE article.articleAuthor = ? and article.articleAuthor = userinfo.mobile order by article.articletime desc',
    queryUserByLogin: 'SELECT articleId,articleTitle,articleContent,thanks,articleAuthor,time FROM article WHERE mobile = ? and password = ? ',
    addThanks: 'update article set thanks = thanks+1 where articleId = ?',
    search: 'select * from article, userinfo where instr(articleTitle, ? ) > 0 and article.articleAuthor = userinfo.mobile order by thanks desc',
};
module.exports = ArticleSQL;
