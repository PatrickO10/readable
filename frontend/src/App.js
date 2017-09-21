import React, { Component } from 'react';
import Posts from './components/posts'
import logo from './logo.svg';
import './App.css';


/*
Listed posts are displayed with title, author, number of comments, current score,
and a voting mechanism to upvote or downvote the post. Posts should have
buttons or links for editing or deleting that post.
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Posts />
      </div>
    );
  }
}

export default App;
