// @flow
'use strict';

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
import { joinWorld, createWorld } from '../actions/world';
import { logout } from '../actions/login';

class WorldScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Choose a World',
    };
  }

  constructor(props) {
    super(props);
    this.initialState = {
      key: 'some-random-world',
    };
    this.state = this.initialState;
  }

  keyChange = value => {
    this.setState({
      ...this.state,
      key: value,
    });
  };

  joinPress = () => {
    const { key } = this.state;
    this.props.dispatch(joinWorld(key));
  };

  createPress = () => {
    const { key } = this.state;
    this.props.dispatch(createWorld(key));
  };

  renderError = () => {
    const { errorMessage } = this.props;
    if (!errorMessage) return null;
    return <Text style={styles.error}>{`Error: ${errorMessage}`}</Text>;
  };

  render() {
    const { key } = this.state;

    return (
      <View style={styles.screen}>
        {this.renderError()}
        <TextInput value={key} placeholder="World Key" onChangeText={this.keyChange} />
        <View style={styles.buttonWrapper}>
          <Button title="Join World" onPress={this.joinPress} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Create World" onPress={this.createPress} />
        </View>
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
  error: {
    textAlign: 'center',
    color: 'darkred',
    marginTop: 50,
    fontSize: 10,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});

function mapStateToProps({ world }) {
  return { world };
}

export default connect(mapStateToProps)(WorldScreen);
