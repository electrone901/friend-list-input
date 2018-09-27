import React, { Component } from 'react';
import './App.css';

export default class ShowFriendList extends Component {

	render() {
		return (
			<div className="container">
			 <h1 className="friend">Friend List</h1>
			 <ul className="list-group">
			 	{this.props.friends.map((friend) => {
		 			return <li className="list-group-item" key={friend}>{friend}
		 				   </li>
		 		})}
			 </ul>
			</div>
		)
	}
}