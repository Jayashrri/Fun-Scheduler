import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import TaskCard from './TaskCard';

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        top: 20,
        padding: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 25,
    },
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

class TaskList extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        tasks: this.state.tasks.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const tasks = require('./db.json').tasks.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ tasks });
  }

  handleAddTask = () => {
    this.props.navigation.navigate('AddTaskForm')
  }


  render() {
    return [
        <Text style={styles.header}>Your tasks</Text>,
      <FlatList
        key="flatlist"
        data={this.state.tasks}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <TaskCard
            task={item}
          />
        )}
      />,
      <ActionButton
      key="fab"
      buttonColor="rgba(231,76,60,1)"
      onPress={this.handleAddTask}
    />,

    ];
  }
}

export default TaskList;