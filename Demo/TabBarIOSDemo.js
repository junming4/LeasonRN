/**
 * TabBarIOS 底部导航部分.
 */

import React, {Component} from 'react'
import {StyleSheet, View, TabBarIOS} from 'react-native'

export default class TabBarIOSDemo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TabBarIOS  style={{height:30}} tintColor="green" unselectedItemTintColor="black">
                    <TabBarIOS.Item
                        systemIcon="bookmarks"  // 系统图标(bookmarks)
                    >
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="contacts"  // 系统图标(contacts)
                        //icon={require('image!some_image')}
                    >
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"  // 系统图标(downloads)
                    >
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="favorites"  // 系统图标(favorites)
                    >
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="history"  // 系统图标(history)
                    >
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       marginTop: 20,
       flex: 1
   }
});