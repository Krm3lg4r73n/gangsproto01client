// @flow
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Message, send, registerListener } from '../services/messaging';
import Game from '../../lib/Game';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '--',
    };

    registerListener(this.msgOk, Message.Ok);
    registerListener(this.msgError, Message.Error);
    registerListener(this.msgPerson, Message.Person);
  }

  msgOk = () => {
    this.log('Ok');

    const msg = Message.WorldCreate.create({
      key: 'NEUE_WELT',
    });

    if (this.props.socketConnected) {
      send(this.props.socket, msg);
    }
  };

  msgError = error => {
    this.log(`Error: ${error.type}`);
  };
  msgPerson = person => {
    console.log('Person: ' + person.name);
  };

  log = text => {
    console.log(text);
    this.setState({
      ...this.state,
      text,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {String(this.state.text)}
        </Text>
        <Text style={styles.state}>
          {String(this.props.socketConnected)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  state: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  console.log(state.network);
  return { socket: state.socket, socketConnected: state.socketConnected };
}

export default connect(mapStateToProps)(MyComponent);
