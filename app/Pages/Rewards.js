import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import Constants from 'expo-constants';

function Rewards({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.headerText}>Rewards</Text>
        </View>
      <ScrollView style={styles.scrollView}>
            <View style={styles.box}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino0.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 1</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino1.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 2</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino2.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 3</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino3.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 4</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino4.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 5</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino5.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 6</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino6.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 7</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino7.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 8</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino8.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 9</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/dino_images/dino9.png')} style={styles.rewardsImage}></Image>
                    <Text style={styles.imgLabel}>Reward 10</Text>
                </View>
            </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    header: {
        justifyContent: 'space-evenly',
        width: '100%',
        height: '15%',
        // paddingTop: '7%',
    },
    headerText: {
        fontSize: 48,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
    },
    scrollView: {
        flexDirection: 'column',
        backgroundColor: 'white',
        // marginHorizontal: 20,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    imgContainer: {
        width: '40%',
        // height: '35%',
        marginTop: '3%',
        marginBottom: '3%',
        textAlign: 'center',
    },
    rewardsImage: {
        // width: '100%',
        // height: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#e5e5e5'
    },
    imgLabel: {
        textAlign: 'center'
    }
});

export default Rewards;