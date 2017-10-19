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

class PlayerScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Player',
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
        <Text style={styles.bold}>Name</Text>
        <Text>
          {this.props.player.name}
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

function mapStateToProps({ player }) {
  return { player };
}

export default connect(mapStateToProps)(PlayerScreen);
