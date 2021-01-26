import React, { Component } from 'react';
import { withRouter } from "react-router";

import { connect } from "react-redux";

import { setCategory } from "../../redux/actions.js";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';
import MuiPaper from '@material-ui/core/Paper';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import ItemList from '../../components/ItemList/ItemList.jsx';

class CategoryPage extends Component {

    componentDidMount() {

        const categoryId = Number(this.props.match.params.categoryId);

        // prevent the API from being called multiple times
        if (this.props.category.id !== categoryId) {

            fetch('/api/categories/' + categoryId)
                .then(response => response.json())
                .then(category => {
                    this.props.dispatch(setCategory(category));
                });
        }
    }

    render() {

        const category = this.props.category;

        let categoryList;
        let itemList;

        if (category) {
            const items = category.items;

            if (category.categories && category.categories.length) {

                categoryList = <MuiGrid item xs={12}>
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <CategoryList categoryName={category.name} listItems={category.categories} />
                    </MuiPaper>
                </MuiGrid>;
            }

            if (category.items && category.items.length) {

                itemList = <MuiGrid item xs={12}>
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <ItemList categoryName={category.name} listItems={category.items} />
                    </MuiPaper>
                </MuiGrid>;
            }
        }

        return (
            <MuiContainer maxWidth="md">
                <MuiGrid container spacing={3}>
                    <MuiGrid item xs={12}>
                        <MuiPaper elevation={3} style={{ padding: '25px' }}>
                            <Progress app={this.props.app} />
                        </MuiPaper>
                    </MuiGrid>
                    {categoryList}
                    {itemList}
                </MuiGrid>
            </MuiContainer>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps)(CategoryPage));
