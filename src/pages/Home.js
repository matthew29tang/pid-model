import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";
import styles from './commonStyles.js';

class Home extends React.Component {
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
      <div className="Home">
        <Paper className={classes.paper}>
          <h2>FuSSI-Net: Fusion of Spatio-temporal Skeletons for Intention Prediction Network</h2>
          <Divider />
          <h3 style={{marginBottom:"0px"}}>Rajarathnam Balakrishnan, Francesco Piccoli, Maria Jesus Perez, Moraldeepsingh Sachdeo, Carlos Nuñez, Matthew Tang</h3>
          <h3 style={{marginTop:"0px", marginBottom:"0px"}}>Kajsa Andreasson, Kalle Bjurek, Ria Dass Raj, Ebba Davidsson, Colin Eriksson, Victor Hagman, Jonas Sjoberg</h3>
          <h3 style={{marginTop:"0px"}}>Ying Li, L. Srikar Muppirisetty, Sohini Roychowdhury</h3>
          Click to see descriptions and demos for each part of the model.
          <br /><br />
          <Paper className={classes.paper}>
            <img src={this.images[0]} alt="modelC" width="100%" />
            <NavLink activeClassName="active" className="link" to={"/integrated/"} type="menu">
              <Button variant="contained" color="primary" className={classes.button}>
                End-to-end Architecture
                </Button>
            </NavLink>
          </Paper>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.images[1]} alt="yolo" width="100%" />
                <NavLink activeClassName="active" className="link" to={"/yolo/"} type="menu">
                  <Button variant="contained" color="primary" className={classes.button}>
                    YOLO
                </Button>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.images[2]} alt="sort" width="100%" />
                <NavLink activeClassName="active" className="link" to={"/sort/"} type="menu">
                  <Button variant="contained" color="primary" className={classes.button}>
                    SORT
                </Button>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.images[3]} alt="pose" width="100%" />
                <NavLink activeClassName="active" className="link" to={"/pose/"} type="menu">
                  <Button variant="contained" color="primary" className={classes.button}>
                    Pose Estimation
                  </Button>
                </NavLink>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <img src={this.images[4]} alt="densenet" width="100%" />
                <NavLink activeClassName="active" className="link" to={"/densenet/"} type="menu">
                  <Button variant="contained" color="primary" className={classes.button}>
                    Densenet
                </Button>
                </NavLink>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(Home);