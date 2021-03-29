import React from 'react';

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

const EpidemiologicalWeek: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Semanas Epidemiológicas</HeaderTitle>
      </Header>

      <Content>
        <PropertyList>
          <Title>Semana 1</Title>
          <Title>Situação da Atividade: Em Atividade</Title>
        </PropertyList>
        <PropertyList>
          <Title>Semana 2</Title>
          <Title>Situação da Atividade: Em Atividade</Title>
        </PropertyList>
        <PropertyList>
          <Title>Semana 3</Title>
          <Title>Situação da Atividade: Em Atividade</Title>
        </PropertyList>
        <PropertyList>
          <Title>Semana 4</Title>
          <Title>Situação da Atividade: Em Atividade</Title>
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

export default EpidemiologicalWeek;
