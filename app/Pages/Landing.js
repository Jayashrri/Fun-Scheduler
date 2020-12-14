import React from 'react';

import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function Landing() {
    return (
        <ImageBackground source={require('../assets/home_bg.png')} style={styles.imgBackground}>
                <Image source={require('../assets/home_clouds.png')} style={styles.imgCloud}></Image>
                <Text style={styles.header}>Welcome Back, <Text style={{color: '#ff0000'}}>blah blah</Text></Text>
                <Image source={require('../assets/red_dino.png')} style={styles.imgDino}></Image>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor='#8a2be2'>
                        <Text>Do Something</Text>
                </TouchableHighlight>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1 ,
        resizeMode: 'cover'
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
        top: '21%',
        height: 'fit-content',
        textTransform: 'uppercase',
        fontSize: 20
    },
    button: {
        position: 'absolute',
        top: '70%',
        alignItems: 'center',
        left: '30%',
        padding: '10px',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#000',
        color: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#BA55D3c2'
    }
})
    
export default Landing;