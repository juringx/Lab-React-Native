import { useNavigation } from "@react-navigation/native";
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Thon Buri', code: '10600' },
    { place: 'Sakon Nakhon', code: '47000' },
    { place: 'Mae Hong Son', code: '58000' },
    { place: 'Phuket', code: '83000' },
]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight activeOpacity={0.5} underlayColor="grey" style={styles.TouchStyle} onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
    
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}/>
            <StatusBar style="auto" />
        </View>
    );
   
}

const styles = StyleSheet.create({
    zipItem:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    TouchStyle: {
        backgroundColor:'lightgrey',
        margin: 15,
        width: 200,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        borderColor: "#557A95"
    },
})
   