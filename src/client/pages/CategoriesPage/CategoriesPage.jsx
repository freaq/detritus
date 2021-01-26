import React, { Component } from 'react';

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';


export default class CategoriesPage extends Component {

    render() {

        let categories = [];
        if (this.props.app.categories) {
            categories = this.props.app.categories.filter((category) => {
                return category.isRootLevelCategory === true;
            });
        }

        return (
            <MuiContainer maxWidth="md">
                <MuiGrid container spacing={3}>
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
                                <CategoryList categoryName='Categories' listItems={categories} />
                            </MuiGrid>
                        </MuiGrid>
                    </MuiGrid>
                </MuiGrid>
            </MuiContainer>
        );
    }
}
