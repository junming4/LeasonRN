/**
 * fetch 网络请求测试.
 * 请求 http 需要配置 ios 文件
 *
 * ActivityIndicator 加载组件
 *
 */


import React, {Component} from 'react'
import {ActivityIndicator, ListView, View, Text} from 'react-native'

export default class FetchDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator size="large" color="red"/>
                </View>
            );
        }
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );
    }
}
