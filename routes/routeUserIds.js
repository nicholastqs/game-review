"use strict"
const useridController = require('../controllers/userIdController');

function routeUserIds(app){
	app.route('/userIds')
		.get(useridController.getAllUsers)
		.post(useridController.addUser);
	
	app.route('/userIds/:iduser')
		.put(useridController.updateUserPic)
		.delete(useridController.deleteUser);
}

module.exports = {routeUserIds};