import React from 'react';
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Routing from './Routing.js';
import styles from './navBarStyles.js'

var paper = "https://arxiv.org/abs/2005.07796";
var supp = require('../pdfs/Supplementary_Material.pdf');


class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <Router>
                <NavLink activeClassName="active" className="link" to={"/"} type="menu">
                  <div style={{ marginLeft: '20px', textAlign: 'left' }}>
                    FuSSI-Net
                    </div>
                </NavLink>
              </Router>
            </Typography>
            <Router>
              <NavLink activeClassName="active" className="link" to={"/integrated/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">End-to-End</Button>
              </NavLink>
              <NavLink activeClassName="active" className="link" to={"/yolo/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">YOLO</Button>
              </NavLink>
              <NavLink activeClassName="active" className="link" to={"/sort/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">SORT</Button>
              </NavLink>
              <NavLink activeClassName="active" className="link" to={"/pose/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">Skeleton</Button>
              </NavLink>
              <NavLink activeClassName="active" className="link" to={"/densenet/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">Densenet</Button>
              </NavLink>
              <a href={paper} target="_blank" rel="noopener noreferrer" className="link" style={{ marginRight: '20px' }}>
                <Button color="inherit">Paper</Button>
              </a>
              <a href={supp} target="_blank" rel="noopener noreferrer" className="link" style={{ marginRight: '20px' }}>
                <Button color="inherit">Supplementary</Button>
              </a>
              <NavLink activeClassName="active" className="link" to={"/about/"} type="menu" style={{ marginRight: '20px' }}>
                <Button color="inherit">About</Button>
              </NavLink>

            </Router>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Routing />
        </main>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
