import React, { Component } from 'react';
import { withRouter } from "react-router";

import { connect } from "react-redux";

import { setItem } from "../../redux/actions.js";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';
import MuiButton from '@material-ui/core/Button';
import MuiPaper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

class ItemPage extends Component {

    componentDidMount() {

        const itemId = this.props.match.params.itemId;

        // prevent the API from being called multiple times
        if (this.props.item.id !== itemId) {

            fetch('/api/items/' + itemId)
                .then(response => response.json())
                .then(item => {
                    this.props.dispatch(setItem(item));
                });
        }
    }

    buttonOnClick(event) {

        const item = this.props.item;
        item.completed = !item.completed;
        this.props.dispatch(setItem(item));
    }

    render() {

        const item = this.props.item;

        let content;
        if (item) {
            content =
                <MuiContainer maxWidth="md">
                    <MuiGrid container spacing={3}>
                        <MuiGrid item xs={12}>
                            <MuiPaper elevation={3} style={{ padding: '25px' }}>
                                <Typography style={{ paddingRight: 25 }} variant="h4" color="textPrimary">{item.name}</Typography>
                                <Typography style={{ paddingRight: 25 }} variant="subtitle1" color="textPrimary">{item.description}</Typography>
                            </MuiPaper>
                        </MuiGrid>
                        <MuiGrid item xs={12}>
                            <MuiPaper elevation={3} style={{ padding: '25px' }}>
                                <MuiButton variant="contained" color="primary"
                                    onClick={
                                        (event) => {
                                            this.buttonOnClick(event)
                                        }}>
                                    {this.props.item && this.props.item.completed ? 'Completed' : 'Not Completed'}
                                </MuiButton>
                            </MuiPaper>
                        </MuiGrid>
                    </MuiGrid>
                </MuiContainer >;
        }
        else {
            content = <div><h1>Loading.. please wait!</h1></div>;
        }

        return (
            content
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(ItemPage));
