import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Integrated extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      require('./images/modelA.png'),
      require('./images/modelB.png'),
      require('./images/modelC.png'),
    ];
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Integrated">
        <Paper className={classes.paper}>
          <h1>Integrated Framework</h1>
          <Divider />
          <br />
          <Paper className={classes.paper}>
            <img src={this.images[0]} alt="modelA" width="100%" />
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <img src={this.images[1]} alt="modelB" width="100%" />
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <img src={this.images[2]} alt="modelC" width="100%" />
          </Paper>

          Insert description and GIFS here
          <br /><br />
          
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
    padding: 18,
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
  body: {
    textAlign: "left",
    wordWrap: "break-word",
    paddingLeft: '15px'
  }
});

export default withStyles(styles)(Integrated);