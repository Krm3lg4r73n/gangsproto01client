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
    const { location } = this.props;
    const locName = location.loaded ? location.current_location.name : '--';
    return (
      <View style={styles.screen}>
        <Text style={styles.bold}>Current Location</Text>
        <Text>
          {locName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

function mapStateToProps({ location }) {
  return { location };
}

export default connect(mapStateToProps)(TravelScreen);
