var QuestionSQL = {
    insert: 'INSERT INTO question(questionTitle,questionContent,questionAuthor,questiontime) VALUES(?,?,?,?)',
    queryAll: 'SELECT * FROM question,userinfo where question.questionAuthor= userinfo.mobile order by thanks desc  ',
    queryQuestionByAuthor: 'SELECT * FROM question WHERE questionAuthor = ? ',
    queryQuestionByQuestionId: 'SELECT * FROM question WHERE questionId = ? ',
    addFollow: 'INSERT INTO userfollow(user,questionId, followtime) VALUES(?,?,?)',
    deleteFollow: 'DELETE FROM userfollow WHERE user = ? and questionId = ?',
    questionListForWA: 'SELECT * FROM question as q, userinfo as u where q.questionAuthor = u.mobile ORDER BY RAND() LIMIT 5',
    queryFollowByAuthor: 'SELECT * FROM userfollow WHERE user = ? ',
    queryIsFollowed: 'SELECT count(*) as isFollowed FROM userfollow WHERE user = ? and questionId = ?',
    queryByQuestionId: 'SELECT * FROM question,userinfo WHERE question.questionId = ? and question.questionAuthor = userinfo.mobile ',
    search: 'select * from article where articleTitle like ? order by thanks desc',
    queryNewQuestion: 'select * from question as q,userinfo as u  where q.questionAuthor = ? and q.questionAuthor = u.mobile order by q.questiontime desc LIMIT 1;',
    queryCountByQuestion: 'select count(*)  as followCount ,questionId from userfollow where questionId = ? and questionId = questionId group by questionId',
    queryHotQuestionId: 'select  A, T,questionId from hot_question where id > ? limit ? ',
};
module.exports = QuestionSQL;
