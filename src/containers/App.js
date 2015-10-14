import { connect } from 'react-redux';
import Main from 'components/Main';
import { bindActionCreators } from 'redux';
import * as LogActions from 'actions/log';


function mapStateToProps(state) {
  return {
    logEntries: state.logEntries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LogActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
