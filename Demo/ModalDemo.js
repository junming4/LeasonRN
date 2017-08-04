/**
 * Model 测试.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Modal, Button} from 'react-native';

export default class ModalDemo extends Component{
    constructor(props){
        super(props);
        this.state = {modalVisible: false};
    };
    setModalVisible(visible){
        console.log(visible);
      this.setState={
          modalVisible: visible
      }
    }

    render(){
        return(
            <View style={styles.container}>
                <Modal animationType={"slide"}
                       transparent={false}
                       visible={true}
                       onRequestClose={() => {alert("Modal has been closed.")}}>

                </Modal>
                <Button title='点击' onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       marginTop: 30
   }
});