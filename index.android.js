import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import setupStore from './app/services/setupStore';
import App from './app/components/App';

export default class reactNativeTest extends Component {
  render() {
    return (
      <Provider store={setupStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
