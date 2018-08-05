// @flow

import { connect } from 'react-redux';
import MtrStatusBar from '.';

const mapStateToProps = (state: any) => ({
  barStyle: state.StatusBarReducer.barStyle
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MtrStatusBar);
