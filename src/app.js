import Marty from 'marty';
// import Application from 'application';
import React from 'react/addons';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// COMPONENTS
import Log from 'components/Log';
import Rules from 'components/Rules';
import Scoreboard from 'components/Scoreboard';

// STORES
import LogStore from 'stores/LogStore';

// ACTIONS
import LogActionCreators from 'actions/LogActionCreators';

// MATERIAL-UI
import mui from 'material-ui';
const { Tabs, Tab } = mui;
const Colors = mui.Styles.Colors;

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
          <Tab label="Log" route="log">
            <Log />
          </Tab>
          <Tab label="Rules" route="rules">
            <Rules />
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



/* SET UP REACT-ROUTER AND RUN APP */
const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="scoreboard" handler={Scoreboard} />
    <Route name="log" handler={Log} />
    <Route name="rules" handler={Rules} />
  </Route>
);

const app = new Marty.Application({});
app.register('LogStore', LogStore);
app.register('LogActionCreators', LogActionCreators);
app.dispatcher.register(function (action) {
  console.log(action.type) // => "UPDATE_EMAIL"
  console.log(action.arguments) // => [123, "foo@bar.com"];
});

app.router = Router.create({ routes });
app.rehydrate();

app.router.run(function (Handler, state) {
  React.render((
    <Marty.ApplicationContainer app={app}>
      <Handler {...state.params} />
    </Marty.ApplicationContainer>
  ), document.getElementById('app'));
});

// const routes = (
//   <Route name="app" path="/" handler={App}>
//     <Route name="scoreboard" handler={Scoreboard} />
//     <Route name="log" handler={Log} />
//     <Route name="rules" handler={Rules} />
//   </Route>
// );
//
// Router.run(routes, function (Handler) {
//   React.render((
//     <ApplicationContainer app={app}>
//       <Handler/>
//     </ApplicationContainer>
//   ), document.getElementById('app'));
// });

export default App;
