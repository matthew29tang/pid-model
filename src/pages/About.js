import React from 'react';

import Divider from '@material-ui/core/Divider';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <Divider />
        <br />
        <div align="left" word-wrap="break-word">
          As someone who studied epidemiology for 5 years in high school, the COVID-19 outbreak is surreal; I never thought I'd actually witness a pandemic. With my EECS background, I decided to make a map to geographically visualize the confirmed cases.
          <br />
          <h2>Technologies used</h2>
          <ul>
            <li>Frontend: ReactJS</li>
              <li style={{marginLeft:"2em"}}>Theme: Material UI</li>
              <li style={{marginLeft:"2em"}}>Deployment: Github pages</li>
             </ul>

        </div>
      </div>
    );
  }
}

export default About;