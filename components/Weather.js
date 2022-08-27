import React, { useEffect, useState } from "react";
import { Text , ImageBackground, StyleSheet, View} from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

export default function Weather(props){
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=0bf83bc8cae3ec34c7e1a057b93deacf`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
       
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../back.jpg')} style={styles.backdrop}>
            <View style={styles.greyback}>
                <Text style={styles.FontText}>Zip Code</Text>
                <Text style={styles.Zipcode}>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        width:"100%", 
        height:"100%", 
        alignItems: 'center'
    },
    greyback:{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width:"100%", 
        height:"30%", 
        paddingTop: Constants.statusBarHeight - 50,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    FontText:{
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold'
    },
    Zipcode:{
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        padding: 10
    },
    Tempe: {
        
    }
})