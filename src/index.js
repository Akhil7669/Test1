import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddComment from './components/add_comment';
import CommentList from './components/comment_list';
import Utils from './components/utils';
import './assets/style.css';


class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			comments : [
				{ 	
					id : '2',
					name : 'John',
					email:'task@gmail.com',
					text : 'Hello world',
					date : new Utils().getFormattedDate()
				},
				{ 	
					id : '3',
					name : 'Henry',
					email:'task1@gmail.com',
					text : "Edit me",
					date : new Utils().getFormattedDate()
				}
			]
		}
	}

	addComment = (comment) => {
		var comments = this.state.comments;
		comments.push(comment);
		this.setState({comments:comments});
	}

	render = () => {
		return (
			<div>
			
				<div className="container">
				<div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>
				<div className="col-md-4 col-sm-12">
					<h3 style={{color:"#337ab7",display:"inline",margin:"20px 0px"}}>Create post</h3>
				<AddComment addComment = {this.addComment}/>
				</div>
				<div className="col-md-8 col-sm-12">
				<h3 style={{color:"#337ab7",display:"inline",margin:"20px 0px"}}>List of posts</h3>
	
				<CommentList comments = {this.state.comments} />
				</div>
				</div>
				
			
				</div>

			</div>
		);
	}

}


ReactDOM.render(<App />, document.querySelector('.container'));

