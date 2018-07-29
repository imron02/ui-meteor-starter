import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

// Navigator
import Navigator from './app/navigator/container';

// Store
import store from './app/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
