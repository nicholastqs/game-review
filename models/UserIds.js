"use strict";

class UserIds{
	constructor(iduser, username, userpic, iduserdetails){
		
		this.iduser = iduser;
		this.username = username;
		this.userpic = userpic;
		this.iduserdetails = iduserdetails;
	}
	
	getId(){
		return this.iduser;
	}
	
	getUsername(){
		return this.username;
	}
	
	getUserPic(){
		return this.userpic;
	}
	
	getIdUserDetails(){
		return this.iduserdetails;
	}
	
	setUsername(username){
		this.username = username;
	}
	
	setUserPic(userpic) {
		this.userpic = userpic;
	}
	
	setIdUserDetails(iduserdetails){
		this.iduserdetails = iduserdetails;
	}
}

module.export = UserIds;