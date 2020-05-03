import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './commonStyles.js';

class Pose extends React.Component {
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
      <div className="Pose">
        <Paper className={classes.paper}>
          <h1>Pose Estimation: Skeleton Tracking</h1>
          <Divider />
          <br />
          <div className={classes.body}>
          The skeleton fitting algorithm takes an image as input and returns up to 17 keypoints for the pedestrian. Out of these 17 keypoints, 9 were chosen to be most important for the classification. 396 features were then calculated, consisting of angles and distances between these 9 keypoints and the horizontal plane. For this implementation, the BB’s from the object detector was used to crop each image prior to the skeleton fitting algorithm so that each image only portrayed one pedestrian.
          </div>
          <br /><br />
          
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Pose);