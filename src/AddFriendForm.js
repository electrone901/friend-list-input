import React, { Component } from 'react';

export default class AddFriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newFriend: ''
		} 
	}

	addFriend(e) {
		this.setState({newFriend: e.target.value})
	}
	passFriend() {
		// handler that passes the friend to add to the parent
		this.props.pushFriend(this.state.newFriend);
		this.refs.form.reset();
		this.setState({newFriend:''})
	}
	render() {
		return (
			<div className="container">
				<form onSubmit={this.passFriend.bind(this)} ref='form'>
					<input className="input" onChange={this.addFriend.bind(this)} type="text" placeholder="Add a friend" required/>
					<button className="btn btn-primary" type="submit">Add friend</button>
				</form>
			</div>
		)
	}
}