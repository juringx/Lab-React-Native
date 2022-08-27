import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props){
    return (
        <View>
            <Text style={styles.FontText}>{props.main}</Text>
            <Text style={styles.FontText}>{props.description}</Text>
            <Text style={styles.FontText}>{props.temp}</Text>
            <Text style={styles.FontText}>°C</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    FontText:{
        fontSize: 20,
        textAlign:'center',
        fontWeight:'400',
        textAlignVertical:'bottom'
    },
})