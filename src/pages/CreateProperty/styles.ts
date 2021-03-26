import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #8c683b;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
  margin-top: 10px;
`;

export const Content = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
  margin-top: 24px;
`;

export const InputLocalidade = styled.TextInput`
  border-width: 1;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const InputQuarteirao = styled.TextInput`
  border-width: 1;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const Input = styled.TextInput`
  margin-top: 10;
  border-width: 1;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const Select = styled.TextInput`
  margin-top: 10;
  border-width: 1;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const Button = styled.Button`
  background: #8c683b;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
