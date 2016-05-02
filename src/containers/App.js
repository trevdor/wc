import { connect } from 'react-redux';
import { App } from 'components';
import { bindActionCreators } from 'redux';
import * as log from 'actions/log';


function mapStateToProps(state) {
  return {
    logEntries: state.logEntries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(log, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
