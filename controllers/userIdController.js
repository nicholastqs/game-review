"use strict";
const UserIdsDB = require('../models/UserIdsDB');
const UserIds = require('../models/UserIds');

var useridsDB = new UserIdsDB();

function getAllUsers(request, respond){
	useridsDB.getAllUsers(function(error, result){
		if(error){
			respond.json(error);
		}else{
			respond.json(result);
		}	
	});
}
	function addUser(request, respond){
		var userp = new UserIds(null, request.body.username, request.body.userpic);
	
	useridsDB.addUser(userp, function(error, result){
		
		if (error){
			respond.json(error);
		}else{
			respond.json(result);
		}
	});
	}
	function updateUserPic(request, respond)
		{
			
			var Userpicture = new UserIds(parseInt(request.params.iduser), request.body.username, request.body.userpic);
			
			useridesDB.updateUserPic(Userpicture, function(error, result){
				
				if (error){
					respond.json(error);
				}else{
					respond.json(result);
				}
				
			});
		}
function deleteUser(request, respond){
	var usersID = request.params.iduser;
	useridsDB.deleteUser(usersID, function(error, result){
		if(error){
			respond.json(error);
		}else{
			respond.json(result);
		}
	});
}

module.exports = {getAllUsers, updateUserPic, addUser, deleteUser};