import React, { Component } from 'react';
import './header.css';

import MaterialUIGrid from '@material-ui/core/Grid';

import Progress from './Progress/Progress.jsx';

export default class Header extends Component {

  render() {
    return (
      <MaterialUIGrid container spacing={3}>
        <MaterialUIGrid item xs={12}>
          <Progress app={this.props.app} />
        </MaterialUIGrid>
      </MaterialUIGrid>
    );
  }
}
