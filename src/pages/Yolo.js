import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Colab from './Colab.js';
import styles from './commonStyles.js';

class Yolo extends React.Component {
  constructor(props) {
    super(props);
    this.gifs = [
      require('./gifs/yolo1.gif'),
      require('./gifs/yolo2.gif'),
    ];
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Yolo">
        <Paper className={classes.paper}>
          <h1>YOLO: You only look once (Real time object detection)</h1>
          <Divider />
          <br />
          <div className={classes.body}>
            The first component is YOLOv3, a state-of-the-art object detection system. The system works by applying a single neural network to the full image, which divides the image into regions and predicts the bounding boxes and probabilities for each region. At test time, it looks at the whole image to predict objects based on overall context. It takes as input a series of frames and gives as output bounding boxes for all the identified objects in every frame.
          </div>
          <br />
          <Colab desc="YOLO" link="https://colab.research.google.com/drive/1h8NX3MSecJE2fdiEzKIv0JkXilxyA9ng?usp=sharing#forceEdit=true&sandboxMode=true" />
          <br /><br />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <img src={this.gifs[0]} alt="yolo1" width="90%" />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <img src={this.gifs[1]} alt="yolo2" width="90%" />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Yolo);