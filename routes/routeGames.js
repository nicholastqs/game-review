"use strict";
const gameController =require('../controllers/gameController');

function routeGames(app)
{
	//When the URL is http://localhost:8080/movies, and when HTTP, GET method is requested from the client, the get() function will be used to call the getAllmovies() function in the controller. The HTTP GET method is called in the getMovieData() function in movies.js. The codes that called it is (open the movies.js file to see): var request = new XMLHttpRequest();    request.open('GET', movie_url, true);
	
	app.route('/games')
		.get(gameController.getAllGames);
}

module.exports = {routeGames};