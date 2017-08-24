import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { logout } from '../actions/login';

class DebugScreen extends Component {
  render() {
    console.log(this.props.dispatch);
    return (
      <View style={{ flex: 1 }}>
        <Text>
          {String(this.props.navigation.state.params.text)}
        </Text>
        <Button title="Logout" onPress={() => this.props.dispatch(logout())} />
      </View>
    );
  }
}

export default connect()(DebugScreen);
