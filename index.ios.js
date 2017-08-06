/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppIntroDemo from './Demo/AppIntroDemo' //启动页说明
import SearchBarDemo from './Demo/SearchBarDemo' //搜索框插件
//import SwipeDecker from './Demo/ElementsDemo'
import TabNavigatorDemo from './Demo/TabNavigatorDemo' //底部导航
import ScrollableTabDemo from './Demo/ScrollableTabDemo' //顶部导航
import ScrollViewDemo from './Demo/ScrollViewDemo'
import FlexBoxDemo from './Demo/FlexBoxDemo'
import FlexBoxDemoV2 from './Demo/FlexBoxDemoV2'
import ViewDemo from  './Demo/ViewDemo'
import StateDemo from './Demo/StateDemo'
import PropsDemo from './Demo/PropsDemo'
import ListViewDemo from './Demo/ListViewDemo'
import ActivityDemo from './Demo/ActivityDemo'
import FetchDemo from './Demo/FetchDemo'
import AlertDemo from './Demo/AlertDemo'
import ButtonDemo from './Demo/ButtonDemo'
import DatePickerDemo from './Demo/DatePickerDemo'
import FlatListDemo from './Demo/FlatListDemo'
import ModalDemo from './Demo/ModalDemo'
import NavigatorIOSDemo from './Demo/NavigatorIOSDemo'
import ProgressViewIOSDemo from './Demo/ProgressViewIOSDemo'
import RefreshableListDemo from './Demo/RefreshableListDemo'
import SliderDemo from './Demo/SliderDemo'
import SwitchDemo from './Demo/SwitchDemo'
import TabBarIOSDemo from './Demo/TabBarIOSDemo'


export default class MyItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



AppRegistry.registerComponent('MyItem', () => TabBarIOSDemo);
