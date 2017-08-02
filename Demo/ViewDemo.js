/**
 * View 练习案例.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ViewDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.leftView,styles.rightBorder]}>
                    <Text>酒店</Text>
                </View>
                <View style={styles.rightView}>
                    <View style={[styles.rightChild1,styles.rightBorder]}>
                        <View style={styles.child1Item1}><Text>海外酒店</Text></View>
                        <View style={styles.child1Item2}><Text>特价酒店</Text></View>
                    </View>
                    <View style={styles.rightChild2}>
                        <View style={styles.child1Item1}><Text>团购</Text></View>
                        <View style={styles.child1Item2}><Text>民宿.客栈</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     container:{
         marginTop: 30,
         height:99,
         flexDirection: 'row',
         backgroundColor: 'red',
     },
    leftView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightBorder:{
        borderRightWidth:1,
        borderColor: 'white'
    },
    rightView:{
        flex:2,
        flexDirection: 'row'
    },
    rightChild1:{
        flex:1,
    },
    child1Item1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:0.5,
        borderColor: 'white'
    },
    child1Item2:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth:0.5,
        borderColor: 'white'
    },
    rightChild2:{
        flex:1,
    }

});