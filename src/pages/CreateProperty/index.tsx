import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  InputLocalidade,
  InputQuarteirao,
  Content,
  Title,
  Input,
  Select,
  Button,
} from './styles';

const CreateProperty: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Novo Registro</HeaderTitle>
      </Header>

      <Content>
        <Title>Insira a semana epideomológica</Title>
        <InputLocalidade>Selecione</InputLocalidade>
        <Title>Insira o quarteirão</Title>
        <InputQuarteirao>Selecione</InputQuarteirao>

        <Input> Logradouro </Input>
        <Input> Número </Input>
        <Select> Tipo do imóvel</Select>
        <Select> Visita </Select>
        <Select> Pendência </Select>

        <Title>Depósitos inspecionados</Title>
        <Title>A1 - Caixa d’água (elevado):</Title>
        <Input> Número </Input>
        <Title>A2 - outros depósitos de armazenamento de água (baixo):</Title>
        <Input> Número </Input>
        <Title>B - pequenos depósitos móveis:</Title>
        <Input> Número </Input>
        <Title>C - Depósitos lixos:</Title>
        <Input> Número </Input>
        <Title>D1 - pneus e outros materiais rodantes</Title>
        <Input> Número </Input>
        <Title>
          D2 - Lixo (recipientes plásticos, latas), sucatas, entulhos:
        </Title>
        <Input> Número </Input>
        <Title>E - Depósitos naturais:</Title>
        <Input> Número </Input>
        <Title>Nº depósitos eliminados:</Title>
        <Input> Número </Input>

        <Title>Coleta de amostras</Title>
        <Title>Número inicial das amostras (p. ex. 001):</Title>
        <Input> Número </Input>
        <Title>Número final das amostras (p. ex. 010):</Title>
        <Input> Número </Input>
        <Title>Quantidade Tubitos</Title>
        <Input> Número </Input>

        <Title>Tratamento Focal</Title>
        <Title>Imóvel Tratato?</Title>
        <Input> Número </Input>
        <Title>Quantidade Larvicida:</Title>
        <Input> Número </Input>
        <Title>Quantidade Depósitos Tratados:</Title>
        <Input> Número </Input>

        <Title>Censo</Title>
        <Title>Habitantes:</Title>
        <Input> Número </Input>
        <Title>Quantidade Larvicida:</Title>
        <Input> Número </Input>
        <Title>Quantidade Depósitos Tratados:</Title>
        <Input> Número </Input>

        <Title>Notas</Title>
        <Title>Imóvel Problemático</Title>
        <Input> Sim | Não </Input>
        <Title> Observações </Title>
        <Input> Insira aqui... </Input>
      </Content>
      <Button onPress={() => navigation.goBack()} title="Voltar para busca" />
    </Container>
  );
};

export default CreateProperty;
