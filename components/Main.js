import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyle } from "../styles/style";




export default function Main({navigation}) {

    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool!!!', key: '1', img: 'https://avatars.mds.yandex.net/i?id=a634ea5f35e869838cc49f2e112b43fd-4815706-images-thumbs&n=13'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!!!', key: '2', img: 'https://avatars.mds.yandex.net/i?id=0b4db5cdb6ba738b4b5d153030ab6df7-5713119-images-thumbs&n=13'},
        {name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!!!', key: '3', img: 'https://avatars.mds.yandex.net/i?id=cfff8a93c82ae7851d4d1fe3fd8bafad-5276390-images-thumbs&n=13'}
    ]);

        return (
            <View style={gStyle.main}>
                <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() =>  navigation.navigate('FullInfo', item)}>
                        <Image source={{
                            width: '100%',
                            height: 200,
                            uri: item.img
                        }}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{ item.anons }</Text>
                    </TouchableOpacity>
                    )} />
            </View>
        );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
        color: '#474747'
    }
});
