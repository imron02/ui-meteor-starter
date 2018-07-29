import { connect } from 'react-redux';
import MtrStatusBar from './';
import { setStatusBarDark, setStatusBarLight } from './action';

const mapStateToProps = (state: any) => ({
  barStyle: state.StatusBarReducer.barStyle
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MtrStatusBar);
