import React, { Component } from 'react';
import { Text } from 'react-native';

class DebugScreen extends Component {
  render() {
    return (
      <Text>
        {String(this.props.navigation.state.params.text)}
      </Text>
    );
  }
}

export default DebugScreen;
