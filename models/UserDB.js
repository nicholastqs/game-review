"use strict";

var db = require('../db-connection'); // reference of db-connection.js

class UserDB{
	addNewUser(user, callback){
		var sql = "INSERT INTO userdetails (username, password, email, gender, dateofcreated, dateofbirth) VALUES (?, ?, ?, ?, ?, ?)";
		
		db.query(sql, [user.getUsername(), user.getPassword(), user.getEmail(), user.getGender(), user.getDateOfCreated(), user.getDateOfBirth()],  callback);
	}
	
		addComment(comment, callback){
		var sql = "INSERT INTO userdetails (username, password, email, gender, dateofcreated, dateofbirth) VALUES (?, ?, ?, ?, ?, ?)";
			
		db.query(sql, [comment.getUsername(), comment.getPassword(), comment.getEmail(),comment.getGender(), comment.getDateOfCreated(), comment.getDateOfBirth()],  callback);
	}
	
	getLoginCredentials(id, callback){
		var sql = "SELECT password FROM userdetails WHERE username = ?";
		
		db.query(sql, [id], callback);
	}
	
	authenticateByDB(id, password, callback) {
		var sql = "SELECT username FROM userdetails WHERE username = ? AND password = ?";
		
		db.query(sql, [id, password], callback);
	}
	
	getAllUsers(callback){
		var sql = "SELECT * FROM userdetails";
		
		db.query(sql, callback);
	}
	
	updateUserFirstName(user, callback){
		var sql = "UPDATE userdetials SET username = ? WHERE username = ?";
		
		db.query(sql, [user.getFirstName(), user.getUserId()], callback);
	}
}

module.exports = UserDB;