import React, { Component } from 'react';
import './body.css';

import MuiGrid from '@material-ui/core/Grid';

import List from './List/List.jsx';

export default class Body extends Component {

  render() {
    return (
      <div>
        <MuiGrid container spacing={3}>
          <MuiGrid item xs={3}>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <List app={this.props.app} />
          </MuiGrid>
          <MuiGrid item xs={3}>
          </MuiGrid>
        </MuiGrid>
      </div>
    );
  }
}
