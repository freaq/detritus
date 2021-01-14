import React, { Component } from 'react';
import './progress.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Progress extends Component {

  render() {

    // make this into a progress bar component
    const BorderLinearProgress = withStyles((theme) => ({
      root: {
        height: 50,
        borderRadius: 5,
      },
      colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
      },
    }))(LinearProgress);


    const app = this.props.app;

    let content;
    if (app) {
      const progressValue = (app.xp / app.maxXP) * 100;
      const progressLabel = app.xp + ' XP' + ' / ' + app.maxXP + ' XP';

      content =
        <React.Fragment>
          <Typography style={{ display: 'inline', paddingRight: 25 }} variant="h4" color="textSecondary">Level</Typography>
          <Typography style={{ display: 'inline' }} variant="h2" color="textSecondary">{app.level}</Typography>

          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <BorderLinearProgress variant="determinate" value={progressValue} />
            </Box>
            <Box minWidth={200}>
              <Typography variant="body2" color="textSecondary">{progressLabel}</Typography>
            </Box>
          </Box>
        </React.Fragment>
    }
    else {
      content = <div><h1>Loading.. please wait!</h1></div>;
    }

    return (
      content
    );
  }
}
