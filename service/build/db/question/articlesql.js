var QuestionSQL = {
    insert: 'INSERT INTO article(articleTitle,articleContent,thanks,articleAuthor,time) VALUES(?,?,?,?,?)',
    queryAll: 'SELECT * FROM article,userinfo where article.articleAuthor= userinfo.mobile order by thanks desc  ',
    queryUserByAuthor: 'SELECT * FROM article,userinfo WHERE article.articleAuthor = ? and article.articleAuthor = userinfo.mobile ',
    queryUserByLogin: 'SELECT articleId,articleTitle,articleContent,thanks,articleAuthor,time FROM article WHERE mobile = ? and password = ? ',
    updateP: 'update article set userPicture = ? where mobile = ?',
    updateName: 'update article set userName = ? where mobile = ?',
    search: 'select * from article where articleTitle like ? order by thanks desc',
};
module.exports = QuestionSQL;
