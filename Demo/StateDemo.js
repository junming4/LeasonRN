/**
 * State 练习.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class StateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: 1};
        setInterval(() => {
            this.setState(previousState => { //表示之前状态
                return {showText: previousState.showText + 1};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText;//获取初始化数据
        console.log(this.state.showText);
        return (
            <View style={styles.container}>
                <Text>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 10,
        backgroundColor: 'red'
    }
});