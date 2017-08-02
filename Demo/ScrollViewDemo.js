/**
 * ScrollView 练习.
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

export default class ScrollViewDemo extends Component{
    render(){
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                   <View style={{flex: 1, backgroundColor: '#cccccc' }}/>
                   <View style={{flex: 2, backgroundColor: 'red' }}/>
                   <View style={{flex: 3, backgroundColor: 'red' }}/>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        height:200
    }
});
