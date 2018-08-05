// @flow

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

// Navigator
import Navigator from './app/navigator/container';

// Store
import store from './app/store';

type Props = {};

export default class App extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
