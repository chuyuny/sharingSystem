var AnswerSQL = {
    insert: 'INSERT INTO article(articleTitle,articleContent,thanks,articleAuthor,time) VALUES(?,?,?,?,?)',
    queryAll: 'SELECT * from  answer ',
    queryAnswerByAuthor: 'SELECT * FROM answer as a,userinfo as u, question as q WHERE a.answerAuthor = ? and a.answerAuthor = u.mobile and a.questionId = q.questionId ',
    queryAllAnswerByQuestionId: 'SELECT * from  answer as a,userinfo as u WHERE a.questionId = ? and a.answerAuthor = u.mobile order by a.thanks desc',
    search: 'select * from answer as a, question as q where instr(a.answerContent, ? ) > 0  and a.questionId = q.questionId  order by a.thanks desc',
};
module.exports = AnswerSQL;
