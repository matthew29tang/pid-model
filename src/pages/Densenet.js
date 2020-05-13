import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Colab from './Colab.js';
import styles from './commonStyles.js';

class Densenet extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      require('./images/densenetTable1.png'),
      require('./images/densenetTable2.png'),
      require('./images/dnetFig1.jpg'),
      require('./images/dnetFig2.png'),
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
            The final component of our system is a classifier that determines if a pedestrian will cross or not cross. We chose to implement a 106 layer spatio-temporal densenet. The densenet is composed of three dense blocks which are each composed of four pairs of 1x1x1 and 3x3x3 convolutions. The dense blocks are separated by transition blocks composed of batch normalization, 1x1x1 convolutions, and average pooling layers. For training purposes, the densenet takes as input a sequence of 16 frames prior to the action of crossing (if applicable), and gives as output two probability scores for crossing or not crossing. After assembling each component separately, we integrated them to create an end to end system that can identify pedestrian action real-time. By utilizing a sliding window technique that multiplies frames when the number has not reached the minimum required for densenet classification, the system takes as an input a sequence of frames and provides as output a classification for all of the pedestrian’s actions in every frame.
          <br /><br />
          </div>
          <Colab desc="Densenet" link="https://colab.research.google.com/drive/1LN-Ei5sM1X-4zvt8lhxch4jCkfW56eF8?usp=sharing#forceEdit=true&sandboxMode=true" />
          <div className={classes.body}>
            <br />
          After achieving a similar classification result to the <a href="https://arxiv.org/abs/1904.09862">original paper</a> we based our work off, we put effort into improving it. We integrated a pose estimating skeleton model that calculates the up to 17 skeleton points in an image of a pedestrian. The model was used in 2 ways which we refer to as early and late fusion. Early fusion consists in highlining the skeleton points in the images prior to feeding them into the densenet as shown in the image below.
          <br /> <br />
          </div>
          <img src={this.images[2]} width="90%" alt="densenetFig" />
          <div className={classes.body}>
            <br />
          The second approach or late fusion consists in using the skeleton points to calculate additional features based on angles and distances as shown in the image below. The model creates around 300 features per frame which we compute for each of the 16 frames of the input and concatenate to feed as an additional input. The tensor was added to the last layer of the model before it computes the probabilities of crossing or not crossing.
          </div>
          <br />
          <img src={this.images[3]} width="100%" alt="densenetFig"/>
          <br /> <br />
          <div className={classes.body}>
            Finally, we combined both approaches for the sake of comparison. As we can see in the result table below, we first used the Adam optimizer to determine which of the integration methods worked best. We were able to determine that early fusion increased the average precision score more than the other approaches.
          </div>
          <img src={this.images[0]} width="70%" alt="densenetFig"/>
          <br />
          <div className={classes.body}>
            After learning this we used a more careful method relying on the stochastic gradient descent optimizer. Using the SGD method we were able to achieve our final results for comparison with the original paper. By using early fusion of a skeleton model we were able to increase the average precision score published in the paper from 84 to 89 as shown in the table below.
          </div>
          <br />
          <img src={this.images[1]} width="70%" alt="densenetFig"/>


        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Densenet);