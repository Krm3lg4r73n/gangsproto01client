import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { Observable, Subject } from 'rxjs';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  onPress = e => {
    Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 800,
    }).start();
    this.props.onPress(e);
  };

  render() {
    const { title } = this.props;

    const animStyle = {
      color: this.state.anim.interpolate({
        inputRange: [0, 0.01, 1],
        outputRange: ['hsl(347, 80%, 50%)', 'hsl(347, 90%, 90%)', 'hsl(347, 30%, 50%)'],
      }),
    };
    return (
      <Animated.Text
        style={[styles.title, animStyle, this.props.style || null]}
        onPress={this.onPress}
      >
        {title}
      </Animated.Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {},
});

export default Link;
