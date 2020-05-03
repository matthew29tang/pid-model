import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './commonStyles.js';

class Sort extends React.Component {
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
      <div className="Sort">
        <Paper className={classes.paper}>
          <h1>SORT/DeepSORT: Simple Online and Realtime Tracking</h1>
          <Divider />
          <br />
          <div className={classes.body}>
          The next component is Deep SORT, an elegant object tracking framework and extension of SORT (Simple Real Time Tracker). This algorithm relies on the kalman filter that uses available detections and previous predictions to guess the current state of the object. Unlike SORT, Deep SORT handles occlusions or re-appearances of objects by combining a deep learning technique with the Mahalanobis distance metric. It takes as input the bounding boxes produced by YOLOv3 and gives as output a unique identifier for each object and its respective bounding boxes across the frame sequence.
          </div>
          <br /><br />
          
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Sort);