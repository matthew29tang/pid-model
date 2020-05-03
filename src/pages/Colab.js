import React from 'react';
import Button from '@material-ui/core/Button';

class Colab extends React.Component {
  constructor(props) {
    super(props);
    this.colab = require('./images/colab_rounded.png');
  }

  render() {
    return (
      < a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="secondary" size="large">
          <img src={this.colab} alt="demo" width="32px" /> &nbsp;{this.props.desc}&nbsp;Demo
          </Button>
      </a>

    );
  }
}

export default Colab;