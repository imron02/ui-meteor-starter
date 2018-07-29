import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import StatusBarReducer from '../components/StatusBar/reducer';

const store = createStore(
  combineReducers({
    StatusBarReducer
  }),
  applyMiddleware(logger)
);

export default store;
