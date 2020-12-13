import React, { Component } from 'react';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [4, 5, 6, 5, 4, 2, 3], //to be fetched
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // plotting
        strokeWidth: 2 // optional
      }
    ],
    legend: ["No. of work hours this week"] // name of graph
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

class Analysis extends Component {
    render(){
        return (
            <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            />
        )
    }
}

export default Analysis;
