'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''};
  }
  render() {
    return (
      <View>
        <TextInput
            style={{width: 200, height: 40, backgroundColor: 'white', padding: 5, margin: 5}}
            placeholder="Your 5th grade email"
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
              style={{width: 200, height: 40, backgroundColor: 'white', padding: 5, margin: 5}}
              placeholder="Your super secret password"
              onChangeText={(password) => this.setState({password})}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eeeeee",
    padding: 10,
  }
});

module.exports = Login
