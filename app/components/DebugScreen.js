import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Animated, View, Text, Button, Dimensions, StatusBar } from 'react-native';
import { logout } from '../dux/login';
import { Observable, Subject } from 'rxjs';
import Link from './Link';
import PressHighlight, { HighlightAnimation } from './PressHighlight';
import LinkedText from './LinkedText';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

class DebugScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Debug',
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      start$: new Subject(),
      text: '--',
      location: { x: 0, y: 0 },
      highlightAnimation: new HighlightAnimation(),
    };
    this.pageOffset = { x: 0, y: 0 };
    this.state.start$.debounceTime(500).scan(i => i + 1, 0).subscribe(i => this.log(i));
  }

  log = text => {
    this.setState(() => ({ ...this.state, text }));
  };

  pressed = ({ nativeEvent }) => {
    const { pageX: x, pageY: y } = nativeEvent;
    this.setState(() => ({
      ...this.state,
      location: { x: x - this.pageOffset.x, y: y - this.pageOffset.y },
    }));

    this.state.highlightAnimation.start();

    this.state.start$.next();
  };

  onScreenLayout = ({ nativeEvent }) => {
    const { width, height } = nativeEvent.layout;
    this.pageOffset = {
      x: windowWidth - width,
      y: windowHeight - height - StatusBar.currentHeight,
    };
  };

  render() {
    return (
      <View style={styles.screen} onLayout={this.onScreenLayout}>
        <Text style={styles.seperated}>
          {this.state.text}
        </Text>
        <Text style={styles.seperated}>
          <Text>Duis autem vel eum iriure dolor molestie consequat </Text>
          <Link title="in hendrerit " onPress={this.pressed} />
          <Text>in vulputate velit esse molestie consequat</Text>
        </Text>
        <Text style={styles.seperated}>
          {this.props.devServer.test}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  link: {
    color: 'red',
  },
  seperated: {
    marginTop: 10,
  },
});

function mapStateToProps({ devServer }) {
  return { devServer };
}

export default connect(mapStateToProps)(DebugScreen);
