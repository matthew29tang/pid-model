import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Colab from './Colab.js';
import styles from './commonStyles.js';

class Pose extends React.Component {
  constructor(props) {
    super(props);
    this.gifs = [
      require('./gifs/skeleton1.gif'),
      require('./gifs/skeleton2.gif'),
      require('./gifs/skeleton3.gif'),
      require('./gifs/skeleton4.gif'),

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
            This work was primarly done by the team at Chalmers University and was integrated into the Berkeley system at the end.The skeleton fitting algorithm takes an image as input and returns up to 17 keypoints for the pedestrian. Out of these 17 keypoints, 9 were chosen to be most important for the classification. 396 features were then calculated, consisting of angles and distances between these 9 keypoints and the horizontal plane. For this implementation, the BB’s from the object detector was used to crop each image prior to the skeleton fitting algorithm so that each image only portrayed one pedestrian.
          </div>
          <br /><br />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.gifs[0]} alt="1" width="100%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.gifs[1]} alt="2" width="100%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.gifs[2]} alt="3" width="100%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.gifs[3]} alt="4" width="100%" />
              </Paper>
            </Grid>
          </Grid>

        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Pose);