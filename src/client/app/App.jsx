import React, { Component } from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import HomePage from '../pages/HomePage/HomePage.jsx';
import CategoryPage from '../pages/CategoryPage/CategoryPage.jsx';

export default class App extends Component {
  state = { user: null };

  componentDidMount() {

    // for now get all data in one go
    fetch('/api/app')
      .then(res => res.json())
      .then(app => this.setState({ app: app }));
  }

  render() {
    const app = this.state.app;
    console.log(app);
    return (
      <Switch>
        <div>
          <Switch>            
            <Route exact path='/' component={() => <HomePage app={this.state.app} />} />
            <Route path='/category' component={() => <CategoryPage app={this.state.app} />} />
          </Switch>
        </div>
      </Switch>
    );
  }
}
