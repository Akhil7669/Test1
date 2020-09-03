import React, { Component } from 'react';
import Utils from './utils';

class CommentListDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { edit : false, invalidClass : '',reply:false};
		this.utils = new Utils();
	}

	onClickDone = (event) => {
		var comment = this.props.comment;
		if(comment.text) {
			this.setState({edit : false})
			comment.date = this.utils.getFormattedDate();
			this.setState({invalidClass : ''});
		}
		else {
			this.setState({invalidClass : 'invalid-entry'});
		}
	}

	
	onClickBox = (event) => {
		if(event.target.getAttribute("class").indexOf('comment-edit') === -1) {
			this.props.highLightBox(this.props.comment.id);
		}
	}
	onDelete(input){
		document.getElementById(input).outerHTML = "";
	}
	handleShow(){
		
		this.setState({
			reply: !this.state.reply
		})
	}
	render = () => {
		var comment = this.props.comment;
		var commentBox;
		var reply;
		if(this.state.reply){
			reply = (<div className="row reply">
				<div className="col-md-6 col-sm-12">
				<input type="text" name="uname" className="form-control" style={{margin:"5px"}} placeholder="Enter username"/>
				<input type="email" name="uname" className="form-control" style={{margin:"5px"}} placeholder="Enter email"/>
				<textarea type="text" name="ufeedback" placeholder="Usertext" style={{margin:"5px"}} className="form-control"/>
				<button type="button" name="submit" className="btn btn-info" style={{margin:"5px"}} value="submit">Cancel</button>
				<button type="button" name="submit" className="btn btn-primary" style={{margin:"5px"}} value="submit">Submit</button>
				</div>
				</div>
			)
		} else {
			<div></div>
		}
		
		if(this.state.edit) {
			commentBox = (
			<div className = "panel panel-default row" id = {comment.id}>
				<div className = "panel-body">
					<textarea className = {`form-control ${this.state.invalidClass}`} rows = "2" onChange = {(event) => comment.text = event.target.value} defaultValue = {comment.text}></textarea>
				</div>
				<div className = "panel-footer">
					<span className = "comment-name">{comment.name} </span>
					<span className = "comment-email">{comment.email} </span>
					<span className = "comment-done pull-right" onClick = {() => this.onDelete(comment.id)}>Delete</span>
					<span className = "comment-done pull-right" onClick = {() => this.onClickDone(event)}>Update</span>
				</div>
			</div>)
		}
		else {
			
			commentBox = (
			<div className = "panel panel-default row comment-box" onClick = {this.onClickBox} id = {comment.id}>
				<div className = "panel-body">
					{comment.text}
				</div>
				<div className = "panel-footer"> 
					<span className = "comment-name">{comment.name} </span>
					<span className = "comment-email">{comment.email} </span>
					<span className = "comment-date"> {comment.date} </span>
					<span className = "comment-edit pull-right-3" 
						onClick = {(event) => this.setState({edit : true})}>
						Edit
					</span>
					<span className = "comment-edit pull-right" 
						onClick = {(event) =>{this.handleShow()}}>
						Reply
					</span>
				</div>
			</div>)
		}
		return (
			<div>
				{commentBox}
				{reply}
			</div> 
		);
	}
}

export default CommentListDetail;