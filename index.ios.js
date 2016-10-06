/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import StatusBarBackground from './components/StatusBarBackground';
import TitleImage from './components/TitleImage';
import FBLogin from '.components/FBLogin';

class nyu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground style={{backgroundColor: "black"}}/>
        <Text style={{textAlign: 'center'}}>
          Welcome to my ios app!
        </Text>
        <TitleImage style={{}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  image: {
    flex: 1
  }

});

AppRegistry.registerComponent('nyu', () => nyu);
