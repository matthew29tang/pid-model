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
    ]
    ];
    this.resultGifs = [
      require('./gifs/modelADetect.gif'),
      require('./gifs/modelBDetect.gif')
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
                  <Colab desc="Model A" link="https://colab.research.google.com/drive/1qztt4iC0kNcJKVF5o1pbefdEWnP9VwcL?usp=sharing" />
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
                  <Colab desc="Model B" link="https://colab.research.google.com/drive/1AOx2hzWeQceorhu75Zvc0esZLw0SzlRH?usp=sharing" />
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
                    Model C consists of 4 components: YOLO, DeepSORT, Skeleton Tracking, and Densenet. This integrated framework combined the work from students at Chalmers University on using pose estimation for pedestrian intent detection with our (UC Berkeley) framework to achieve higher accuracies.
                  </div>
                  <br />
                  <Colab desc="Model C" link="https://colab.research.google.com/drive/1qztt4iC0kNcJKVF5o1pbefdEWnP9VwcL?usp=sharing" />
                  <br /><br />
                </div> : ''}
            </TabContainer>

            <TabContainer >
              {this.state.tab === 3 ?
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
                      <Tab label="Video 4" />

                    </Tabs>
                  </AppBar>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[0][this.state.innerTab]} alt="modelA2" width="100%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][this.state.innerTab]} alt="modelB2" width="100%" />
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paper}>
                        <img src={this.gifs[1][this.state.innerTab]} alt="modelB2" width="100%" />
                      </Paper>
                    </Grid>
                  </Grid>
                  <br />
                  <h2>Results</h2>
                  <div className={classes.body}>
                    We used three different metrics to anaylze Model A's performance. The first involved using the accuracy of the model's prediction of a pedestrian's intent 16 frames (with videos running at 30fps, around half a second) before they cross which was 0.345. The second involved using the accuracy of the model's prediction of a pedestrian's intent at the frame at which they actually begin crossing, which was 0.479. The third involved using the percentage accuracy of the model's prediction of a pedestrian's intent 16 frames before, which was 0.468.
                  </div>
                  <br />
                  <div className={classes.body}>
                    For Model B, DeepSORT was able to detect pedestrians crossing several frames before Model A was able to. The below GIFs show that Model B was able to detect a pedestrian crossing 4 frames before Model A.
                  </div>
                  < br />
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.resultGifs[0]} alt="modelB1" width="90%" /><br />
                        SORT detects pedestrian at Frame 83
                      </Paper>

                    </Grid>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}>
                        <img src={this.resultGifs[1]} alt="modelB2" width="90%" /><br />
                        DeepSORT detects pedestrian at Frame 79
                      </Paper>

                    </Grid>
                  </Grid>
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