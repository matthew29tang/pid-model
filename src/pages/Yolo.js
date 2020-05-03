import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Colab from './Colab.js';
import styles from './commonStyles.js';

class Yolo extends React.Component {
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
      <div className="Yolo">
        <Paper className={classes.paper}>
          <h1>YOLO: You only look once (Real time object detection)</h1>
          <Divider />
          <br />
          <div className={classes.body}>
            The first component is YOLOv3, a state-of-the-art object detection system. The system works by applying a single neural network to the full image, which divides the image into regions and predicts the bounding boxes and probabilities for each region. At test time, it looks at the whole image to predict objects based on overall context. It takes as input a series of frames and gives as output bounding boxes for all the identified objects in every frame.
          </div>
          <br /><br />
          <Colab desc="YOLO" link="https://google.com" />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Yolo);