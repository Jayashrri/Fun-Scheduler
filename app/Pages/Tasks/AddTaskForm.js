import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const styles = StyleSheet.create({
    fieldContainer: {
      marginTop: 40,
      marginBottom: 10,
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
    date: '',
  };

  handleAddPress = () => {
    // saveTask(this.state)
    // .then(() => 
    this.props.navigation.goBack();
  }
  handleChangeTitle = (value) => {
      this.setState( { title: value});
  }
  handleDatePress = () => {
    this.setState({showDatePicker: true,});
  }
  handleDatePicked = (date) => {
    this.setState({
      date,
    });

    this.handleDatePickerHide();
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
      <View style={styles.fieldContainer}>
      <Text style={styles.label}>Deadline for the task:</Text>
         <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Task date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
        />
         <DateTimePickerModal
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
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