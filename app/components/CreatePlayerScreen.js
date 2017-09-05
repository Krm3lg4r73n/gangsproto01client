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
import { playerCreate } from '../dux/player';

class CreatePlayerScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Create Player',
    };
  }

  constructor(props) {
    super(props);
    this.initialState = {
      name: 'Aris',
    };
    this.state = this.initialState;
  }

  nameChange = value => {
    this.setState({
      ...this.state,
      name: value,
    });
  };

  createPress = () => {
    const { name } = this.state;
    Keyboard.dismiss();
    this.props.dispatch(playerCreate({ name }));
  };

  render() {
    const { name } = this.state;

    return (
      <View style={styles.screen}>
        <TextInput
          value={name}
          placeholder="Name"
          autoFocus={true}
          onChangeText={this.nameChange}
        />
        <View style={styles.buttonWrapper}>
          <Button title="Create Player" onPress={this.createPress} />
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
  buttonWrapper: {
    marginTop: 20,
  },
});

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CreatePlayerScreen);
