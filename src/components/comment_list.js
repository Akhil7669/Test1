import React, { Component } from 'react';
import CommentListDetail from './comment_list_detail'

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedId : '',search:''};
	}

	highLightBox = (id) => {
		var commentBox;
		var classList;
		
		if(this.state.selectedId) {
			commentBox = document.getElementById(this.state.selectedId);
			classList = commentBox.classList;
			classList.remove('box-highlight');
		}
		commentBox = document.getElementById(id);
		classList = commentBox.classList;
		classList.add('box-highlight');
		this.setState({selectedId : id});

	}
	searchSpace=(event)=>{
		console.log("HI");
		let keyword = event.target.value;
		this.setState({search:keyword})
	  }

	render = () => {
		var that = this;
		var commentList = this.props.comments.filter((data)=>{
			if(this.state.search == null)
				return data
			else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())|| data.text.toLowerCase().includes(this.state.search.toLowerCase())){
				return data
			}
		  }).map (function(comment, i) {
			return <CommentListDetail key={i} comment = {comment} highLightBox = {that.highLightBox}/>
		})

		return (
			<div>
			<div className="row comment-list">
			<input className="form-control" onChange={(e)=>this.searchSpace(e)}  id="search" type="text" placeholder="Search" aria-label="Search" style={{marginTop:"20px",marginBottom:"20px"}}><span style={{zIndex:"100",marginTop:"-42px",position:"relative",float:"left",}} className="glyphicon glyphicon-search"></span></input>
		  		</div>
				  <div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>
			<div className = "comment-list"> {commentList} </div>
			</div>
			</div>
		);
	}
}

/*const CommentList = ({comments}) => {
	var prevId = '';
	if(!comments.length) {
		return <div></div>
	}

	var commentList = comments.map (function(comment, i) {
		return <CommentListDetail key={i} comment = {comment} />
	})

	return (
		<div className = "comment-list"> {commentList} </div>
	);
}*/

export default CommentList;