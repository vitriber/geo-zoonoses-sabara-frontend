import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerLeftRoutes from './drawerLeft.routes';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerPosition="right"
    openByDefault
  >
    <Drawer.Screen name="LeftDrawer" component={DrawerLeftRoutes} />
  </Drawer.Navigator>
);

export default DrawerRoutes;
