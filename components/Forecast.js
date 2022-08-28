import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props){
    return (
        <View>
            <Text style={styles.FontText}>{props.main}</Text>
            <Text style={styles.FontText}>{props.description}</Text>
            <Text style={styles.Tempe}>{props.temp} °C</Text>
            <Text style={styles.FontText}>Feels like {props.feels_like} °C</Text>
            <Text style={styles.FontText}>Humidity: {props.humidity}%</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    FontText:{
        fontSize: 20,
        textAlign:'center',
        fontWeight:'500',
        textAlignVertical:'bottom'
    },
    Tempe: {
        fontSize: 60,
        textAlign:'center',
        fontWeight:'bold',
        margin: 15
    },
})