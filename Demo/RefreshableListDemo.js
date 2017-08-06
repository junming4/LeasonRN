/**
 * RefreshableList 刷新插件.
 */

import React, {Component} from 'react'
import {StyleSheet, View,Text, ListView, RefreshControl} from 'react-native'

export default class RefreshableListDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
        };
        //通过判断是否渲染
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
        };
    };
    _onRefresh() {
        this.setState({refreshing: true});
        fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }

    render() {
        return (
            <View>
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <View style={styles.listItem}><Text>{rowData}</Text></View>}
            >
            </ListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        flex: 1,
        marginLeft:5,
        marginRight:5
    },
    listItem:{
        height:20,
        marginTop:2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});