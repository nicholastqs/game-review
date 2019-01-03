"use strict";
class Comment {
constructor(comment_id, game, username, review, rating, date, game_id, user_id) {
this.comment_id = comment_id;
this.game = game;
this.username = username;
this.review = review;
this.rating = rating;
this.date = date;
this.game_id = game_id;
this.user_id = user_id;
}
//add the set and get methods here
getId() {
        return this.comment_id;
    }
getGame() {
        return this.game;
    }
getUsername() {
        return this.username;
    }
getReview() {
        return this.review;
    }
getRating() {
        return this.rating;
    }
getDate() {
        return this.date;
    }
getgameId() {
        return this.game_id;
	}
getuserId() {
        return this.user_id;
	}


setGame(game) {
        this.game = game;
    }
setUsername(username) {
        this.username = username;
	}
setReview(review) {
        this.review = review;
    }
setRating(rating) {
        this.rating = rating;
    }
setDate(date) {
        this.date = date;
    }


}
module.exports = Comment;
