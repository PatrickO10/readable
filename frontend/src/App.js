import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Posts from './components/posts'
import logo from './logo.svg';
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="container">
              <div className="App-header">
                  <h1>Welcome to Readable</h1>
              </div>
              <Route exact path='/' render={() => (
                <Posts />
                )}
              />
            </div>
        );
    }
}

export default App;