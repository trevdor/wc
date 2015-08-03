import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import mui from 'material-ui';
const { Tabs, Tab } = mui;

import Checklist from './components/Checklist';
import RulesList from './components/RulesList';
import Scoreboard from './components/Scoreboard';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Can go away when react 1.0 release of material-ui

const ThemeManager = new mui.Styles.ThemeManager();

// <div className="nav">
//   <Link to="app">Home</Link>
//   <Link to="login">Login</Link>
// </div>

const App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  _onActive(tab){
    this.context.router.transitionTo(tab.props.route);
  },

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Score" route="scoreboard" onActive="this._onActive">
            {/* <Scoreboard /> */}
          </Tab>
          <Tab label="Log" route="checklist" onActive="this._onActive">
            <Checklist />
          </Tab>
          <Tab label="Rules" route="rules" onActive="this._onActive">
            {/* <RulesList /> */}
          </Tab>
        </Tabs>

        <RouteHandler/>
    </div>
    );
  }
});

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="scoreboard" handler={Scoreboard} />
    <Route name="checklist" handler={Checklist} />
    <Route name="rules" handler={RulesList} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
