import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  Content,
  Title,
  Button,
  Footer,
  ButtonText,
} from './styles';

const Property: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Vila Santa Rita</HeaderTitle>
      </Header>

      <Content>
        <Title>Semana epideomológica</Title>

        <Title>Quarteirão</Title>

        <Title> Logradouro </Title>
        <Title> Número </Title>
        <Title> Tipo do imóvel</Title>
        <Title> Visita </Title>
        <Title> Pendência </Title>

        <Title>Depósitos inspecionados</Title>
        <Title>A1 - Caixa d’água (elevado):</Title>
        <Title>A2 - outros depósitos de armazenamento de água (baixo):</Title>
        <Title>B - pequenos depósitos móveis:</Title>
        <Title>C - Depósitos lixos:</Title>
        <Title>D1 - pneus e outros materiais rodantes</Title>
        <Title>
          D2 - Lixo (recipientes plásticos, latas), sucatas, entulhos:
        </Title>
        <Title>E - Depósitos naturais:</Title>
        <Title>Nº depósitos eliminados:</Title>

        <Title>Coleta de amostras</Title>
        <Title>Número inicial das amostras (p. ex. 001):</Title>
        <Title>Número final das amostras (p. ex. 010):</Title>
        <Title>Quantidade Tubitos</Title>

        <Title>Tratamento Focal</Title>
        <Title>Imóvel Tratato?</Title>
        <Title>Quantidade Larvicida:</Title>
        <Title>Quantidade Depósitos Tratados:</Title>

        <Title>Censo</Title>
        <Title>Habitantes:</Title>
        <Title>Quantidade Larvicida:</Title>
        <Title>Quantidade Depósitos Tratados:</Title>

        <Title>Notas</Title>
        <Title>Imóvel Problemático</Title>
        <Title> Observações </Title>
      </Content>
      <Footer>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Editar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Property;
