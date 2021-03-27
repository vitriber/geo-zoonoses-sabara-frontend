import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  PropertyList,
  Title,
  Button,
} from './styles';

const AllProperties: React.FC = ({ navigation }: any) => {
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
      <Button onPress={() => navigation.goBack()} title="Voltar para busca" />
    </Container>
  );
};

export default AllProperties;
