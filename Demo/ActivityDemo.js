/**
 * 加载组件.
 */

import React, {Component} from 'react'
import {ActivityIndicator, View} from 'react-native'

export default class ActivityDemo extends Component {
    render() {
        return (
            <View style={{ marginTop: 30, flex: 1}}>
                <ActivityIndicator size={'large'} color={'red'}/>
            </View>
        );
    }
}
