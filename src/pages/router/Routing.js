import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Notfound from "./notfound.js";
import About from "../About.js";
import Home from '../Home.js';
import Integrated from '../Integrated.js';
import Yolo from '../Yolo.js';
import Sort from '../Sort.js';
import Pose from '../Pose.js';
import Densenet from '../Densenet.js';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/integrated/" component={Integrated} />
        <Route path="/yolo/" component={Yolo} />
        <Route path="/sort/" component={Sort} />
        <Route path="/pose/" component={Pose} />
        <Route path="/densenet/" component={Densenet} />
        <Route path="/about/" component={About} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="75%" maxWidth={1500} >
            {routing}
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Routing);
