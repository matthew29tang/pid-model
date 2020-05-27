import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './commonStyles.js';

const imageWidth = "70%"

class About extends React.Component {
  constructor(props) {
    super(props);
    this.berkeley = [
      require('./about/francesco.png'),
      require('./about/raja.jpg'),
      require('./about/mj.jpeg'),
      require('./about/moraldeep.png'),
      require('./about/carlos.PNG'),
      require('./about/matthew.jpg'),
    ];
    this.berkURLs = [
      ["https://www.linkedin.com/in/francesco-piccoli/", "https://francesco-piccoli.github.io/"],
      ["https://www.linkedin.com/in/rajarathnam-balakrishnan-7b447b135", "https://rajarathnambalakrishnan.github.io/webpage/"],
      ["https://www.linkedin.com/in/maria-jesus-perez-brown"],
      ["https://www.linkedin.com/in/moraldeepsingh/", "https://moraldeep.github.io"],
      ["https://www.linkedin.com/in/carlosnunezcardenas/", "https://carlosnunezc94.github.io/"],
      ["https://www.linkedin.com/in/matthewgtang/", "https://matthew29tang.github.io/"]
    ];
    this.chalmers = [
      require('./about/kalle.JPG'),
      require('./about/ria.png'),
      require('./about/ebba.jpg'),
      require('./about/colin.JPG'),
      require('./about/victor.png'),
      require('./about/jonas.jpg'),
      require('./about/kajsa.jpeg'),
      require('./about/srikar.jpg'),
    ];
    this.chalmersURLs = [
      ["https://www.linkedin.com/in/kalle-bjurek"],
      ["https://www.linkedin.com/in/ria-raj-263663196"],
      ["https://www.linkedin.com/in/ebba-davidsson/"],
      ["https://www.linkedin.com/in/colin-eriksson-144513138"],
      ["https://www.linkedin.com/in/victor-hagman-301b88158/"],
      ["https://www.chalmers.se/en/staff/Pages/jonas-sjoberg.aspx"],
      ["https://www.linkedin.com/in/kajsa-andreasson-33250b181"],
      ["https://www.linkedin.com/in/srikar-muppirisetty-phd-a4019413/", "https://sites.google.com/site/srikarmuppirisetty/"]
    ];
  }



  render() {
    const { classes } = this.props;
    return (
      <div className="About">
        <h1>UC Berkeley Team</h1>
        <Divider />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[0]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Francesco Piccoli</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Master of Engineering in Industrial Engineering and Operations Research 2020</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.berkURLs[0][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[0][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[1]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Rajarathnam Balakrishnan</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Master of Engineering in Industrial Engineering and Operations Research 2020</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.berkURLs[1][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[1][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[2]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Maria Jesus Perez</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Master of Engineering in Industrial Engineering and Operations Research 2020</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[2][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[3]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Moraldeepsingh Sachdeo</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Master of Engineering in Industrial Engineering and Operations Research 2020</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.berkURLs[3][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[3][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[4]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Carlos Nuñez</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Master of Engineering in Industrial Engineering and Operations Research 2020</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.berkURLs[4][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[4][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.berkeley[5]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Matthew Tang</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Bachelor of Science in Electrical Engineering and Computer Science 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.berkURLs[5][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.berkURLs[5][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <h1>Chalmers University Team</h1>
        <Divider />
        <br />
        <Grid container spacing={3}>
        <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[6]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Kajsa Andreasson</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Mechanical Engineering 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[6][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[0]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Kalle Bjurek</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Automation and Mechatronics 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[0][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[1]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Ria Raj</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>M.Sc in Automation and Mechatronics 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[1][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[2]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Ebba Davidsson</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Engineering Mathematics 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[2][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[3]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Colin Eriksson</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>M.Sc in Automation and Mechatronics 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[3][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[4]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Victor Hagman</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Automation and Mechatronics 2022</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[4][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[5]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Jonas Sjöberg</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Chalmers Team Advisor</h4>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[5][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={this.chalmers[7]} alt="bio" width={imageWidth} />
              <h2 style={{ marginTop: '3px', marginBottom: '5px' }}>Srikar Muppirisetty</h2>
              <h4 style={{ marginTop: '5px', marginBottom: '5px' }}>Volvo Chalmers Team Advisor</h4>
              <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '20px' }} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[7][0]}>
                <i class="fab fa-linkedin-in fa-2x"></i>
              </Button>
              <Button variant="contained" color="primary" className={classes.button} target="_blank" rel="noopener noreferrer" href={this.chalmersURLs[7][1]}>
                <i class="fas fa-globe fa-2x"></i>
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <br/>
        <h2>With special thanks to advisors Ying Li, Srikar Muppirisetty, and Sohini Roychowdhury from Volvo Cars.</h2>
      </div>
    );
  }
}

export default withStyles(styles)(About);