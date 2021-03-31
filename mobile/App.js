import React from 'react';

import {
  // SafeAreaView,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BluetoothSerial from 'react-native-bluetooth-serial';

import Home from './pages/Home';
import OutletList from './pages/Outlet-List';

const App = () => {

  const Stack = createStackNavigator();

  // function componentWillMount() {
  //   console.log("entrou aq")
  //   Promise.all([
  //     BluetoothSerial.isEnabled(),
  //     BluetoothSerial.list()
  //   ]).then((values) => {
  //     console.log(values);
  //   })

  //   BluetoothSerial.connect("20:16:10:19:62:58")
  //     .then((res) => {
  //       console.log(`Connected to device`);

  //       BluetoothSerial.write("t")
  //         .then((res) => {
  //           console.log(res);
  //           console.log('Successfuly wrote to device')
  //           this.setState({ connected: true })
  //         })
  //         .catch((err) => console.log(err.message))

  //     }).catch((err) => console.log((err.message)))
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
        />
        
        <Stack.Screen
          name="OutletList"
          component={OutletList}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
    // <Home />
  );
}

export default App;