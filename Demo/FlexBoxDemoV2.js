/**
 * FlexBox 盒子测试.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class FlexBoxDemoV2 extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.child1}/>
                <View style={styles.child2}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:30,
    },
    child1:{
        flex:1,
        backgroundColor: 'yellow'
    },
    child2:{
        flex:2,
        backgroundColor:'green'
    }

});
