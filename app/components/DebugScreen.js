import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { logout } from '../dux/login';
import { Observable, Subject } from 'rxjs';

class DebugScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start$: new Subject(),
      text: '--',
    };

    this.state.start$.debounceTime(500).scan(i => i + 1, 0).subscribe(i => this.log(i));
  }

  log = text => {
    this.setState(() => ({ ...this.state, text }));
  };

  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text>
          {String(this.props.navigation.state.params.text)}
        </Text>
        <Button title="Logout" onPress={() => this.props.dispatch(logout())} />
        <View style={{ height: 30 }} />
        <Button title="Start" onPress={() => this.state.start$.next()} />
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

export default connect()(DebugScreen);
