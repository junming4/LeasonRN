/**
 * Button 组件.
 */

import React, {Component} from 'react'
import {Button, View, StyleSheet,Alert} from 'react-native'

export default class ButtonDemo extends Component{
    onPressLearnMore(){
        Alert.alert('You tapped the button!');
        console.log('sss');
    }
    render(){
        return (
            <View style={styles.container}>
                 <Button title='点击按钮' color="#841584" onPress={this.onPressLearnMore} disabled={false} accessibilityLabel="Learn more about this purple button"/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        flex: 1
    }
});