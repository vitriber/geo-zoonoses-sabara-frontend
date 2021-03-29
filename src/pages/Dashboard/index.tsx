import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMap from 'react-native-vector-icons/Fontisto';
import { RectButton } from 'react-native-gesture-handler';

import styles, { Container } from './styles';
import { TextInput } from '../../components/Input/styles';

Icon.loadFont();

const initialRegion = {
  latitude: -19.9541866,
  longitude: -44.010382899999996,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

const Dashboard: React.FC = ({ navigation }: any) => {
  // const { user } = useAuth();
  const { navigate } = useNavigation();
  const [region, setRegion] = useState<Region>();

  const [location, setLocation] = useState(false);

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

  const navigateToProfile = useCallback(() => {
    navigate('Property');
  }, [navigate]);

  useEffect(() => {
    // getCurrentPosition();
  }, []);

  function handleShowLocation() {
    setLocation(true);
  }

  return (
    <Container>
      <MapView
        zoomEnabled
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -19.8900372,
          longitude: -43.8107916,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        initialRegion={initialRegion}
      >
        {location && (
          <>
            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.88876, longitude: -43.8072727 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>

            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.8879236, longitude: -43.8075518 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>

            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.8897178, longitude: -43.8068386 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>

            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.8894595, longitude: -43.8090232 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>

            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.891167, longitude: -43.807542 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>

            <Marker
              onPress={navigateToProfile}
              coordinate={{ latitude: -19.8871224, longitude: -43.811116 }}
            >
              <IconMap size={30} name="map-marker-alt" color="#8C683B" />
            </Marker>
          </>
        )}
      </MapView>

      <View style={styles.footer}>
        <Icon size={25} name="menu" onPress={() => navigation.openDrawer()} />
        <TextInput placeholder="Procurar focos" style={styles.footerText} />
        <RectButton
          style={styles.searchUserButton}
          onPress={handleShowLocation}
        >
          <Icon size={25} name="search" />
        </RectButton>
      </View>
    </Container>
  );
};

export default Dashboard;
