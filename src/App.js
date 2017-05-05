import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { isLoggedIn } from './auth';
import Home from './components/Home';
import Login from './components/Login';
import EditProfile from './components/EditProfile';

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const PrivateRoute = ({ component, ...rest }) => (
  <Route { ...rest } render={ props => (
    isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={ {
        pathname: '/login',
        state: { from: props.location },
      } }/>
    )
  ) }/>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/profile/edit" component={ EditProfile } />
          <Route path="/" component={ Home } />
          <Route path="/login" component={ Login } />
        </Switch>
      </Router>
    );
  }
}

export default App;
