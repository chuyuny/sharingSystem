var AnswerSQL = {
    insert: 'INSERT INTO answer(answerContent,questionId,answerAuthor,thanks,answertime) VALUES(?,?,?,?,?)',
    queryAll: 'SELECT * FROM answer as a,userinfo as u, question as q WHERE a.answerAuthor = u.mobile and a.questionId = q.questionId ',
    queryAnswerByQuestionId: 'SELECT * FROM answer WHERE  questionId = ? ',
    queryAnswerByAuthor: 'SELECT * FROM answer as a,userinfo as u, question as q WHERE a.answerAuthor = ? and a.answerAuthor = u.mobile and a.questionId = q.questionId ',
    queryAllAnswerByQuestionId: 'SELECT * from  answer as a,userinfo as u WHERE a.questionId = ? and a.answerAuthor = u.mobile order by a.thanks desc',
    addThanks: 'update answer set thanks = thanks+1 where answerId = ?',
    delete: 'delete from answer where answerId = ?',
    queryCountByAuthor: 'select count(*)  as userAnswerCount ,answerAuthor from answer where answerAuthor = ? and answerAuthor = answerAuthor group by answerAuthor',
    queryCountByQuestion: 'select count(*)  as questionAnswerCount ,questionId from answer where questionId = ? and questionId = questionId group by questionId',
    queryNewAnswer: 'select * from answer as a,userinfo as u  where a.answerAuthor = ? and a.answerAuthor= u.mobile order by a.answertime desc LIMIT 1;',
    queryHotAnswer: 'select * from answer as a,userinfo as u  where a.questionId = ? and a.answerAuthor= u.mobile order by a.thanks desc LIMIT 1;',
    search: 'select * from answer as a, userinfo as u, question as q where instr(q.questionTitle, ? ) > 0  and a.questionId = q.questionId and a.answerAuthor = u.mobile order by a.thanks desc',
};
module.exports = AnswerSQL;
