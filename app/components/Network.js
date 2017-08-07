// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Message,
  send,
  handle,
} from '../services/messaging';

type Props = {
  url: string,
};

type State = {
  socket: Object,
};

class Network extends Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);

    this.state = {
      socket: null,
    }
  }

  componentWillMount() {
    const { url } = this.props;

    const socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';

    socket.onopen = this.onConnected;
    socket.onmessage = this.onData;
    socket.onerror = this.onError;
    socket.onclose = this.onClose;

    this.setState({ socket });
  }

  onConnected = () => {
    console.log("Connected");

    this.props.dispatch({
      type: "SOCKET_CONNECTED",
      socket: this.state.socket,
    });

    const user = Message.User.create({
      name: "David",
    });
    send(this.state.socket, user);
  };

  onData = (event) => {
    handle(event.data);
  };

  onError = (error) => {
    console.log("Error: ");
  };

  onClose = (data) => {
    console.log("Close: ");
  };

  render() { return null; }
}

export default connect()(Network);
