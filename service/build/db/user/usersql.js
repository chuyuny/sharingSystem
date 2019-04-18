var UserSQL = {
    insert: 'INSERT INTO userinfo(mobile,userName,password,userDescription,userPicture,sex,introduction) VALUES(?,?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM userinfo',
    queryUserByMobile: 'SELECT mobile,userName,userDescription,userPicture,sex,introduction FROM userinfo WHERE mobile = ? ',
    queryUserByLogin: 'SELECT mobile,userName,userDescription,userPicture,sex,introduction FROM userinfo WHERE mobile = ? and password = ? ',
    updateP: 'update userinfo set userPicture = ? where mobile = ?',
    updateName: 'update userinfo set userName = ? where mobile = ?',
    updateSex: 'update userinfo set sex = ? where mobile = ?',
    updateDescription: 'update userinfo set userDescription = ? where mobile = ?',
    updateIntroduction: 'update userinfo set introduction = ? where mobile = ?',
    updatePassword: 'update userinfo set password = ? where mobile = ?',
    updateMobile: 'update userinfo set mobile = ? where mobile = ?',
};
module.exports = UserSQL;
