import React, { Component } from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";

import { setApp } from "../redux/actions.js";

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import MuiContainer from '@material-ui/core/Container';
import MuiGrid from '@material-ui/core/Grid';

import AppBar from '../components/AppBar/AppBar.jsx';

import CategoryPage from '../pages/CategoryPage/CategoryPage.jsx';
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage.jsx';
import ItemPage from '../pages/ItemPage/ItemPage.jsx';

class App extends Component {
  state = {};

  componentDidMount() {

    // for now get all data in one go
    fetch('/api/app')
      .then(response => response.json())
      .then(app => {
        this.props.dispatch(setApp(app));
      });
  }

  render() {

    console.log('App props:');
    console.log(this.props);

    const app = this.props.app;

    return (
      <MuiContainer maxWidth="md">
        <MuiGrid container spacing={3}>
          <MuiGrid item xs={12}>
            <AppBar />
          </MuiGrid>
          <MuiGrid item xs={12}>
            <Switch>
              <Route exact path='/' component={() => <CategoriesPage app={app} />} />
              <Route exact path='/categories' component={() => <CategoriesPage app={app} />} />
              <Route exact path='/categories/:categoryId' component={() => <CategoryPage />} />
              <Route exact path='/items/:itemId' component={() => <ItemPage />} />              
            </Switch>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    );
  }
}

function mapStateToProps(state) {

  return state;
  // const app = state.app;
  // return {
  //   app: app
  // };
}

export default connect(mapStateToProps)(App);
