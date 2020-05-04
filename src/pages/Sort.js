import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Colab from './Colab.js';
import styles from './commonStyles.js';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.gifs = [
      require('./gifs/sort1.gif'),
      require('./gifs/sort2.gif'),
      require('./gifs/deepsort1.gif'),
      require('./gifs/deepsort2.gif'),
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
            Deep SORT is an elegant object tracking framework and extension of SORT (Simple Real Time Tracker). This algorithm relies on the kalman filter that uses available detections and previous predictions to guess the current state of the object. Unlike SORT, Deep SORT handles occlusions or re-appearances of objects by combining a deep learning technique with the Mahalanobis distance metric. It takes as input the bounding boxes produced by YOLOv3 and gives as output a unique identifier for each object and its respective bounding boxes across the frame sequence.
          </div>
          <br />
          <Colab desc="DeepSORT" link="https://colab.research.google.com/drive/1eVIkTWFULdCgLcJzUBJTHgcSnnWryPvZ?usp=sharing" />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h3>SORT</h3>
              <Paper className={classes.paper}>
                <img src={this.gifs[0]} alt="sort1" width="90%" />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <h3>DeepSORT</h3>
              <Paper className={classes.paper}>
                <img src={this.gifs[2]} alt="deepsort1" width="90%" />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <img src={this.gifs[1]} alt="sort2" width="90%" />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <img src={this.gifs[3]} alt="deepsort2" width="90%" />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Sort);