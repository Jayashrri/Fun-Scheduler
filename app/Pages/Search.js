import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback, Alert, Animated, Easing } from 'react-native'

import Task from '../Models/Task';

function Earth(props) {
    const [ rotation, setRotation ] = useState(new Animated.Value(0));

    React.useEffect(() => {
        rotation.setValue(0)
        Animated.loop(
            Animated.timing(
                rotation,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            )
        ).start()
    })

    const rot = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    })

    return (
        <Animated.Image 
            resizeMode={'contain'}
            source={require('../assets/earth_clip_art.png')}
            style={[props.style, {
                width: "100%",
                transform: [
                    { rotate: rot }
                ]
            }]}
        />
    )
}

const randomHexColor = () => {
    return "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
};

function Search({ navigation }) {

    const [ searching, setSearching ] = useState(true);

    const [rippleColor, setRippleColor] = useState(randomHexColor());
    const [rippleOverflow, setRippleOverflow] = useState(false);

    const [ moveSearchingAnim, setMoveSearchingAnim ] = useState(new Animated.Value(0));
    const [ moveBGAnim, setMoveBGAnim ] = useState(new Animated.Value(0));
    const [ moveResultAnim, setMoveResultAnim ] = useState(new Animated.Value(0));

    const [ task, setTask ] = useState("");

    const weighted_random = (items, weights) => {
        var i;
    
        for (i = 0; i < weights.length; i++)
            weights[i] += weights[i - 1] || 0;
        
        var random = Math.random() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;
        
        return items[i];
    }

    const dateDiff = (date1, date2) => {
        const diffTime = Math.abs(date2 - date1) / 1000 / 60; // Convert to minutes
        return diffTime;
    }

    const suggestTask = async () => {
        let taskList = await Task.query({});

        taskList = taskList.filter(t => t.status === false);

        const currentDate = Date.now();

        let taskFactors = taskList.map(t => (t.duration - t.time_spent) / dateDiff(currentDate, new Date(t.deadline)))

        let taskSum = taskFactors.reduce((a, c) => a + c);

        let taskProbabilities = taskFactors.map(t => t / taskSum);

        let chosenTask = weighted_random(taskList, taskProbabilities);

        setTask(chosenTask);
    }

    const moveSearching = () => {
        Animated.timing(
            moveSearchingAnim,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.cubic,
                useNativeDriver: false
            }
        ).start()
    }

    const moveBG = () => {
        Animated.timing(
            moveBGAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.cubic,
                useNativeDriver: false
            }
        ).start()
    }

    const moveResult = () => {
        Animated.timing(
            moveResultAnim,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.cubic,
                useNativeDriver: false
            }
        ).start()
    }

    const moveSearchingVal = moveSearchingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -60]
    })

    const moveEarthVal = moveSearchingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150]
    })

    const bgColorVal = moveBGAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(0, 0, 0)", "rgb(185, 210, 158)"]
    })

    const moveResultVal = moveResultAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-60, 0]
    })

    const moveResultImageVal = moveResultAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0]
    })

    const reset = () => {
        moveSearchingAnim.setValue(0)
        moveBGAnim.setValue(0)
        moveResultAnim.setValue(0)
        setSearching(true)
    }

    React.useEffect(() => {
        if (searching) {
            setTimeout(moveSearching, 4000)
            setTimeout(moveBG, 4000)
            setTimeout(moveResult, 4500)
            setTimeout(() => setSearching(false), 4500)
            setTimeout(suggestTask, 4500)
        }
    })

    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                width: "100%",
                backgroundColor: "#eaeaea"
            }}>

            <Animated.View 
                style={{
                    height: "40%",
                    width: "100%",
                    backgroundColor: bgColorVal,
                    marginTop: 180,
                    marginBottom: 32,
                    borderTopColor: "black",
                    borderTopWidth: 4,
                    borderBottomColor: "black",
                    borderBottomWidth: 4,
                    overflow: "hidden",
                    alignItems: "center"
                }}>
                { searching ? (
                    <>
                        <Animated.Text
                            style={{
                                fontSize: 32,
                                textAlign: "center",
                                color: "#ff9aa2",
                                marginTop: 16,
                                transform: [{ translateY: moveSearchingVal }]
                            }}>
                            Searching...
                        </Animated.Text>
                        <Animated.View style={{
                                transform: [{ translateY: moveEarthVal }],
                                width: "100%",
                            }}>
                            <Earth />
                        </Animated.View>
                    </>
                ) : (
                    <>
                        <Animated.Text
                            style={{
                                fontSize: 32,
                                textAlign: "center",
                                color: "black",
                                marginTop: 16,
                                marginBottom: 32,
                                transform: [{ translateY: moveResultVal }]
                            }}>
                            {task.title}
                        </Animated.Text>
                        <Animated.Image 
                            source={require('../assets/bulb.png')}
                            style={{
                                transform: [{ translateY: moveResultImageVal }]
                            }}
                        />
                    </>
                )}
            </Animated.View>

            { searching ? (
                    <TouchableNativeFeedback
                        onPress={() => {
                            setRippleColor(randomHexColor());
                            setRippleOverflow(!rippleOverflow);
                            navigation.navigate('Main', {screen: "Home"})
                        }}
                        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                    >
                        <View
                            style={{
                                width: 300,
                                borderColor: "black",
                                borderRadius: 10,
                                borderWidth: 1,
                                margin: 16,
                                padding: 8,
                                backgroundColor: "#D44C42"
                            }}>
                            <Text 
                                style={{
                                    fontSize: 32,
                                    textAlign: "center",
                                }}>
                                Cancel
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
            ) : (
                <>
                    <TouchableNativeFeedback
                        onPress={() => {
                            setRippleColor(randomHexColor());
                            setRippleOverflow(!rippleOverflow);
                            navigation.navigate('Timer', {screen: "Timer", params: { taskId: task.id }})
                        }}
                        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                    >
                        <View
                            style={{
                                width: 300,
                                borderColor: "black",
                                borderRadius: 10,
                                borderWidth: 1,
                                margin: 16,
                                padding: 8,
                                backgroundColor: "#5cb85c"
                            }}>
                            <Text 
                                style={{
                                    fontSize: 32,
                                    textAlign: "center",
                                }}>
                                Start
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <TouchableNativeFeedback
                            onPress={() => {
                                setRippleColor(randomHexColor());
                                setRippleOverflow(!rippleOverflow);
                                reset();
                            }}
                            background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                        >
                            <View
                                style={{
                                    width: 140,
                                    borderColor: "black",
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    margin: 8,
                                    padding: 8,
                                    backgroundColor: "#f0ad4e"
                                }}>
                                <Text 
                                    style={{
                                        fontSize: 24,
                                        textAlign: "center",
                                    }}>
                                    Reselect
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => {
                                setRippleColor(randomHexColor());
                                setRippleOverflow(!rippleOverflow);
                                navigation.navigate('Main', {screen: "Home"})
                            }}
                            background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                        >
                            <View
                                style={{
                                    width: 140,
                                    borderColor: "black",
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    margin: 8,
                                    padding: 8,
                                    backgroundColor: "#D44C42"
                                }}>
                                <Text 
                                    style={{
                                        fontSize: 24,
                                        textAlign: "center",
                                    }}>
                                    Cancel
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </>
            )}
        </View>
    )
}

export default Search;