import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Alert from './pages/Alert';
import OutletList from './pages/Outlet-List';
import ToSchedule from './pages/ToSchedule';
import Statistics from './pages/Statistics';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="OutletList"
          component={OutletList}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ToSchedule"
          component={ToSchedule}
        />
        <Stack.Screen
          name="Alert"
          component={Alert}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;