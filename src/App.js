import React, { Component } from 'react';
import Header from './Header.js';
import ShowFriendList from './ShowFriendList.js';
import AddFriendForm from './AddFriendForm.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Luis Carbajal',
      newFriend: '',
      friends: [
        "Danny Smith",
        "Phil Williams",
        "Hugo Boss"
      ]
    }
  }

  pushFriendFunc(friend) {
    // concat the new friend to friends
    this.setState({friends: this.state.friends.concat(friend)})
  }

  render() {
    console.log('main', this.state)
    return (
      <div className="App">
        <Header author={this.state.author}/>
        <AddFriendForm pushFriend={this.pushFriendFunc.bind(this)} />
        <ShowFriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
