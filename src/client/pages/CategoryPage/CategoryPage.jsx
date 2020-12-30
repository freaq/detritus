import React, { Component } from 'react';
// import './header.css';

import MUIContainer from '@material-ui/core/Container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppBar from '../../components/AppBar/AppBar.jsx';
import Header from '../../components/Header/Header.jsx';
import Body from '../../components/Body/Body.jsx';


export default class CategoryPage extends Component {

    render() {
        return (
            <MUIContainer maxWidth="md">
                <AppBar />

                <Header app={this.props.app} />
                <Body app={this.props.app} />
            </MUIContainer>
        );
    }
}
