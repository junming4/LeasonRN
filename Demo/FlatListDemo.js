/**
 * FlatList 插件.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class FlatListDemo extends Component{
    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        )
    }
}