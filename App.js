import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, WhiteSpace, WingBlank} from '@ant-design/react-native';

export default class App extends Component {
  render() {
    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        <Text>Ant Design Boiler Plate</Text>
        <WhiteSpace size="lg" />
        <Button onPress={() => alert('Hi!')}>Welcome</Button>
      </WingBlank>
    );
  }
}
