import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import MapView, { Circle, Marker } from 'react-native-maps';
import { router, useRouter } from 'expo-router';
import * as Location from 'expo-location';
import { useEffect } from 'react';
import places from '../../assets/places';
import ToolCards from '../componts/ToolCards';
import toolslist from '../../assets/toolslist';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import PopUp from '../componts/PopUp';







export default function Home(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radius, setRadius] = useState(4);
  const [visible, setVisible] = useState(false);
  const router = useRouter();








  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location

    );
  }




  const region = {
    latitude: location ? location.coords.latitude : 0,
    longitude: location ? location.coords.longitude : 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const reporthandler = ({ location }) => {
    router.push({ pathname: '/Toolreport', location: location })





  }
  console.log();





  return (

    <View style={styles.container}>

      <MapView
        mapType='standard'
        provider="google"
        style={styles.map}
        region={region}



      >
        {/* my marker */}
        <Marker
          coordinate={{ latitude: location ? location.coords.latitude : 0, longitude: location ? location.coords.longitude : 0 }}
        >


        </Marker>


        {/* van breaking markers */}

        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}>
            <View style={styles.marker}>
              <Image source={require('../../assets/images/van.png')} style={{ width: 50, height: 50 }} />
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.butioncon}>


       <PopUp/>

       
      </View>
      <View>
        <FlatList
          horizontal
          data={toolslist}
          renderItem={({ item }) => <ToolCards toolitem={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>




  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  bution: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: "80%"

  },
  butioncon: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgrey"


  },
  marker: {
    width: 50,
    height: 50,
  },
  Modalcontainers: {
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    item: 'center',

    borderRadius: 20,
    flex: 1,
    maxHeight: 200,
    
    
  },
 

});