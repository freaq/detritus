import React, { Component } from 'react';
import './navigationBar.css';
import Navbar from 'react-bootstrap/Navbar';

export default class NavigationBar extends Component {

  render() {
    const app = this.props.app;

    let content;
    if (app) {
      content = <div>
        <Navbar>
          <Navbar.Brand href="#home">DETRITUS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{this.props.app.name}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>;
    }
    else {
      content = <div><h1>Loading.. please wait!</h1></div>;
    }
    return (
      content
    );
  }
}
