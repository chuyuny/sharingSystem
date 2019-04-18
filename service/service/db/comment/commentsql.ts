const Commentsql = {
    insertForQuestion:'INSERT INTO commentforquestion(commentContent,commentAuthor,questionId,commenttime) VALUES(?,?,?,?)',
    insertForAnswer:'INSERT INTO commentforanswer(commentContent,commentAuthor,questionId,answerId,commenttime) VALUES(?,?,?,?,?)',
    insertForArticle:'INSERT INTO commentforarticle(commentContent,commentAuthor,articleId,commenttime) VALUES(?,?,?,?)',
    queryNewForArticle:'select * from commentforarticle as c,userinfo as u where c.commentAuthor = ? and c.commentAuthor= u.mobile order by c.commenttime desc LIMIT 1;',
    queryNewForAnswer:'select * from commentforanswer as c,userinfo as u  where c.commentAuthor = ? and c.commentAuthor= u.mobile order by c.commenttime desc LIMIT 1;',
    queryNewForQuestion:'select * from commentforquestion as c,userinfo as u  where c.commentAuthor = ?  and c.commentAuthor= u.mobile order by c.commenttime desc LIMIT 1;',
    queryAllForArticle:'SELECT * FROM commentforarticle as c,userinfo as u where c.articleId = ? and c.commentAuthor= u.mobile order by c.commenttime desc  ' ,
    queryAllForQuestion:'SELECT * FROM commentforquestion as c,userinfo as u where c.questionId = ? and c.commentAuthor= u.mobile order by c.commenttime desc  ' ,
    queryAllForAnswer:'SELECT * FROM commentforanswer as c,userinfo as u where c.answerId = ? and c.commentAuthor= u.mobile order by c.commenttime desc  ' ,
};
module.exports = Commentsql;