import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

function Rewards({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Rewards</Text>
            </View>
            <View style={styles.boxContainer}>
                <ScrollView contentContainerStyle={styles.box}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View><View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/red_dino.png')} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>Reward 1</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'blue'
    },
    header: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '20%',
        textAlign: 'center',
    },
    headerText: {
        fontSize: 48,
        fontWeight: '700',
        color: '#ffffff'
    },
    boxContainer: {
        flex: 4,
        borderTopWidth: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        // alignContent: 'space-around',
        position: 'relative'
        // paddingTop: 10
    },
    imgContainer: {
        width: '40%',
        height: '35%',
        marginTop: '3%',
        marginBottom: '3%',
        textAlign: 'center',
    },
    rewardsImage: {
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#e5e5e5'
    }
})

export default Rewards;