import React from 'react/addons';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import mui from 'material-ui';
const { Tabs, Tab } = mui;
const Colors = mui.Styles.Colors;

import Checklist from './components/Checklist';
import RulesList from './components/RulesList';
import Scoreboard from './components/Scoreboard';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Can go away with 1.0 release of plugin

const ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  /* Default material-ui handler for Tabs */
  _onActive(tab) {
    this.context.router.transitionTo(tab.props.route);
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Score" route="scoreboard">
            <Scoreboard />
          </Tab>
          <Tab label="Log" route="checklist">
            <Checklist />
          </Tab>
          <Tab label="Rules" route="rules">
            <RulesList />
          </Tab>
        </Tabs>

        <RouteHandler/>
    </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

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

export default App;
