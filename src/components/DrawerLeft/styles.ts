import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #8c683b;
`;

export const HeaderBody = styled.View`
  margin-left: 16px;
  margin-top: 30px;
  background-color: #8c683b;
`;

export const Logo = styled(MaterialCommunityIcons)`
  margin-top: 50px;
`;

export const TitleUser = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #fff;
  margin-top: 24px;
`;

export const NameUser = styled.Text`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #ffff;
  margin-bottom: 32px;
`;

export const Body = styled.View``;

export const Footer = styled.View`
  margin-bottom: 15px;
`;
