import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';

import MenuItem from '../MenuItem';
import {
  Container,
  NameUser,
  TitleUser,
  Header,
  Body,
  Footer,
  Logo,
  HeaderBody,
} from './styles';

const DrawerLeft = (props: DrawerContentComponentProps): React.ReactElement => {
  const { navigation } = props;

  return (
    <Container>
      <Header>
        <HeaderBody>
          <TitleUser>Bem-Vindo</TitleUser>
          <NameUser>Vitor</NameUser>
          <DrawerItem
            label="Meus Registros"
            labelStyle={{ color: 'white' }}
            onPress={() => navigation.navigate('Meus Registros')}
          />
        </HeaderBody>
      </Header>
      <Body>
        <DrawerItem
          label="Semana Epidemiológica"
          onPress={() => navigation.navigate('Semana Epidemiológica')}
        />
        <DrawerItem
          label="Novo Registro"
          onPress={() => navigation.navigate('Novo Registro')}
        />
      </Body>
      <Footer>
        <MenuItem stack={props} onPress={() => {}} icon="power" label="Sair" />
      </Footer>
    </Container>
  );
};

export default DrawerLeft;
