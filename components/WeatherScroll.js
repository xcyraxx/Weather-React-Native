import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'

const WeatherScroll = () => {
    return (
        <ScrollView horizontal={true} 
        style={styles.scrollView}>
            <CurrentTempEl/>
        </ScrollView>
    )
}
const rain = require('../assets/rain.png')
const CurrentTempEl = () => {
    return(
        <View style={styles.currentTempContainer}>
            <Image source={rain} style={styles.imag} />
            <View style={styles.imag}>
                <Text style={styles.day}>Tuesday</Text>
                <Text style={styles.temp}>Night - 28&#176;C</Text>
                <Text style={styles.temp}>Day - 35&#176;C</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
        backgroundColor: "#18181bcc",
        padding: 30
    },
    imag: {
        width: 150,
        heigth:150
    },
    currentTempContainer: {
        flexDirection:'row',
        backgroundColor:'#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: '#00000033',
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    }
})

export default WeatherScroll
