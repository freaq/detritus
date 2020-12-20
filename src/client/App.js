import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import User from './components/User.js';

export default class App extends Component {
  state = { user: null };  

  componentDidMount() {
    fetch('/api/user')
      .then(res => res.json())
      .then(user => this.setState({ user: user }));
  }

  render() {
    const user = this.state.user;
    console.log(user);
    return (      
      <User user={this.state.user}></User>      
    );
  }
}
