import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux'
//import {provider as PaperProvider, DefaultTheme} from 'react-native-paper'
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/Navigator/main'
import { store } from './src/Redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent('RescuePet', () => App);