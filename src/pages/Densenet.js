import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './commonStyles.js';

class Densenet extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      require('./images/modelC.png'),
      require('./images/yolo.png'),
      require('./images/sort.png'),
      require('./images/pose.png'),
      require('./images/densenet.png'),
    ];
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Densenet">
        <Paper className={classes.paper}>
          <h1>Spatio-Temporal Densenet</h1>
          <Divider />
          <br />
          <div className={classes.body}>
          The final component of our system is a classifier that determines if a pedestrian will cross or not cross. We chose to implement a 106 layer spatio-temporal densenet, architecture shown in figure 1 of the appendix. The densenet is composed of three dense blocks which are each composed of four pairs of 1x1x1 and 3x3x3 convolutions. The dense blocks are separated by transition blocks composed of batch normalization, 1x1x1 convolutions, and average pooling layers. For training purposes, the densenet takes as input a sequence of 16 frames prior to the action of crossing (if applicable), and gives as output two probability scores for crossing or not crossing. After assembling each component separately, we integrated them to create an end to end system that can identify pedestrian action real-time shown in figure 2 in the appendix. By utilizing a sliding window technique that multiplies frames when the number has not reached the minimum required for densenet classification, the system takes as an input a sequence of frames and provides as output a classification for all of the pedestrian’s actions in every frame.
          </div>
          <br /><br />
          
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Densenet);