"use strict";

var db = require('../db-connection');
class UserIdsDB{
	getAllUsers(callback){
		var sql = "SELECT * from mydb.user";
		db.query(sql, callback);
	}
	
	addUser(userpic, callback){
		var sql = "INSERT INTO user (username, userpic) VALUES (?, ?)";
		
		db.query(sql, [userpic.getUsername(),userpic.getUserPic()], callback);
	}

	updateUserPic(UserPic, callback)
	{
		var sql = "UPDATE user SET username = ?, userpic = ? WHERE iduser = ?";
		
		return db.query(sql, [user.getUsername(),user.getUserPic(), user.getId()], callback);
	}
		deleteUser(usersID, callback){
		var sql = "DELETE from user WHERE iduser = ?";
		
		return db.query(sql, [usersID], callback);
	}
}

module.exports = UserIdsDB;

