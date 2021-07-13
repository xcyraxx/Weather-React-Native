import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'; 
import DateTime from './components/DateTime'
import WeatherScroll from './components/WeatherScroll';

const woll = require('./assets/wallpaper.jpg')
const API_KEY = '2757d34d3a7844b9e12912b8faecac24'
export default function App() {
  const[data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchData("9.4401", "76.3434")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchData(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchData = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data)
      setData(data)
      })
    }
    

  }

  return (
    <View style={styles.container}>
     <ImageBackground source={woll} style={styles.image}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode:"cover",
    justifyContent:"center"
  }
});
