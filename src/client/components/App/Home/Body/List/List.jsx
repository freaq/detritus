import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default class List extends Component {

  render() {
    const user = this.props.app;

    let content;
    if (user) {
      content =
        <div>
          <h2>Categories</h2>
          <ListGroup>
            {user.categories.map(category => (
              <Link to={'./list'}>
                <ListGroup.Item action >{category.name}</ListGroup.Item>
              </Link>
            ))
            }
          </ListGroup>
        </div>;
    }
    else {
      content = <div><h1>Loading.. please wait!</h1></div>;
    }

    return (
      content
    );
  }

  categoryOnClick() {
    alert('You clicked a Category!');
  }
}
