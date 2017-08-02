/**
 * 搜索框 这里有bug.
 * 无法找到这个 ComponentHeight
 */

import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar'

export default class SearchBarDemo extends Component{
    render(){
        return (
            <SearchBar
                placeholder='Search'
                textFieldBackgroundColor='blue'
            />
        );
    }
}
