import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { gStyle } from "../styles/style";




export default function FullInfo({route}) {
    // const loadScene = () => {
    //     navigation.goBack();
    // }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{route.params.name}</Text>
            <Text>{route.params.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});