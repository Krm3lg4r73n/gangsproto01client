import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

export class HighlightAnimation {
  constructor() {
    this.values = [new Animated.Value(0)];
    this.animation = Animated.timing(this.values[0], {
      toValue: 1,
      duration: 800,
    });
  }

  start = () => {
    this.animation.start(() => this.values[0].setValue(0));
  };
}

const MIN_RADIUS = 13;
const MAX_RADIUS = 50;

class PressHighlight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { animation } = this.props;
    const highlightAnim = animation.values[0];

    const highlightStyle = {
      opacity: highlightAnim.interpolate({
        inputRange: [0, 0.3, 1],
        outputRange: [0, 1, 0],
      }),
      width: highlightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [MIN_RADIUS * 2, MAX_RADIUS * 2],
      }),
      height: highlightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [MIN_RADIUS * 2, MAX_RADIUS * 2],
      }),
      borderRadius: highlightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [MIN_RADIUS, MAX_RADIUS],
      }),
      transform: [
        {
          translateX: highlightAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-MIN_RADIUS, -MAX_RADIUS],
          }),
        },
        {
          translateY: highlightAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-MIN_RADIUS, -MAX_RADIUS],
          }),
        },
      ],
    };
    return <Animated.View style={[styles.circle, highlightStyle, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'hsla(0, 0%, 50%, 0.5)',
  },
});

export default PressHighlight;
