"use strict";

//This if to get the connection to the database
var db = require('../db-connection'); // reference of db-connection.js

class GamesDB
	{
		getAllGames(callback)
		{
			var sql = "SELECT * From mydb.game";
			
			// This is to call te built-in query function in the database connection
			db.query(sql, callback);
		}
	}
module.exports = GamesDB;