// @flow
"use strict";

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { AppRegistry } from 'react-native';
import App from './app/components/App';

const initalState = {
  text: 'bla',
  socketConnected: false,
  socket: null,
};

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        socketConnected: true,
        socket: action.socket,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default class reactNativeTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
