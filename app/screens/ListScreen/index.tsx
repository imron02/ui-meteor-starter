import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { Props } from './props';
import { State } from './state';
import styles from './style';
import VerticalList from '../../components/VerticalList';
import HorizontalList from '../../components/HorizontalList';

const meteorLogoRed = require('../../assets/images/meteor_logo_red.png');

class ListScreen extends Component<Props, State> {
  state: State = {
    datas: []
  };

  constructor(props: Props) {
    super(props);

    const datas = [
      {
        image: meteorLogoRed,
        title: 'Title satu',
        subTitle: 'Subtitle satu',
        rating: 1,
        description: 'Description satu'
      },
      {
        image: meteorLogoRed,
        title: 'Title dua',
        subTitle: 'Subtitle dua',
        rating: 2,
        description: 'Description dua'
      },
      {
        image: meteorLogoRed,
        title: 'Title tiga',
        subTitle: 'Subtitle tiga',
        rating: 3.5,
        description: 'Description tiga'
      },
      {
        image: meteorLogoRed,
        title: 'Title empat',
        subTitle: 'Subtitle empat',
        rating: 4,
        description: 'Description empat'
      },
      {
        image: meteorLogoRed,
        title: 'Title lima',
        subTitle: 'Subtitle lima',
        rating: 5,
        description: 'Description lima'
      }
    ];

    this.state = {
      datas
    };
  }

  render() {
    const { datas } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Horizontal List</Text>
          <VerticalList data={datas} />
        </View>

        <View>
          <Text style={styles.header}>Horizontal List</Text>
          <HorizontalList data={datas} />
        </View>
      </View>
    );
  }
}

export default ListScreen;