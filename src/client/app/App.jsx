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

    // IF auth0 is done
    if (!isLoading) {
      // IF the user is logged in
      // THEN load the user data
      // ELSE load the generic app data
      if (isAuthenticated) {
        // IF auth0 returned a user
        // AND the user info has not been previously fetched or belongs to a different user
        // THEN load the user data
        if (user && props.user.auth0UserId !== user.sub) {

          fetch('/api/users/' + user.sub)
            .then(response => response.json())
            .then(user => {
              props.dispatch(setUser(user));
            });
        }
      }
      else {
        // IF the app data has not been previously fetched
        // THEN load the app data
        if (!props.app.id) {

          fetch('/api/app')
            .then(response => response.json())
            .then(app => {
              props.dispatch(setApp(app));
            });
        }
      }
    }
  });

  console.log("Props:");
  console.log(props);

  let categories = [];
  if (props.user.id) {
    categories = props.user.categories;
  }
  else if (props.app.id) {
    categories = props.app.categories;
  }

  return (
    <MuiContainer maxWidth="md">
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={12}>
          <AppBar />
        </MuiGrid>
        <MuiGrid item xs={12}>
          <Switch>
            <Route exact path='/' component={() => <CategoriesPage categories={categories} />} />
            <Route exact path='/categories' component={() => <CategoriesPage categories={categories} />} />
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
