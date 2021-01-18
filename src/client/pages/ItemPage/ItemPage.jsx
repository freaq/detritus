import React, { Component } from 'react';
import { withRouter } from "react-router";

import { connect } from "react-redux";

import { setItem } from "../../redux/actions.js";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';
import MuiButton from '@material-ui/core/Button';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

class ItemPage extends Component {

    componentDidMount() {

        const itemId = Number(this.props.match.params.itemId);

        // prevent the API from being called multiple times
        if (this.props.item.id !== itemId) {

            fetch('/api/items/' + itemId)
                .then(response => response.json())
                .then(item => {
                    this.props.dispatch(setItem(item));
                });
        }        
    }

    buttonOnClick()
    {
        alert('hi');

    }

    render() {

        const item = this.props.item;

        let content;
        if (item) {
            content =
                <div>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    <MuiButton variant="contained" onClick={this.buttonOnClick}>I have this</MuiButton>                    
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

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(ItemPage));
