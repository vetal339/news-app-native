import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';




export default function Main({navigation}) {

    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool!!!', key: '1', img: 'https://avatars.mds.yandex.net/i?id=a634ea5f35e869838cc49f2e112b43fd-4815706-images-thumbs&n=13'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!!!', key: '2', img: 'https://avatars.mds.yandex.net/i?id=0b4db5cdb6ba738b4b5d153030ab6df7-5713119-images-thumbs&n=13'},
        {name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!!!', key: '3', img: 'https://avatars.mds.yandex.net/i?id=cfff8a93c82ae7851d4d1fe3fd8bafad-5276390-images-thumbs&n=13'}
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

        return (
            <View style={gStyle.main}>
                <Modal visible={modalWindow}>
                    <View style={gStyle.main}>
                        <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                        <Text style={styles.title}>
                            Форма добавления статей
                        </Text>
                        <Form addArticle={addArticle}/>
                    </View>
                </Modal>
                <Ionicons name="ios-add-circle-sharp" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
                <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() =>  navigation.navigate('FullInfo', item)}>
                        <Image style={styles.image} source={{
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
    },
    image: {
        width: '100%',
        height: 200,
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15,
    },
    iconClose: {
        textAlign: 'center'
    }
});
