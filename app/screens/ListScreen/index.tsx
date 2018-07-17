import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { Props } from './props';
import { State } from './state';
import styles from './style';
import VerticalList from '../../components/VerticalList';

const meteorLogoRed = require('../../assets/images/meteor_logo_red.png');

class ListScreen extends Component<Props, State> {
  state: State = {
    data: []
  };

  constructor(props: Props) {
    super(props);

    const data = [
      { image: meteorLogoRed, title: 'Title satu', subTitle: 'Subtitle satu' },
      { image: meteorLogoRed, title: 'Title dua', subTitle: 'Subtitle dua' },
      { image: meteorLogoRed, title: 'Title tiga', subTitle: 'Subtitle tiga' },
      { image: meteorLogoRed, title: 'Title empat', subTitle: 'Subtitle empat' },
      { image: meteorLogoRed, title: 'Title lima', subTitle: 'Subtitle lima' }
    ];

    this.state = {
      data
    };
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Vertical List</Text>

        <VerticalList data={data} />
      </View>
    );
  }
}

export default ListScreen;