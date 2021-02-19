import React, { useEffect, useState } from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";

import { setApp, setUser } from "../redux/actions.js";

import { useAuth0 } from "@auth0/auth0-react";

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

const App = (props) => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {

    if (!props.user.id && !isLoading && user && isAuthenticated) {

      // for now get all data in one go
      fetch('/api/users/' + user.sub)
        .then(response => response.json())
        .then(user => {
          props.dispatch(setUser(user));
        });
    }
  });

  console.log(props);

  // clean this up and replace app with user in sub-components
  const app = props.user;

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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
