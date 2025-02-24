import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, Dimensions, Animated } from "react-native";
import Svg, { Circle, Path, Image, Defs, ClipPath } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function ProgressBar(props) {
  const [eggAnimation, setEggAnimation] = useState(new Animated.Value(0));

  const { width } = Dimensions.get("window");
  const cX = 0.5 * 0.8 * width;
  const cY = 0.5 * 0.8 * width;

  const radius = 0.4 * 0.8 * width;
  const arc = describeArc(cX, cY, radius, 0, props.angle);

  const moveEgg = useRef(
    Animated.loop(
      Animated.sequence([
        Animated.delay(3000),
        Animated.timing(eggAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(eggAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(eggAnimation, {
          toValue: -1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(eggAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ])
    )
  ).current;

  React.useEffect(() => {
    if (props.eggRunning) {
      eggAnimation.setValue(0);
      moveEgg.start();
    } else {
      moveEgg.reset();
    }
    return () => moveEgg.reset();
  }, [props.eggRunning]);

  const eggPosition = eggAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  return (
    <View style={styles.progress}>
      <Svg height={cY * 2} width={cX * 2}>
        <Defs>
          <ClipPath id="clip">
            <Circle cx={cX} cy={cY} r={radius - 5} />
          </ClipPath>
        </Defs>
        <Circle
          cx={cX}
          cy={cY}
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="10"
        />
        <Image
          href={require("../assets/nest.png")}
          width={radius * 1.5}
          preserveAspectRatio="xMidYMid slice"
          x={cX - radius * 0.75}
          y={cY + radius * 0.25}
          clipPath="url(#clip)"
        />
        <Path
          d={arc}
          r={radius}
          fill="none"
          stroke="crimson"
          strokeWidth="10"
        />
      </Svg>
      <Animated.Image
        source={require("../assets/egg.png")}
        style={{
          width: radius,
          height: radius * 1.5,
          resizeMode: "contain",
          position: "absolute",
          top: radius * 0.5,
          alignSelf: "center",
          transform: [{ rotate: eggPosition }],
        }}
      />
    </View>
  );
}

function Timer({ navigation }) {
  const [running, setRunning] = useState(true);
  const [totalTime, setTotalTime] = useState(0.25);
  const [endTime, setEndTime] = useState(moment.duration(totalTime, "m"));
  const [state, setState] = useState({
    hours: ("00" + endTime.hours()).slice(-2),
    minutes: ("00" + endTime.minutes()).slice(-2),
    seconds: ("00" + endTime.seconds()).slice(-2),
  });
  const [angle, setAngle] = useState(0.01);
  const [eggRunning, setEggRunning] = useState(true);

  const angleIncrement = 359.99 / (totalTime * 60);

  const toggleTimer = () => {
    setRunning(!running);
    setEggRunning(!eggRunning);
  };

  const stopTimer = () => {
    navigation.navigate("Main", { screen: "Home" });
  };

  const updateTimer = () => {
    if (endTime.asSeconds() <= 0) {
      setRunning(false);
      setEggRunning(false);
      stopTimer();
    } else {
      endTime.subtract(1, "s");
      setEndTime(endTime);

      const hours = ("00" + endTime.hours()).slice(-2);
      const minutes = ("00" + endTime.minutes()).slice(-2);
      const seconds = ("00" + endTime.seconds()).slice(-2);

      setState({
        hours,
        minutes,
        seconds,
      });

      const newAngle =
        angle + angleIncrement <= 359.99 ? angle + angleIncrement : 359.99;
      setAngle(newAngle);
    }
  };

  React.useEffect(() => {
    if (!running) return;

    let timerInterval;
    if (running) {
      timerInterval = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [endTime, angle, running]);

  return (
    <View style={styles.container}>
      <View>
        <View style={{ transform: [{ scale: 1.25 }] }}>
          <ProgressBar angle={angle} eggRunning={eggRunning} />
        </View>
        <Text style={styles.timerText}>
          {state.hours} : {state.minutes} : {state.seconds}
        </Text>
      </View>
      <View style={styles.buttons}>
        {running ? (
          <>
            <TouchableOpacity onPress={toggleTimer}>
              <MaterialCommunityIcons name="pause" size={70} color="black" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={toggleTimer}>
              <MaterialCommunityIcons name="play" size={70} color="black" />
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity onPress={stopTimer}>
          <MaterialCommunityIcons name="stop" size={70} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    justifyContent: "center",
  },

  timerText: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
  },

  progress: {
    aspectRatio: 1,
    alignItems: "center",
  },

  buttons: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Timer;
