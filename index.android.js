import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import reduxStore from './app/services/reduxStore';
import App from './app/components/App';

export default class reactNativeTest extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
