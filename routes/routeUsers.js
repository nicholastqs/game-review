"use strict";

const userController = require('../controllers/userController');

function routeUsers(app){
	
	//This URL will auntehnticate by comparing passwords
	app.route('/newUser')
		.post(userController.addComment);

	app.route('/login')
		.post(userController.authenticate);
	
	app.route('/users')
		.get(userController.getAllUsers);
	
	// This URL will authenticate by using the database
	app.route ('/loginByDB')
		.post(userController.authenticateByDB);
	
	//This URL will Update
	app.route('/updateUserFirstName/:username')
		.put(userController.updateUserFirstName);
	
	app.route('/updateUser')
		.post(userController.updateUser);
}

module.exports = {routeUsers};