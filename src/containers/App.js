import { connect } from 'react-redux';
import Main from 'components/Main';
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


export default connect(mapStateToProps, mapDispatchToProps)(Main);
