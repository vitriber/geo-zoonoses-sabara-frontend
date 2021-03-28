import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  PropertyList,
  Title,
  Button,
  Footer,
  ButtonText,
} from './styles';

const AllProperties: React.FC = ({ navigation }: any) => {
  const { navigate } = useNavigation();

  const navigateToProperty = useCallback(() => {
    navigate('Property');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus Imóveis</HeaderTitle>
      </Header>

      <Content>
        <PropertyList>
          <Title>Vila Santa Cruz</Title>
          <Title>Situação da Atividade: Aprovada</Title>
        </PropertyList>
        <PropertyList>
          <Title>Vila Santa Cruz</Title>
          <Title>Situação da Atividade: Aprovada</Title>
        </PropertyList>
        <PropertyList>
          <Title>Vila Santa Cruz</Title>
          <Title>Situação da Atividade: Aprovada</Title>
        </PropertyList>
        <PropertyList>
          <Title>Vila Santa Cruz</Title>
          <Title>Situação da Atividade: Aprovada</Title>
        </PropertyList>
      </Content>
      <Footer>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default AllProperties;
