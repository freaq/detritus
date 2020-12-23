import React, { Component } from 'react';
import './progress.css';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Progress extends Component {

  render() {
    const app = this.props.app;

    let content;
    if (app) {
      const progressValue = (app.xp / app.maxXP) * 100;
      const progressLabel = app.xp + ' XP' + ' / ' + app.maxXP + ' XP';

      content =
        <div>
          <h1>
            <Badge variant="secondary">Level {app.level}</Badge>
          </h1>
          <ProgressBar style={{ height: '100px' }} now={progressValue} label={progressLabel} />
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
