import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PressHighlight, { HighlightAnimation } from './PressHighlight';
import Link from './Link';

class LinkedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressLocation: { x: 0, y: 0 },
      highlightAnimation: new HighlightAnimation(),
    };
  }

  onLayout = ({ nativeEvent }) => {
    console.log(nativeEvent.layout);
  };

  onLinkPress = ({ nativeEvent }) => {
    const { pageX: x, pageY: y } = nativeEvent;
    console.log(x, y);
    this.setState(() => ({
      ...this.state,
      pressLocation: { x: x, y: y },
    }));
    this.state.highlightAnimation.start();
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === Link) {
        return React.cloneElement(child, { _onPress: this.onLinkPress });
      }
      return child;
    });

    return (
      <View onLayout={this.onLayout}>
        <PressHighlight
          style={{
            position: 'absolute',
            left: 100,
            top: 70,
          }}
          animation={this.state.highlightAnimation}
        />
        <Text>
          {children}
        </Text>
      </View>
    );
  }
}

export default LinkedText;
