import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import SocketIOClient from 'socket.io-client';

export default class App extends Component {
  constructor() {
    super()
    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('connection');
  }

  buttonPressed() {
    this.socket.emit('consoleAlert', 'What is the best seige weapon?');
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title={'Press me'} onPress={()=> this.buttonPressed()} />
      </View>
    );
  }
}

