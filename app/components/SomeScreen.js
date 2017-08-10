import React, { Component } from 'react';
import { Text } from 'react-native';

import Network from '../../lib/Network';
import { Message, encode } from '../services/messaging';

class SomeScreen extends Component {
  componentDidMount() {
    const person = Message.Person.create({
      name: 'HALLO Welt',
    });
    Network.send(encode(person));
  }

  render() {
    return (
      <Text>
        {String(this.props.navigation.state.params.name)}
      </Text>
    );
  }
}

export default SomeScreen;
