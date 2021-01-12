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

import HomePage from '../pages/HomePage/HomePage.jsx';
import CategoryPage from '../pages/CategoryPage/CategoryPage.jsx';

class App extends Component {
  state = {};

  componentDidMount() {

    // for now get all data in one go
    fetch('/api/app')
      .then(response => response.json())
      .then(app => 
        {
          this.props.dispatch(setApp(app));
        });
  }

  render() {
        
    console.log('Props:');
    console.log(this.props);

    const app = this.props.app;

    return (      
        <Switch>
          <div>
            <Switch>
              <Route exact path='/' component={() => <HomePage app={app} />} />
              <Route path='/category' component={() => <CategoryPage app={app} />} />
            </Switch>
          </div>
        </Switch>
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
