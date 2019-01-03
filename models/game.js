"use strict";

class Game {
constructor(game_id, gametitle, poster, rating, description, trailer, developer, languages, dateRelease){
	this.game_id = game_id;
	this.gametitle = gametitle;
	this.poster = poster;
	this.rating = rating;
	this.description = description;
	this.trailer = trailer;
	this.developer = developer;
	this.languages = languages;
	this.dateRelease = dateRelease;
}
// add the get methods here
	getId() {
		return this.game_id;
	}
	getGameTitle() {
		return this.gametitle;
	}
	getPoster() {
		return this.poster;
	}
	getRating() {
		return this.Rating;
	}
	getDescription() {
		return this.description;
	}
	getTrailer() {
		return this.trailer;
	}
	getDeveloper() {
		return this.developere;
	}
	getLanguages() {
		return this.languages;
	}
	getDateRelease() {
		return this.dateRelease;
	}
	
}

module.exports = Game;