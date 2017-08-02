/**
 * props 数据.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class PropsDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <BindData name="hello world"/>
                <BindData name="hello react-native"/>
            </View>
        );
    }

}

class BindData extends Component {

    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }

}

const styles = StyleSheet.create({
   container:{
       marginTop: 30
   }
});