// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Keyboard,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Observable, Subject } from 'rxjs';
import { copy } from '../services/placeholders';
import { sceneEnter, sceneNewEnvironmentLine } from '../dux/scene';

const ENVIRONMENT_ANIM_VALUE = 0;
const CONFLICT_ANIM_VALUE = 1;

class SceneScreen extends Component {
  static navigationOptions() {
    return {
      title: 'Scene',
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      switchAnim: new Animated.Value(ENVIRONMENT_ANIM_VALUE),
      debugRunScene$: new Subject(),
    };

    this.state.debugRunScene$
      .switchMap(() => this.runScenesObs())
      .subscribe(action => props.dispatch(action));
  }

  runScenesObs = () =>
    Observable.concat(
      Observable.of(sceneEnter({ name: 'TestScene01' })),
      Observable.of(sceneNewEnvironmentLine('Test Line 1')),
      Observable.of(sceneNewEnvironmentLine('Test Line 2')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 3')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 4')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 5')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 6')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 7')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 8')).delay(Math.random() * 3000),
      Observable.of(sceneNewEnvironmentLine('Test Line 9')).delay(Math.random() * 3000),
    );

  debugRunScene = () => {
    this.state.debugRunScene$.next();
  };

  toEnvironment = () => {
    Animated.timing(this.state.switchAnim, {
      toValue: ENVIRONMENT_ANIM_VALUE,
      duration: 200,
    }).start(() => setTimeout(this.onAction, 0));
  };
  toConflict = () => {
    Animated.timing(this.state.switchAnim, {
      toValue: CONFLICT_ANIM_VALUE,
      duration: 200,
    }).start(() => setTimeout(this.onAction, 0));
  };

  renderEnvironmentLine = line => {
    return (
      <View key={line}>
        <Text style={styles.text}>
          {line}
        </Text>
      </View>
    );
  };

  renderEnvironmentLines = () => {
    const { environmentLines } = this.props.scene;
    let lines = environmentLines.slice(0);
    lines.reverse();
    return (
      <View /*onPress={this.toEnvironment}*/>
        {lines.map(this.renderEnvironmentLine)}
      </View>
    );
  };

  render() {
    const minHeight = '25%';
    const maxHeight = '75%';
    const minColor = 'hsl(0, 0%, 50%)';
    const maxColor = 'hsl(0, 0%, 80%)';

    const switchEnvironmentStyle = {
      height: this.state.switchAnim.interpolate({
        inputRange: [ENVIRONMENT_ANIM_VALUE, CONFLICT_ANIM_VALUE],
        outputRange: [maxHeight, minHeight],
      }),
      backgroundColor: this.state.switchAnim.interpolate({
        inputRange: [ENVIRONMENT_ANIM_VALUE, CONFLICT_ANIM_VALUE],
        outputRange: [maxColor, minColor],
      }),
    };
    const switchConflictStyle = {
      height: this.state.switchAnim.interpolate({
        inputRange: [ENVIRONMENT_ANIM_VALUE, CONFLICT_ANIM_VALUE],
        outputRange: [minHeight, maxHeight],
      }),
      backgroundColor: this.state.switchAnim.interpolate({
        inputRange: [ENVIRONMENT_ANIM_VALUE, CONFLICT_ANIM_VALUE],
        outputRange: [minColor, maxColor],
      }),
    };

    return (
      <View style={styles.screen}>
        {/* <Animated.View style={switchEnvironmentStyle}> */}
        <Button title="[DEBUG] Run Scene" onPress={this.debugRunScene} />
        <ScrollView
          style={styles.environment}
          ref={component => (this._environmentView = component)}
        >
          {this.renderEnvironmentLines()}
        </ScrollView>
        {/* </Animated.View> */}
        {/* <Animated.View style={switchConflictStyle}>
          <ScrollView style={styles.conflict} ref={component => (this._conflicView = component)}>
            <Text style={styles.text} onPress={this.toConflict}>
              {copy}
            </Text>
          </ScrollView>
        </Animated.View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  environment: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  conflict: {},
  text: {
    margin: 10,
    fontSize: 17,
  },
});

function mapStateToProps({ scene }) {
  return { scene };
}

export default connect(mapStateToProps)(SceneScreen);
