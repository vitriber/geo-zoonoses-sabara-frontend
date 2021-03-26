import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, Linking, Text, View } from 'react-native';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetchUserGithub, fetchLocalMapBox } from '../../services/api';

import styles, { Container } from './styles';
import { TextInput } from '../../components/Input/styles';

Icon.loadFont();

interface Dev {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  latitude?: number;
  longitude?: number;
  html_url: string;
}

const initialRegion = {
  latitude: -19.9541866,
  longitude: -44.010382899999996,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

const Dashboard: React.FC = ({ navigation }: any) => {
  // const { user } = useAuth();
  // const { navigate } = useNavigation();
  const [devs, setDevs] = useState<Dev[]>([]);
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState<Region>();

  function getCurrentPosition() {
    Geolocation.getCurrentPosition(
      pos => {
        setRegion({
          latitude: pos.coords.longitude,
          longitude: pos.coords.latitude,
          latitudeDelta: 100,
          longitudeDelta: 100,
        });
      },
      error => Alert.alert('Erro', error.message),
      {
        enableHighAccuracy: false,
        timeout: 120000,
        maximumAge: 1000,
      },
    );
  }

  useEffect(() => {
    // getCurrentPosition();
  }, []);

  function handleOpenGithub(url: string) {
    Linking.openURL(url);
  }

  async function handleSearchUser() {
    let dev: Dev;

    if (!username) return;

    const githubUser = await fetchUserGithub(username);

    if (!githubUser || !githubUser.location) {
      Alert.alert(
        'Ops!',
        'Usuário não encontrado ou não tem a localização definida no Github',
      );
      return;
    }

    const localMapBox = await fetchLocalMapBox(githubUser.location);

    if (!localMapBox || !localMapBox.features[0].center) {
      Alert.alert(
        'Ops!',
        'Erro ao converter a localidade do usuário em coordenadas geográficas!',
      );
      return;
    }

    const [longitude, latitude] = localMapBox.features[0].center;

    dev = {
      ...githubUser,
      latitude,
      longitude,
    };

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

    const devAlreadyExists = dev && devs.find(user => user.id === dev.id);

    if (devAlreadyExists) return;

    setDevs([...devs, dev]);
    setUsername('');
  }

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
      >
        {devs.map(dev => (
          <Marker
            key={dev.id}
            image={{ uri: `${dev.avatar_url}&s=120` }}
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              latitude: Number(dev.latitude),
              longitude: Number(dev.longitude),
            }}
          >
            <Callout tooltip onPress={() => handleOpenGithub(dev.html_url)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{dev.name}</Text>
                <Text style={styles.calloutSmallText}>{dev.bio}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Icon size={25} name="menu" onPress={() => navigation.openDrawer()} />
        <TextInput placeholder="Procurar focos" style={styles.footerText} />
        <Icon size={25} name="search" onPress={() => navigation.openDrawer()} />
      </View>
    </Container>
  );
};

export default Dashboard;
