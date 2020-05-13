import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Colab from './Colab.js';
import styles from './commonStyles.js';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class Integrated extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      require('./images/modelA.png'),
      require('./images/modelB.png'),
      require('./images/modelC.png'),
      require('./images/modelD.png'),
    ];
    this.gifs = [[
      require('./gifs/modelA1.gif'),
      require('./gifs/modelA2.gif'),
      require('./gifs/modelA3.gif'),
      require('./gifs/modelA4.gif'),
    ], [
      require('./gifs/modelB1.gif'),
      require('./gifs/modelB2.gif'),
      require('./gifs/modelB3.gif'),
      require('./gifs/modelB4.gif'),
    ], [
      require('./gifs/modelC1.gif'),
      require('./gifs/modelC2.gif'),
      require('./gifs/modelC3.gif'),
      require('./gifs/modelC4.gif'),
    ], [
      require('./gifs/modelD1.gif'),
      require('./gifs/modelD2.gif'),
      require('./gifs/modelD3.gif'),
      require('./gifs/modelD4.gif'),
    ]];
    this.acComparison = [[
      require('./gifs/modelA_cmp1.gif'),
      require('./gifs/modelA_cmp2.gif'),
      require('./gifs/modelA_cmp3.gif')
    ], [
      require('./gifs/modelC_cmp1.gif'),
      require('./gifs/modelC_cmp2.gif'),
      require('./gifs/modelC_cmp3.gif')
    ]];
    this.resultImages = [
      require('./images/metrics.png')
    ]
    this.state = {
      tab: 0,
      innerTab: 0,
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ tab: newValue });
  };

  handleChangeIndex = (index) => {
    this.setState({ tab: index });
  };

  handleInnerChange = (event, newValue) => {
    this.setState({ innerTab: newValue });
  };

  handleInnerChangeIndex = (index) => {
    this.setState({ innerTab: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="Integrated">
        <Paper className={classes.paper}>
          <h1>Integrated Framework</h1>
          <Divider />
          <br />
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.tab}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >

              <Tab label="Model A" />
              <Tab label="Model B" />
              <Tab label="Model C" />
              <Tab label="Model D" />
              <Tab label="Results" />

            </Tabs>
          </AppBar>
          <br />
          <SwipeableViews
            axis={'x'}
            index={this.state.tab}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer >
              {this.state.tab === 0 ?
                <div>
                  <Paper className={classes.paper}>
                    <img src={this.images[0]} alt="modelA" width="80%" />
                  </Paper>
                  <br />
                  <div className={classes.body}>
                    Model A was our first unified framework for pedestrian intention prediction. It consisted of 3 parts:
                    <ol>
                      <li> YOLOv3 (Object detector): Responsible to identify and detect objects of interest in a given frame or image.</li>
                      <li>SORT (Object Tracker): responsible to track the identified pedestrians for the sequence of frames and maintain unique IDs for each pedestrian.</li>

                      <li>Spatio-Temporal DenseNet (Classifier): responsible to classify every identified and tracked pedestrian's intention by using the last 16 frames of a pedetrian.</li>
                    </ol>
                  </div>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[0][0]} alt="modelA1" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[0][1]} alt="modelA2" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[0][2]} alt="modelA3" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[0][3]} alt="modelA4" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>

                  <br />
                  <Colab desc="Model A" link="https://colab.research.google.com/drive/1InGYCg_SEosqumijaGyWzC9VoLPm5ZEx#scrollTo=DGgcEDqHNyUl&forceEdit=true&sandboxMode=true" />
                </div> : ''}
            </TabContainer>

            <TabContainer >
              {this.state.tab === 1 ?
                <div>
                  <Paper className={classes.paper}>
                    <img src={this.images[1]} alt="modelB" width="80%" />
                  </Paper>
                  <br />
                  <div className={classes.body}>
                    Model B consists of 3 components: YOLO, DeepSORT, and Densenet. The difference between Model A and Model B is the substitution of SORT with DeepSORT. DeepSORT allows for pedestrian reidentification for environments with occlusion. See SORT for more information.
                  </div>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][0]} alt="modelB1" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][1]} alt="modelB2" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][2]} alt="modelB3" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][3]} alt="modelB4" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br />
                  <Colab desc="Model B" link="https://colab.research.google.com/drive/19YmKS3KZvl86tDN4CWDEZ7lPWjFWWrQQ#scrollTo=SU6qWoWr1QpP&forceEdit=true&sandboxMode=true" />
                  <br /><br />
                </div> : ''}
            </TabContainer>

            <TabContainer >
              {this.state.tab === 2 ?
                <div>
                  <Paper className={classes.paper}>
                    <img src={this.images[2]} alt="modelC" width="100%" />
                  </Paper>
                  <br />
                  <div className={classes.body}>
                    Model C consists of 4 components: YOLO, SORT, Skeleton Tracking, and Densenet. This integrated framework combined the work from students at Chalmers University on using pose estimation for pedestrian intent detection with our (UC Berkeley) framework to achieve higher accuracies. Model C was concluded to be the best performing model which is further explored in "Results".
                  </div>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[2][0]} alt="modelC1" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[2][1]} alt="modelC2" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[2][2]} alt="modelC3" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[2][3]} alt="modelC4" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br />
                  <Colab desc="Model C" link="https://colab.research.google.com/drive/1d8PEeSdVlP0JogKwkytvFeyXXPu_qfXg?usp=sharing#forceEdit=true&sandboxMode=true" />
                  <br /><br />
                </div> : ''}
            </TabContainer>

            <TabContainer >
              {this.state.tab === 3 ?
                <div>
                  <Paper className={classes.paper}>
                    <img src={this.images[3]} alt="modelD" width="100%" />
                  </Paper>
                  <br />
                  <div className={classes.body}>
                    Model D consists of 4 components: YOLO, DeepSORT, Skeleton Tracking, and Densenet. This integrated framework combined the work from students at Chalmers University on using pose estimation for pedestrian intent detection with our (UC Berkeley) framework to achieve higher accuracies.
                  </div>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[3][0]} alt="modelD1" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[3][1]} alt="modelD2" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[3][2]} alt="modelD3" width="90%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[3][3]} alt="modelD4" width="90%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br />
                  <Colab desc="Model D" link="https://colab.research.google.com/drive/1zBR_MaibETkvZWhUiWrnwhQbmJRnko9j?usp=sharing#forceEdit=true&sandboxMode=true" />
                  <br /><br />
                </div> : ''}
            </TabContainer>

            <TabContainer >
              {this.state.tab === 4 ?
                <div>
                  <h2 style={{ marginBottom: "0px", marginTop: "0px" }}>Side by Side Comparison</h2>
                  <h5 style={{ marginTop: "5px", marginBottom: "10px" }}>Note: Click the Video tabs to resync the GIFs if they fall out of sync.</h5>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.innerTab}
                      onChange={this.handleInnerChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered
                    >
                      <Tab label="Video 1" />
                      <Tab label="Video 2" />
                      <Tab label="Video 3" />

                    </Tabs>
                  </AppBar>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.acComparison[0][this.state.innerTab]} alt="modelA" width="90%" /> <br />
                        Model A
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.acComparison[1][this.state.innerTab]} alt="modelC" width="90%" /> <br />
                        Model C
                      </Paper>
                    </Grid>
                  </Grid>
                  <br />
                  <h2>Results</h2>
                  <div className={classes.body}>
                    Lets assume that the pedestrian crosses at frame k, then let:
                    <ol>
                      <li>M1: The accuracy of intention prediction in k-16th frame  </li>
                      <li>M2: The accuracy of intention prediction in kth frame </li>
                      <li>M3: The percentage of accuracy scores for intention predictions for frames between k-16th and kth frame </li>
                    </ol>
                  </div>
                  <br />
                  <img src={this.resultImages[0]} width="45%" alt="metrics" />
                  <br /><br />
                  <div className={classes.body}>
                    From the different models A, B, C, and D that we built, it appears that Model C has an overall better performance compared to others. Model B and D that use DeepSORT as tracker tends to provide somewhat lower performance compared to Models A and C. One cause might be the fact that it was not trained on JAAD dataset. As intention prediction is a safety aspect for a vehicle, the main constraints are less false alarms and consistent predictions, which is evident in the different videos compared at the top. So, Model C is better in terms of predicting the intention 0.5 secs (16 frames) before the action occurs as per the table for integrated results.
                  </div>
                  <br />

                </div> : ''}
            </TabContainer>
          </SwipeableViews>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Integrated);