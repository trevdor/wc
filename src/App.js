import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTheme from './styles/MainTheme';

import Home from './components/Home';
// import EditProfile from './components/EditProfile';

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={ MainTheme }>
          {/*<PrivateRoute path="/profile/edit" component={ EditProfile } />*/}
          <Route path="/" render={ () => <Home /> } />
          {/*<Route path="/login" component={ Login } />*/}
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
