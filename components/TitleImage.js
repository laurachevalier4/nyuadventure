'use strict'
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

class TitleImage extends Component {
  render() {
      return (
        <View>
          <Image
            style={styles.resizeMode}
            resizeMode={Image.resizeMode.contain}
            source={require('../images/nyuadventure1.png')}
          />
        </View>
      )
  }
}

const styles = {
  resizeMode: {
    width: 375,
    height: 625,
    flexDirection: "column",
    flex:1,
  }
}

module.exports = TitleImage
