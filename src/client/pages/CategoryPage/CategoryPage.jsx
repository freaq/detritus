import React, { Component } from 'react';
import { withRouter } from "react-router";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import ItemList from '../../components/ItemList/ItemList.jsx';

class CategoryPage extends Component {

    render() {

        const categoryId = this.props.match.params.categoryId;
        const categories = this.props.app.categories;

        const category = categories.find(cat => {
            return cat.id === Number(categoryId);
        });

        let categoryList;
        let itemList;

        if (category) {
            const items = category.items;

            if (category.categories && category.categories.length) {

                categoryList = <MuiGrid item xs={12}>
                    <MuiGrid container spacing={3}>
                        <MuiGrid item xs={12}>
                            <CategoryList categoryName={category.name} listItems={category.categories} />
                        </MuiGrid>
                    </MuiGrid>
                </MuiGrid>;
            }

            if (category.items && category.items.length) {

                itemList = <MuiGrid item xs={12}>
                    <MuiGrid container spacing={3}>
                        <MuiGrid item xs={12}>
                            <ItemList categoryName={category.name} listItems={category.items} />
                        </MuiGrid>
                    </MuiGrid>
                </MuiGrid>;
            }
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
                    {categoryList}
                    {itemList}
                </MuiGrid>
            </MuiContainer>
        );
    }
}

export default withRouter(CategoryPage);
