/**
 * 弹性盒子模型.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FlexBoxDemo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.child1}></View>
                <View style={styles.child2}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        margin: 30,
        width: 300,
        height: 500,
        backgroundColor: 'yellow',
        //默认主轴是纵向 column
        //我们设置为横向
        flexDirection: 'row',
        justifyContent: 'center', //主轴居中
        alignItems: 'center', //交叉轴
    },
    child1:{
        width:100,
        height:100,
        backgroundColor:'green'
    },
    child2:{
        width:100,
        height:100,
        backgroundColor: 'red'
    }

});

