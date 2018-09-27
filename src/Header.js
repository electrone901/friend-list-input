import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Header extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
				  <img src={logo} className="App-logo" alt="logo" />
				  <h1 className="App-title">Welcome to Friends App</h1>
				</header>
				<h3 className="title"> <strong>Author Name:</strong> {this.props.author}</h3>
				<p className="App-intro">
					This is a very simple React app which is to starting to learn how react passes data down from parent to child and child to parent. 	
				</p>
			</div>
		)
	}
}
