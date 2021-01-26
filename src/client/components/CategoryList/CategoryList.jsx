import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemText from '@material-ui/core/ListItemText';

import { Category } from '@material-ui/icons';

export default class CategoryList extends Component {

  render() {

    const StyledList = withStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
      },
    }))(MuiList);

    const listItems = this.props.listItems;
    
    let content;
    if (listItems) {
      content =
        <div>
          <h2>{this.props.categoryName}</h2>
          <StyledList component="nav">
            {listItems.map(listItem => (
              <Link key={listItem.id} to={'/categories/' + listItem.id}>
                <MuiListItem button>
                  <MuiListItemText primary={listItem.name} />
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
