import React, { Component } from 'react';
import Comment from './create_comment';

class AddComment extends Component {
	constructor ({props}) {
		super (props);
		this.state = {
			name : { value:'', invalid : false},
			email:  {value:'', invalid : false},
			text : { value : '', invalid : false}
		}
	}

	onChangeEvent = (event) => {
		var value = event.target.value;
		var key = event.target.getAttribute("name");
		var invalid = value ? false : true;
		var object = {};
		object [ key ] = { value : value, invalid : invalid };
		this.setState(object);
	}

	submit = (event) => {
		if (!this.state.name.value || !this.state.name.value) {
			if (!this.state.name.value) {
				this.setState({name : {value:'', invalid : true}});
			}
			if(!this.state.email.value) {
				this.setState({email : { value : '', invalid : true}});
			}
			if(!this.state.text.value) {
				this.setState({text : { value : '', invalid : true}});
			}
			return;
		}
		var comment = new Comment(this.state.name.value, this.state.text.value).getComment();
		this.props.addComment(comment);
		this.reset();
	}

	reset = () => {
		this.setState({
			name : { value:'', invalid : false},
			email : { value : '', invalid : false},
			text : { value : '', invalid : false}
		})

	}
	
	
	render = () => {
		return (
			<div className = "add-comment" style={{marginTop:"20px"}} >
				<div className = "row">
					<div className = "col-sm-12">
				<textarea 
					name = "text" 
					className = {`form-control ${this.state.text.invalid ? 'invalid-entry ' : '' }`} 
					rows="5" 
					onChange = {this.onChangeEvent} 
					value = {this.state.text.value}
					placeholder = "Enter comment"
					>
				</textarea><br/>
				</div>
				</div>
				<div className = "row">
					<div className = "col-sm-12">
						<input 
							name = "name" 
							className = {`form-control ${this.state.name.invalid ? 'invalid-entry' : '' }`} 
							onChange = {this.onChangeEvent} 
							value = {this.state.name.value}
							placeholder = "Enter name"
						/> <br/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-sm-12">
						<input 
							name = "email" 
							type= "email"
							className = {`form-control ${this.state.email.invalid ? 'invalid-entry' : '' }`} 
							onChange = {this.onChangeEvent} 
							value = {this.state.email.value}
							placeholder = "Enter email id"
						/> <br/>
					</div>
				</div>
				<div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>
				<div className = "col-sm-12">
						<button type = "submit" className = "btn btn-danger" onClick = {this.submit}> Submit </button>
					</div>
				</div>
				
			</div>
		);
	}
}




export default AddComment;