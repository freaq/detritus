import React, { Component } from 'react';
// import './header.css';

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';

import AppBar from '../../components/AppBar/AppBar.jsx';
import Header from '../../components/Header/Header.jsx';
import Body from '../../components/Body/Body.jsx';


export default class CategoryPage extends Component {

    render() {
        return (
            <MuiContainer maxWidth="md">
                <MuiGrid container spacing={3}>
                    <MuiGrid item xs={12}>
                        <AppBar />
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <Header app={this.props.app} />
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <Body app={this.props.app} />
                    </MuiGrid>
                </MuiGrid>
            </MuiContainer>
        );
    }
}
