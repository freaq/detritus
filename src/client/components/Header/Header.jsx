import React, { Component } from 'react';
import './header.css';

import MuiGrid from '@material-ui/core/Grid';

import Progress from '../Progress/Progress.jsx';

export default class Header extends Component {

  render() {
    return (
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={12}>
          <Progress app={this.props.app} />
        </MuiGrid>
      </MuiGrid>
    );
  }
}
