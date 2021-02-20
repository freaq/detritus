import React, { useEffect } from 'react';

import { setCategory } from "../../redux/actions.js";

import { connect } from "react-redux";

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';
import MuiPaper from '@material-ui/core/Paper';

import Progress from '../../components/Progress/Progress.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

const CategoriesPage = (props) => {

    let rootCategories = [];
    if (props.categories) {
        rootCategories = props.categories.filter((category) => {
            return category.isRootLevelCategory === true;
        });
    }

    return (
        <MuiContainer maxWidth="md">
            <MuiGrid container spacing={3}>
                {/* <MuiGrid item xs={12}>                    
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <Progress app={app} />
                    </MuiPaper>
                </MuiGrid> */}
                <MuiGrid item xs={12}>
                    <MuiPaper elevation={3} style={{ padding: '25px' }}>
                        <CategoryList categoryName='Categories' listItems={rootCategories} />
                    </MuiPaper>
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    );
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(CategoriesPage);

