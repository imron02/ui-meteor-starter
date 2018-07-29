import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Props from './props';

class MtrStatusBar extends Component<Props> {
  render() {
    const { barStyle } = this.props;

    return (
      <StatusBar barStyle={barStyle} />
    );
  }
}

export default MtrStatusBar;
