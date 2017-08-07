import React, { Component } from 'react';
import { Text } from 'react-native';

class SomeScreen extends Component {
  render() {
    return <Text>{String(this.props.navigation.state.params.name)}</Text>;
  }
}

export default SomeScreen;
