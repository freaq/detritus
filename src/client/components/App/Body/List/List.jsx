import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class List extends Component {

  categoryOnClick() {
    alert('You clicked a Category!');
  }

  render() {
    const user = this.props.app;

    let content;
    if (user) {
      content =
        <div>
          <h2>Categories</h2>
          <ListGroup>
            {user.categories.map(category => (
              <ListGroup.Item action onClick={this.categoryOnClick}>{category.name}</ListGroup.Item>
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
}
