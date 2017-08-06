/**
 * ProgressViewIOS 进度条.
 */

import React, {Component} from 'react'
import {StyleSheet, View, ProgressViewIOS, Text} from 'react-native'

export default class ProgressViewIOSDemo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <ProgressViewIOS progress={0.3} style={styles.progressView}/>
                <ProgressViewIOS progress={0.2} style={styles.progressView} progressTintColor="red"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    progressView: {
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
    }
});