import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default class User extends React.Component {
          
  categoryOnClick() {
    alert('You clicked a Category!');
  }

    render() {    
      const user = this.props.user;  
      
      let content;
      if (user)
      {
        content = 
        <div>
          <h1>{`Hello ${user.name}`}            
            <Badge variant="secondary">Level {user.level}</Badge>            
          </h1>
          <div>            
            <h3>{`XP ${user.xp}!`}</h3>
          </div>
          <div>
            <h2>Categories</h2>
            <ListGroup>
            {user.categories.map(category =>(               
                <ListGroup.Item action onClick={this.categoryOnClick}>{category.name}</ListGroup.Item>
              ))
            } 
            </ListGroup>           
          </div>
        </div>;
      }
      else{
        content = <div><h1>Loading.. please wait!</h1></div>;
      } 

      return (        
        content        
      );
    }
  }
  