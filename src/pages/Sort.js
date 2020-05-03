import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Sort extends React.Component {
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
      <div className="Sort">
        <Paper className={classes.paper}>
          <h1>SORT/DeepSORT: Simple Online and Realtime Tracking</h1>
          <Divider />
          <br />
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

export default withStyles(styles)(Sort);