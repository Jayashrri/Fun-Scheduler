import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
 import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Task from '../../Models/Task';

const styles = StyleSheet.create({
    fieldContainer: {
      marginTop: 20,
      // marginBottom: 10,
      backgroundColor: '#fff',
    },
    header: {
      top: 20,
      padding: 20,
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 25,
    },
    label: {
      padding: 20,
      fontWeight: "bold",
      fontSize: 15,
    },
    text: {
      height: 40,
      margin: 0,
      marginLeft: 7,
      marginRight: 7,
      paddingLeft: 10,      
    },
    borderTop: {
      borderColor: '#edeeef',
      borderTopWidth: 0.5,
    },
    button: {
      height: 50,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      alignSelf: 'stretch',
      margin: 10,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

  export function formatDateTime(dateString) {
    const parsed = moment(new Date(dateString));
  
    if (!parsed.isValid()) {
      return dateString;
    }
  
    return parsed.format('H A on D MMM YYYY');
  }

class AddTaskForm extends Component {
  state = {
    title: null,
    date: 'Jan 01 2021 01:01:01',
    duration: null,
    description: null,
  };

  handleAddPress = async () => {
    let newTask = {
      title: this.state.title,
      deadline: this.state.date,
      description: "",
      duration: formatDateTime(this.state.duration),
      time_spent: 0,
      status: false
    };

    //add with create()
    Task.create(newTask).then(() => {
      this.props.navigation.goBack();
    }
    );
  }

  handleChangeTitle = (value) => {
      this.setState( { title: value});
  }
  handleChangeDesc = (value) => {
    this.setState( { description: value});
}
  handleChangeDuration = (value) => {
    this.setState( { duration: value});
}
  handleChangeDate = (value) => {
    this.setState({ date: value});
  }
  handleDatePress = () => {
    this.setState({showDatePicker: true,});
  }
  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false,
    });
  }

  render() {
    return (
      <View style={{ flex: 1}}>
      <Text style={styles.header}>Add a new task</Text>
      <View style={styles.fieldContainer}>
      <Text style={styles.label}>Name of the task:</Text>
      <TextInput
            style={styles.text}
            onChangeText={this.handleChangeTitle}
            placeholder="Task title"
            spellCheck={false}
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
      </View>
      {/* <View style={styles.fieldContainer}>
      <Text style={styles.label}>Description of the task:</Text>
      <TextInput
            style={styles.text}
            onChangeText={this.handleChangeDesc}
            placeholder="Task description"
            spellCheck={false}
            value={this.state.description}
            onChange={this.handleChangeDesc}
          />
      </View> */}
      <View style={styles.fieldContainer}>
      <Text style={styles.label}>Duration:</Text>
      <TextInput
            style={styles.text}
            onChangeText={this.handleChangeDuration}
            placeholder="Task duration"
            spellCheck={false}
            value={this.state.duration}
            onChange={this.handleChangeDuration}
            keyboardType={'numeric'}
          />
      </View>
      <View style={styles.fieldContainer}>
      <Text style={styles.label}>Deadline for the task:</Text>
      <TextInput
            style={styles.text}
            onChangeText={this.handleChangeDate}
            placeholder="Jan 01 2021 01:01:01"
            spellCheck={false}
            value={this.state.date}
            onChange={this.handleChangeDate}
            dataDetectorTypes='calendarEvent'
          />

          {/* <DateTimePickerModal
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          /> */}
      </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AddTaskForm;