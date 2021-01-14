import React, { Component } from 'react';
import { withRouter } from "react-router";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';

import AppBar from '../../components/AppBar/AppBar.jsx';
import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

class CategoryPage extends Component {

    render() {

        const categoryId = this.props.match.params.categoryId;
        const categories = this.props.app.categories;

        const category = categories.find(cat => {
            return cat.id === categoryId;
        });

        return (
            <MuiContainer maxWidth="md">
                <MuiGrid container spacing={3}>
                    <MuiGrid item xs={12}>
                        <AppBar />
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiGrid container spacing={3}>
                            <MuiGrid item xs={12}>
                                <Progress app={this.props.app} />
                            </MuiGrid>
                        </MuiGrid>
                    </MuiGrid>
                    <MuiGrid item xs={12}>
                        <MuiGrid container spacing={3}>
                            <MuiGrid item xs={12}>
                                <CategoryList categoryName={category.name} listItems={category.categories} />
                            </MuiGrid>
                        </MuiGrid>
                    </MuiGrid>
                </MuiGrid>
            </MuiContainer>
        );
    }
}

export default withRouter(CategoryPage);
