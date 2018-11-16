import React,{Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class Note extends Component{
    render(){
        return (
           // <View style={flexDirection="row"}>
                <View key={this.props.keyVal} style={styles.noteD}>
                    <Text style={styles.noteText}>{this.props.note}</Text>
                </View>
          //  </View>
        );
    }
}


    const styles=StyleSheet.create({
        noteD: {
            position: 'relative',
            padding: 20,
            paddingRight: 100,
            borderBottomWidth: 2,
            borderBottomColor: '#ededed'
        },
        noteText: {
            paddingLeft: 20,
            borderLeftWidth: 10,
            borderLeftColor: '#E91E63',
        },
        noteDelete: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2980b9',
            padding: 10,
            height: 10,
            width: 10,
            top: 10,
            bottom: 10,
            right: 10,
        }
        }
    )

export default Note;