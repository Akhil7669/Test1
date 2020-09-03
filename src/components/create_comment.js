import React from 'react';
import Utils from './utils';

class Comment {
	
	constructor (name, text,email) {
		this.name = name;
		this.text = text;
		this.email = email;
		this.date = new Utils().getFormattedDate(new Date());
		this.id   = new Date().getTime().toString(); 

	}

	getComment = () => {
		return {
			name : this.name, 
			email : this.email,
			date : this.date, 
			text : this.text,
			id   : this.id
		};
	}
}

export default Comment;