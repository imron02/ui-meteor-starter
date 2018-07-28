import React from 'react';
import { Component } from 'react';
import { FlatList, Image, Platform, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';

import colors from '../../utils/colors';
import { MtrBtnNative, MtrBtnOpacity } from '../Buttons';
import { dataObject, Props } from './props';
import { State } from './state';
import styles from './style';

class HorizontalList extends Component<Props, State> {
  renderButton = () => {
    const title = 'VISIT';

    if (Platform.OS === 'android') {
      return <MtrBtnNative title={title} style={styles.button} />;
    }

    return <MtrBtnOpacity title={title} style={styles.button} />;
  }

  renderItem = (data: any) => {
    const { item } = data;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <StarRating
            maxStars={5}
            disabled
            rating={item.rating}
            fullStarColor={colors.RED}
            halfStarEnabled
            starSize={30}
            containerStyle={styles.starContainer}
            starStyle={styles.star}
          />
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.subTitle}>{item.description}</Text>
          {this.renderButton()}
        </View>
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
      />
    );
  }
}

export default HorizontalList;
