/**
 * 日历插件.
 */
import React, {Component} from 'react'
import {DatePickerIOS, View, Text} from "react-native"

export default class DatePickerDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            date:  new Date()
        }
    };
    onDateChange(date) {
        console.log(date);
        this.setState({date: date});
    };
    render(){
        return (
          <View>
              <DatePickerIOS
                  date = {this.state.date}
                  mode="datetime"
                  onDateChange={(date) => this.onDateChange(date)}
              />
          </View>
        );
    }

}
