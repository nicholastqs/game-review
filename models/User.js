"use strict";

class User{
	constructor(id, username, password, email, gender, dateofcreated, dateofbirth){
		
		this.id = id;
		this.username = username;
		this.password = pw;
		this.email = email;
		this.gender = gender;
		this.dateofcreated = dateofcreated;
		this.dateofbirth = dateofbirth;
	}
	
	getUserId(){
		return this.id;
	}
	
	getUsername(){
		return this.username;
	}
	
	getPassword(){
		return this.password;
	}
	
	getEmail(){
		return this.email;
	}
	
	getGender(){
		return this.gender;
	}
	
	getDateOfCreated(){
		return this.dateofcreated;
	}
	
	getDateOfBirth(){
		return this.dateofbirth;
	}
}
module.export = User;