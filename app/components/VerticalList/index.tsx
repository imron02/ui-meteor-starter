import React from 'react';
import { Component } from 'react';
import { FlatList, View, Text, Image, ImageBackground } from 'react-native';

import { Props, dataObject } from './props';
import { State } from './state';
import styles from './style';

class VerticalList extends Component<Props, State> {
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

  keyExtractor = (item: dataObject, index: number) => index.toString();

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
