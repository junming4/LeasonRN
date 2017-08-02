/**
 * 滑动却换导航.
 */
import React,{Component} from 'react';
import {
    Text,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class ScrollableTabDemo extends Component{
    render(){
        return(
            <ScrollableTabView
                style={{marginTop: 20, }}
                renderTabBar={() => <DefaultTabBar/>}>
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
                <Text tabLabel='Tab #4'>project</Text>
                <Text tabLabel='Tab #5'>project</Text>
                <Text tabLabel='Tab #6'>project</Text>
            </ScrollableTabView>
        );
    }
}