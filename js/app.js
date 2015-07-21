import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import LoginHandler from './components/Login';
import Checklist from './components/Checklist';

//Needed for onTouchTap
//Can go away when react 1.0 release of material-ui
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// <div className="nav">
//   <Link to="app">Home</Link>
//   <Link to="login">Login</Link>
//
//   {/* this is the important part */}
//   <RouteHandler/>
// </div>

let App = React.createClass({
  render() {
    return (
      <div>
        <Checklist />

        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}></Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
