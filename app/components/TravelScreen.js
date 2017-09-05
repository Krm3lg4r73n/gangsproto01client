// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  Keyboard,
  View,
  ActivityIndicator,
} from 'react-native';
import { playerCreate } from '../dux/player';

class TravelScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Travel',
    };
  }

  constructor(props) {
    super(props);
    this.initialState = {};
    this.state = this.initialState;
  }

  render() {
    const { name } = this.state;

    return (
      <View style={styles.screen}>
        <Text>TravelScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 50,
  },
});

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TravelScreen);
