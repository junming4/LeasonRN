/**
 * 滑动进度插件.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Slider} from 'react-native'

export default class SliderDemo extends Component {

    static _onSlidingComplete(value) {//获取滑动的值
        console.log(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider maximumTrackTintColor="red"
                        onSlidingComplete={(value) => SliderDemo._onSlidingComplete(value)} value={0.5}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    }
});
