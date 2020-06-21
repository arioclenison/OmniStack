import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppSatack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppSatack.Navigator screenOptions={{ headerShown: false }}>
        <AppSatack.Screen name="Incidents" component={Incidents}/>
        <AppSatack.Screen name="Detail" component={Detail}/>
      </AppSatack.Navigator>

    </NavigationContainer>
  );
}