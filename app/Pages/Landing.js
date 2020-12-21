import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View, Alert} from 'react-native';
import { CommonActions } from '@react-navigation/native'

function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/home_bg.png')} style={styles.imgBackground}>
                    <Image source={require('../assets/home_clouds.png')} style={styles.imgCloud}></Image>
                    <Text style={styles.header}>Welcome Back, <Text style={{color: '#ff0000'}}>Saurus!</Text></Text>
                    <Image source={require('../assets/red_dino.png')} style={styles.imgDino}></Image>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Search'}))}
                        underlayColor='#8a2be2'>
                            <Text style={{ fontSize: 32 }}>Do Something</Text>
                    </TouchableHighlight>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    imgBackground: {
        flex: 1 ,
        resizeMode: 'cover',
    }, 
    imgCloud: {
        position: 'absolute',
        marginTop: '0.5%',
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    imgDino: {
        position: 'absolute',
        top: 0,
        alignSelf: 'center',
        height: '80%',
        width: '65%',
        resizeMode: 'contain'
    },
    header: {
        color: '#000',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        top: '15%',
        // textTransform: 'uppercase',
        fontWeight: "700",
        fontSize: 28
    },
    button: {
        marginTop: 600,
        marginHorizontal: 48,
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#000',
        color: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#BA55D3c2'
    }
})
    
export default Landing;