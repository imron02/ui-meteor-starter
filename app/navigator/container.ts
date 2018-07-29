import { connect } from 'react-redux';
import { setStatusBarDark, setStatusBarLight } from '../components/StatusBar/action';
import Navigator from './';

const mapStateToProps = (state: any) => ({
  bgColor: state.StatusBarReducer.bgColor
});

const mapDispatchToProps = (dispatch: any) => ({
  setStatusBarDark: () => dispatch(setStatusBarDark()),
  setStatusBarLight: () => dispatch(setStatusBarLight())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
