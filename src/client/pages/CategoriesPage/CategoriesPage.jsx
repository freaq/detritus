import React, { Component } from 'react';

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';
import MuiPaper from '@material-ui/core/Paper';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

export default function CategoriesPage({ app }) {

    let categories = [];
    if (app.categories) {
        categories = app.categories.filter((category) => {
            return category.isRootLevelCategory === true;
        });
    }

    return (
        <MuiContainer maxWidth="md">
            <MuiGrid container spacing={3}>
                <MuiGrid item xs={12}>
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <Progress app={app} />
                    </MuiPaper>
                </MuiGrid>
                <MuiGrid item xs={12}>
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <CategoryList categoryName='Categories' listItems={categories} />
                    </MuiPaper>
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    );
}
