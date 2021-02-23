import React, { useEffect } from 'react';
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

const ItemPage = (props) => {

    useEffect(() => {
        const itemId = props.match.params.itemId;

        // prevent the API from being called multiple times
        if (props.item.id !== itemId) {

            fetch('/api/items/' + itemId)
                .then(response => response.json())
                .then(item => {
                    props.dispatch(setItem(item));
                });
        }
    });


    const completedButtonOnClick = (event) => {

        const item = props.item;
        item.completed = !item.completed;    
        
        if (props.user.id) {
            item.userId = props.user.id;
        }

        fetch('/api/items/' + item.id, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(updatedItem => {
            props.dispatch(setItem(updatedItem));
        })
    };

    const item = props.item;
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
                                        completedButtonOnClick(event)
                                    }}>
                                {props.item && props.item.completed ? 'Completed' : 'Not Completed'}
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

};

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(ItemPage));
