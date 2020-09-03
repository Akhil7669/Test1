import React from 'react';

class Utils {
	monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	getFormattedDate = (date) => {
		date = date || new Date();
		var day 	= date.getDate();
		var month 	= this.monthMap[parseInt(date.getMonth())];
		var year 	= date.getFullYear().toString().substr(2,2);
		var hour 	= date.getHours();
		var mins 	= date.getMinutes();
		var secs 	= date.getSeconds();
		//var fd = `${day}/${month}/${year} @ ${hour}:${mins}:${secs}`;
		var fd = `${month} ${day}'${year} at ${hour}:${mins}`;
		return fd;	
	}
}


export default Utils;