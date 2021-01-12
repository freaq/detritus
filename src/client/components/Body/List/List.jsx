import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';

class List extends Component {

  render() {

    const StyledList = withStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
      },
    }))(MuiList);

    const categories = this.props.categories;

    let content;
    if (categories) {
      content =
        <div>
          <h2>Categories</h2>
          <StyledList component="nav">
            {categories.map(category => (
              <Link key={category} to={'./category'}>
                <MuiListItem button>
                  <MuiListItemText primary={category.name} />
                </MuiListItem>
              </Link>
            ))
            }
          </StyledList>
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

  const props = {
    categories: []
  };

  if (state.app) {
    props.categories = state.app.categories;
  }

  return props;
}

export default connect(mapStateToProps)(List);

