import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import dino0 from "../assets/dino_images/dino0.png"
import dino1 from '../assets/dino_images/dino1.png'
import dino2 from '../assets/dino_images/dino2.png'
import dino3 from '../assets/dino_images/dino3.png'
import dino4 from "../assets/dino_images/dino4.png"
import dino5 from '../assets/dino_images/dino5.png'
import dino6 from '../assets/dino_images/dino6.png'
import dino7 from '../assets/dino_images/dino7.png'
import dino8 from '../assets/dino_images/dino8.png'
import dino9 from '../assets/dino_images/dino9.png'
import { useEffect, useState } from 'react';
import Task from '../Models/Task';

export const dinoData = [
  {
      id: 0,
      type: 'Dino',
      image_url: dino0,
      is_unlocked: false,
  },
  {
      id: 1,
      type: 'cera',
      image_url: dino1
  },
  {
      id: 2,
      type: 'gon',
      image_url: dino2
  },
  {
      id: 3,
      type: 'bob',
      image_url: dino3
  },
  {
      id: 4,
      type: 'lollo',
      image_url: dino4
  },
  {
      id: 5,
      type: 'igno',
      image_url: dino5
  },
  {
      id: 6,
      type: 'Dino',
      image_url: dino6
  },
  {
      id: 7,
      type: 'cera',
      image_url: dino7
  },
  {
      id: 8,
      type: 'rex',
      image_url: dino8
  },
  {
      id: 9,
      type: 'cera',
      image_url: dino9
  },
]

function Rewards({navigation}) {
    const [taskCount, setTaskCount] = useState(null);
    useEffect(() => {
        async function fetch() {
            const tasks = await Task.query({columns: 'status',
            where: {
                status_eq: true
            },});
            console.log(tasks.length)
            setTaskCount(tasks.length);
        }
        fetch();
    }, [])
    let rewards;
    if(taskCount === null){
        rewards = <ActivityIndicator size="large" />
    }else if(taskCount === 0){
        rewards = <Text style={styles.pleaseText}>Please complete some tasks to get your rewards.</Text>
    }else{
        let count = parseInt(Math.log(taskCount + 1)/(Math.log(2)));
        let data = dinoData.slice(0, count);
        rewards = data.map((d, index) => {
            return (
                    <View style={styles.imgContainer}>
                        <Image key={index} source={d.image_url} style={styles.rewardsImage}></Image>
                        <Text style={styles.imgLabel}>{d.type}</Text>
                    </View>
            )
        })
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.headerText}>Rewards</Text>
        </View>
      <ScrollView style={styles.scrollView}>
            <View style={styles.box}>
                {rewards}
                {/* <View style={styles.imgContainer}>
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
                </View> */}
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
        alignSelf: 'stretch',
        alignItems: 'center'
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