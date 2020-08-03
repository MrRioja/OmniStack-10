import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -23.7799111, longitude: -46.674946 }}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/55336456?s=460&u=5c069015e77af211dceee02f6a3388c5453ed53a&v=4",
          }}
        />
      </Marker>
      //1 hour
      <Callout>
        <View style={styles.callout}>
          <Text style={styles.devName}>Luiz Rioja</Text>
          <Text style={styles.devBio}>Salve Quebrada</Text>
          <Text style={styles.devTechs}>NodeJS, ReactJS</Text>
        </View>
      </Callout>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF",
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  devBio: {
    color: "#666",
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },
});

export default Main;
