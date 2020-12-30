import React, { Component } from 'react';
// import './header.css';

import MaterialUIContainer from '@material-ui/core/Container';
import MaterialUIGrid from '@material-ui/core/Grid';

import AppBar from '../../components/AppBar/AppBar.jsx';
import Header from '../../components/Header/Header.jsx';
import Body from '../../components/Body/Body.jsx';

export default class HomePage extends Component {

    render() {
        return (
            <MaterialUIContainer maxWidth="md">
                <MaterialUIGrid container spacing={3}>
                    <MaterialUIGrid item xs={12}>
                        <AppBar />
                    </MaterialUIGrid>
                    <MaterialUIGrid item xs={12}>
                        <Header app={this.props.app} />
                    </MaterialUIGrid>
                    <MaterialUIGrid item xs={12}>
                        <Body app={this.props.app} />
                    </MaterialUIGrid>
                </MaterialUIGrid>
            </MaterialUIContainer>
        );
    }
}
