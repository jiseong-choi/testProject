import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>안녕하세요 {props.name}.</Text>
      <Text>안녕하세요 {props.name2}.</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name2: 'react-native',
};

export default Greeting;
