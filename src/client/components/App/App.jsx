import React, { Component } from 'react';
import './app.css';
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
