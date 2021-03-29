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
  flex: 0.9;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
  margin-top: 24px;
`;

export const PropertyList = styled.View`
  margin-top: 10px;
  border-width: 1;
  padding: 15px;
  border-color: #000000;
  background-color: #f9f3f7;
`;

export const Select = styled.TextInput`
  margin-top: 10px;
  border-width: 1px;
  border-color: #000000;
  background-color: #f2f2f2;
`;

export const Footer = styled.View`
  flex: 0.1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const Button = styled(RectButton)`
  background: #8c683b;
  align-items: center;
  padding: 10px 20px;
  justify-content: center;
  margin: 0 80px 24px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 15px;
  color: #ffff;
`;
