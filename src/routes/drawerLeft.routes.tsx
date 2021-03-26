import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppRoutes from './app.routes';
import CreateProperty from '../pages/CreateProperty';
import Property from '../pages/Property';
import EpidemiologicalWeek from '../pages/EpidemiologicalWeek';
import DrawerLeft from '../components/DrawerLeft';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerLeft {...props} />}
  >
    <Drawer.Screen name="Home" component={AppRoutes} />
    <Drawer.Screen name="Meus Registros" component={Property} />
    <Drawer.Screen
      name="Semana Epidemiológica"
      component={EpidemiologicalWeek}
    />
    <Drawer.Screen name="Novo Registro" component={CreateProperty} />
  </Drawer.Navigator>
);

export default DrawerRoutes;
