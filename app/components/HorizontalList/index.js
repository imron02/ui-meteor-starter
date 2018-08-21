// @flow

import React, { Component } from 'react';
import { FlatList, View, Text, ImageBackground } from 'react-native';

import type { Props, DataObject } from './props';
import styles from './styles';

class VerticalList extends Component<Props> {
  renderItem = (data: any) => {
    const { item } = data;
    return (
      <View style={styles.container}>
        <ImageBackground source={item.image} style={styles.image}>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </ImageBackground>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  keyExtractor = (item: DataObject, index: number) => index.toString();

  render() {
    const { data } = this.props;

    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        horizontal
      />
    );
  }
}

export default VerticalList;
