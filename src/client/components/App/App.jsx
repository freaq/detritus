import React, { Component } from 'react';
import './app.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class App extends Component {
  state = { user: null };

  componentDidMount() {

    // for now get all data in one go
    fetch('/api/app')
      .then(res => res.json())
      .then(app => this.setState({ app: app }));
  }

  render() {
    const app = this.state.app;
    console.log(app);
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Header app={this.state.app} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Body app={this.state.app} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
