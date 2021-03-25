import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { RectButton, TextInput } from "react-native-gesture-handler";
import { View } from 'react-native';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Profile from '../Profile';

import styles, {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  //const { user } = useAuth();
  //const { navigate } = useNavigation();
  const [region, setRegion] = useState<Region>();

  // useEffect(() => {
  //   api.get('providers').then(response => {
  //     setProviders(response.data);
  //   });
  // }, []);

  // const navigateToProfile = useCallback(() => {
  //   navigate('Profile');
  // }, [navigate]);

  // const navigateToCreateAppointment = useCallback(
  //   (providerId: string) => {
  //     navigate('CreateAppointment', { providerId });
  //   },
  //   [navigate],
  // );

  const initialRegion = {
    latitude: -19.9541866,
    longitude: -44.010382899999996,
    latitudeDelta: 100,
    longitudeDelta: 100,
  };

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -19.9544975,
          longitude: -44.0098972,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        initialRegion={initialRegion}
      ></MapView>

      <View style={styles.footer}>
        <TextInput
          placeholder={`Procurar focos`}
          style={styles.footerText}
        />

        <RectButton style={styles.searchUserButton}>
        </RectButton>
      </View>

    </Container>
  );
};

export default Dashboard;
