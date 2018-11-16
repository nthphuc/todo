import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import { Query } from "react-apollo";
import {gql} from 'apollo-boost';

const getTasksQuery = gql`
    {
        tasks{
            id
            title
            userid
            status
            date
        }
    }
`
export default TaskList = () => {
    <Query query={getTasksQuery}>
        {({ loading, error, data }) => {
            if (error){
                Alert.alert('Error, could not fetch data');
                console.log('Error');
                return null;
            }
            if (loading){
                return(<Text>Please wait</Text>)
            }
            console.log("bbbb")
            console.log(data.tasks)
            sub: data.tasks
            Alert.alert(JSON.stringify(data));
       
            /*(
                <View style={styles.container}>
                    <FlatList
                        data = {data.tasks}
                        keyExtractor = {(item, index) => index.toString()}
                        renderItem = {
                            ({item}) => <Text style={styles.item}>{item.title}</Text>
                        }
                    />
               </View>
                /*<Text>
                    {JSON.stringify(data)}
                </Text>
            )*/
        }}
    </Query>
    return sub;
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})