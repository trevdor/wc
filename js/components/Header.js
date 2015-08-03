import React from 'react';
import mui from 'material-ui';
const AppBar = mui.AppBar;

const Header = React.createClass({

  render: function() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
});

module.exports = Header;
