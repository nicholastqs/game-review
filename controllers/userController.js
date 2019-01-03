"use strict";

const User = require('../models/User');
const UserDB = require('../models/UserDB');

var userDB = new UserDB();

function searchUser(request, respond) {
    var username = request.params.username;

}
function addNewUser(request, respond){
    var user = new UserDB(null, request.body.username, request.body.pw, request.body.email, request.body.gender, request.body.dateofcreated, request.body.dateofbirth);

userDB.addNewUser(user, function(error, result){
    
    if (error){
        respond.json(error);
    }else{
        respond.json(result);
    }
});
}

	function addComment(request, respond){
	var now = new Date();
	var comment = new UserDB(null, request.body.username, request.body.pw, request.body.email, request.body.gender, request.body.dateofcreated, request.body.dateofbirth);
	
	userDB.addComment(comment, function(error, result){
		
		if (error){
			respond.json(error);
		}else{
			respond.json(result);
		}
	});
	}

// This function authenticates by comparing the input password and password 
// from the database.
function authenticate(request, respond) {
    var input_username = request.body.username; // username from user input
    var input_password = request.body.pw; // password from user input
    var msg = "";

    // Call the getLoginCredentials function from UserDB
    userDB.getLoginCredentials(input_username, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If user can be found, result has one record
            if (result.length > 0) {
                if (input_password == result[0].password) {
                    msg = "1"; // "Success!";
                    console.log(msg);
                } else {
                    msg = "Login Fail!";
                    console.log(msg);
                }
            } else { // If user not found, result has no record
                msg = "User not found!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

// This function authenticates by using the database to look for 
// the requested username and password.
function authenticateByDB(request, respond) {
    var input_username = request.body.username;
    var input_password = request.body.pw;
    var msg = "";

    userDB.authenticateByDB(request.body.username, request.body.pw, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            // If the record can be found, the result will have one item
            // else it will have no item.
            if (result.length > 0) {
                msg = "Success!";
            } else {
                msg = "Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

function updateUserFirstName(request, respond) {
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(request.params.username, null, request.body.firstName, null);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.updateUserFirstName(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function updateUser(request, respond) {
    // Let's say we are only updating the First Name of a user.
    // Create a new User object with the values from the client.
    // For those fields that you don't need to update, use null value. 
    var user = new User(request.body.username, null, request.body.firstName, null);

    // Pass the 'user' instance that you created above into the updateUserFirstName function from the userDB class.
    userDB.updateUserFirstName(user, function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

function getAllUsers(request, respond) {
    userDB.getAllUsers(function(error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }

    });
}

// This function creates a custom message to be sent back
// to the client. 
function prepareMessage(msg) {
    var obj = { "message": msg };

    return obj;
}

module.exports = { authenticate, authenticateByDB, updateUserFirstName, updateUser, getAllUsers, addNewUser , addComment};