import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerRightRoutes from './drawerRight.routes';

const Stack = createStackNavigator();

export default () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="RightDrawer"
          component={DrawerRightRoutes}
        />
      </Stack.Navigator>
  );
};
