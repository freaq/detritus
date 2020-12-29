import React, { Component } from 'react';
import './progress.css';
import BSBadge from 'react-bootstrap/Badge';
import BSProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUIBadge from '@material-ui/core/Badge';

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
            <MUIBadge badgeContent={app.level} color="primary">
              Level
            </MUIBadge>
            <FontAwesomeIcon icon="star" />
          </h1>
          <BSProgressBar style={{ height: '100px' }} now={progressValue} label={progressLabel} />
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
