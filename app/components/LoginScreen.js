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
import { login, logout } from '../dux/login';
import { networkConnect } from '../dux/network';
import { msgToString } from '../services/messaging';

class LoginScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Login',
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.initialState = {
      host: '192.168.100.1:8080',
      username: 'David',
    };
    this.state = this.initialState;
  }

  hostChange = value => {
    this.setState({
      ...this.state,
      host: value,
    });
  };

  usernameChange = value => {
    this.setState({
      ...this.state,
      username: value,
    });
  };

  connectPress = () => {
    const { host, username } = this.state;
    this.props.dispatch(networkConnect(host));
    Keyboard.dismiss();
  };

  renderSubmit = () => {
    if (this.props.network.connecting) {
      return <ActivityIndicator style={styles.spinner} size="large" />;
    } else {
      return (
        <View style={styles.buttonWrapper}>
          <Button title="Connect" onPress={this.connectPress} />
        </View>
      );
    }
  };

  renderError = () => {
    const { errorMessage } = this.props.network;
    if (!errorMessage) return null;
    return <Text style={styles.error}>{`Error: ${errorMessage}`}</Text>;
  };

  render() {
    const { host, username } = this.state;
    const { connecting } = this.props.network;

    return (
      <View style={styles.screen}>
        <View style={styles.top}>
          <Text style={styles.title}>GangsClient v0.1</Text>
          <Text>
            {msgToString(this.props.message.lastReceived)}
          </Text>
          {this.renderError()}
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
  error: {
    textAlign: 'center',
    color: 'darkred',
    marginTop: 50,
    fontSize: 10,
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
  },
});

function mapStateToProps({ network, message }) {
  return { network, message };
}

export default connect(mapStateToProps)(LoginScreen);
