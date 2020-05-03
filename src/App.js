import React from 'react';
import './App.css';
import NavBar from './pages/router/NavBar.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f4bc13',
      contrastText: "#ffffff"
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NavBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
