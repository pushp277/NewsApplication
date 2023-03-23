import React from 'react';
import {View,Text} from 'react-native';
import { gStyle } from './styles/globalStyle';

function App() : JSX.Element {
  return (<View style={gStyle.appView}>
    <Text>App Input</Text>
  </View>);
}

export default App;