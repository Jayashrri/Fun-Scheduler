import React, { Component } from 'react';
import {LineChart, PieChart} from "react-native-chart-kit";
import { Dimensions, SafeAreaView, Text, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const weeklyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [4, 5, 6, 5, 4, 2, 3], //to be fetched
        color: (opacity = 1) => `rgba(1, 93, 3, ${opacity})`, // plotting
        strokeWidth: 2 // optional
      }
    ],
    legend: ["No. of work hours this week"] // name of graph
  };
const dailyHobiesdata = [
    {
      name: "Read",
      hours: 2,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Walk",
      hours: 3,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Sleep",
      hours: 3,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const weeklyChartConfig = {
    backgroundGradientFrom: "#0100fc",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#0100fc",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(1, 0, 186, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    top: '21%'
  };
  const hobyChartConfig = {
    color: (opacity = 1) => `rgba(1, 0, 186, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    top: '21%'
  };

  const styles = StyleSheet.create({
    header: {
      textAlign: 'center',
      top: 20,
      padding: 10,
      textTransform: 'uppercase',
      fontWeight: "bold",
      fontSize: 20,
    },
    header2: {
      textAlign: 'center',
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: "bold",
      fontSize: 15,
    },
    weeklyChart: {
      paddingBottom:20
    }
  })

class Analysis extends Component {
    render(){
        return (
          <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Statistics</Text>
          <Text style={styles.header2}>Keep track of ur productivity</Text>
          <LineChart
            data={weeklyData}
            width={screenWidth}
            height={220}
            chartConfig={weeklyChartConfig}
            style={styles.weeklyChart}
            />
          <Text style={styles.header2}>Hobbies you enjoyed</Text>
          <PieChart
            data={dailyHobiesdata}
            width={screenWidth}
            height={220}
            chartConfig={hobyChartConfig}
            accessor={"hours"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 10]}
            absolute
          />
           </SafeAreaView>
        )
    }
}

export default Analysis;
