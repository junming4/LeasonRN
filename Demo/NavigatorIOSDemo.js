/**
 * 导航跳转.
 */

import React, {Component} from 'react'
import {StyleSheet, View, NavigatorIOS, Text} from 'react-native'

export default class NavigatorIOSDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigatorIOS initialRoute={{
                    component: MyItem2,
                    title: 'My Initial Scene',
                }} style={{flex: 1}}/>
            </View>
        )
    }
}

class MyItem2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});
