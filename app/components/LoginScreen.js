// @flow
"use strict";

import React, { Component } from 'react';
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
import Login from '../../lib/Login';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '192.168.100.1:8080',
      username: 'David',
      connecting: false,
    };
  }

  hostChange = (value) => {
    this.setState({
      ...this.state,
      host: value,
    });
  };

  usernameChange = (value) => {
    this.setState({
      ...this.state,
      username: value,
    });
  };

  connectPress = () => {
    Login.login(this.state);
    Keyboard.dismiss();
    this.setState({
      ...this.state,
      connecting: true,
    });
  };

  renderSubmitButton = () =>
    <View style={styles.buttonWrapper}>
      <Button title="Connect" onPress={this.connectPress} />
    </View>;

  renderSubmit = () => {
    if(this.state.connecting) {
      return <ActivityIndicator style={styles.spinner} size="large" />;
    } else {
      return this.renderSubmitButton();
    }
  };

  render() {
    const { host, username, connecting } = this.state;

    return (
      <View style={styles.screen}>
        <View style={styles.top}>
          <Text style={styles.title}>
            GangsClient v0.1
          </Text>
        </View>
        <View style={styles.bottom}>
          <TextInput
            value={host}
            placeholder="Host"
            onChangeText={this.hostChange}
            editable={!connecting}
          />
          <TextInput
            autoFocus={true}
            value={username}
            placeholder="Username"
            onChangeText={this.usernameChange}
            onSubmitEditing={this.connectPress}
            editable={!connecting}
          />
          {this.renderSubmit()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: 'darkgrey',
    fontWeight: 'bold',
    fontSize: 20,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    padding: 10,
    justifyContent: 'flex-start',
  },
  spinner: {
    marginTop: 30,
  },
  buttonWrapper: {
    marginTop: 20,
  }
});

function mapStateToProps(state) {
  console.log(state.network);
  return { socket: state.socket, socketConnected: state.socketConnected };
}

export default connect(mapStateToProps)(LoginScreen)
