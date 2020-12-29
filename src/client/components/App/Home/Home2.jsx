import React, { Component } from 'react';
// import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';

export default class Home2 extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            Home 2!
                            <Header app={this.props.app} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Body app={this.props.app} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
