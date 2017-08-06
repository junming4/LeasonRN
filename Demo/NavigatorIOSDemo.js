/**
 * 导航跳转 测试中。。。.
 */

import React, {Component} from 'react'
import {StyleSheet, View, NavigatorIOS, Text, TouchableHighlight} from 'react-native'

export default class NavigatorIOSDemo extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: MyView2,
            title: 'Genius',
            passProps: {myProp: 'genius'},
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigatorIOS
                    ref='nav'
                    initialRoute={{
                        component: MyItem2,
                        title: 'Foo This',
                        passProps: { myProp: 'foo' },
                        rightButtonTitle: 'Add',
                        leftButtonTitle: 'Add',
                        onRightButtonPress: () => this._handleNavigationRequest(),
                        onLeftButtonPress: () => this._handleNavigationRequest(),
                    }} style={{flex: 1}}/>
            </View>
        )
    }
}

class MyItem2 extends Component {
    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});
