"use strict";

const GamesDB = require('../models/GamesDB')

var gamesDB = new GamesDB();

function getAllGames(request, respond)
{
	//Call the getAllMovies() function in the MoviesDB class.
	gamesDB.getAllGames(function(error, result){
		if (error){
			respond.json(error);
		}else{
			respond.json(result);
		}
	});
}

module.exports = { getAllGames };