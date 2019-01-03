"use strict";

var db = require('../db-connection');
class CommentsDB{
	getAllComments(callback){
		var sql = "SELECT * from mydb.comment";
		db.query(sql, callback);
	}
	
	addComment(comment, callback){
		var sql = "INSERT INTO comment (game, username, review, rating, date, game_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
		
		db.query(sql, [comment.getGame(), comment.getUsername(), comment.getReview(), comment.getRating(), comment.getDate(), comment.getgameId(), comment.getuserId], callback);
	}
	
	updateComment(comment, callback)
	{
		var sql = "UPDATE comment SET username = ?, review = ?, rating = ?, date = ? WHERE comment_id = ?";
		
		return db.query(sql, [comment.getUsername(),comment.getReview(), comment.getRating(), comment.getDate(), comment.getId()], callback);
	}
	
	deleteComment(commentID, callback){
		var sql = "DELETE from comment WHERE comment_id = ?";
		
		return db.query(sql, [commentID], callback);
	}
}

module.exports = CommentsDB;

