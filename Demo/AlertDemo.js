/**
 * 弹出框测试.
 */

import React, {Component} from 'react'
import {AppRegistryText, Text, View, Alert, Button} from "react-native"

export  default class AlertDemo extends Component {

    render() {
        return (
            <View style={{ margin: 20}}>
                <Button onPress={() => {
                    Alert.alert('You tapped the button!')
                }} title="killl"/>
            </View>
        );
    }

}
