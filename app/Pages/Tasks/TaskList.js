import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Task from '../../Models/Task';

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

    this.props.navigation.addListener(
      'focus',
      () => {
        Task.query().then( tasks => {
          tasks = (tasks).map(e => ({
            ...e,
            date: new Date(e.deadline),
          }));
          // console.log("tasks:"+JSON.stringify(tasks))
          this.setState({ tasks });
        }
      ) 
     }
    );

    Task.query().then( tasks => {
        tasks = (tasks).map(e => ({
          ...e,
          date: new Date(e.deadline),
        }));
        this.setState({ tasks });
      }
    )     
  }

  handleAddTask = () => {
    this.props.navigation.navigate('AddTaskForm')
  }


  render() {
    return [
        <Text style={styles.header}>Your tasks</Text>,
      <FlatList
        //key="flatlist"
        key={item => item.id.toString()}
        data={this.state.tasks}
        style={styles.list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, separators }) => (
          <TaskCard
            key={item.id.toString()}
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