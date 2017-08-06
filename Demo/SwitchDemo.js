/**
 * 开关.
 */
import React, {Component} from 'react'
import {StyleSheet, View, Switch} from 'react-native'

export default class SwitchDemo extends Component {

    constructor(props){
        super(props);
        this.state = {
            falseSwitchIsOn: false
        }
    }

     _onValueChange(value){
        console.log(value);
         this.setState({falseSwitchIsOn: value})
    }
    render() {
        return (
            <View style={styles.container}>
                <Switch onTintColor={'red'} onValueChange={(value)=>this._onValueChange(value)}
                        value={this.state.falseSwitchIsOn}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   container:{
       marginTop: 20,
       flex: 1
   }
});