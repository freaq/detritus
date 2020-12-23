import React, { Component } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from './Progress/Progress.jsx';
import NavigationBar from './NavigationBar/NavigationBar.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <NavigationBar app={this.props.app} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Progress app={this.props.app} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
