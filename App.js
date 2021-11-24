/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  const [Visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!Visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {Visible ? <Box rounded={true} size={'large'} color="blue" /> : null}
    </SafeAreaView>
  );
};

export default App;
