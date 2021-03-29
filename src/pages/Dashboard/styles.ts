import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    textDecorationLine: 'underline',
    fontSize: 14,
  },

  calloutSmallText: {
    color: '#005555',
    fontSize: 10,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    top: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 56,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    width: 250,
    paddingLeft: 15,
    color: '#8fa7b3',
  },

  searchUserButton: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Container = styled.View`
  flex: 1;
`;
