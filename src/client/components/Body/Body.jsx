import React, { Component } from 'react';
import './body.css';
import List from './List/List.jsx';

export default class Body extends Component {

  render() {
    return (
      <div>
        <div>Body</div>
        <List app={this.props.app} />
      </div>
    );
  }
}
