import React,{Component} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import TaskList from '../components/TaskLists';

const client = new ApolloClient({
	uri: "http://192.168.10.129:4000"
});

/*const TodoListComponent = () => (
    <Query query={FETCH_TODOS}>
      {({loading, error, data}) => {
        //Show an alert if there is an error
        if (error) {
          Alert.alert("Error", "Could not fetch todos");
          console.log(error);
          return null;
        }
  
        // Show a loading screen if the query is not yet finished
        if (loading) {
          return (
            <Text>Please Wait</Text>
          )
        }
  
        // Render the list
        return (
          <FlatList
            data={data.todos}
            keyExtractor = {(item, index) => index}
            renderItem={(todoItem) => {
              return (
                <View style={styles.todoItem} key={todoItem.index}>
                  <Text> {todoItem.task} </Text>
                </View>
              );
            }}
          />
        );
      }}
    </Query>
)*/
  

export default class done extends Component{
    render(){
        return(
            <ApolloProvider client={client}>
				<View style={styles.container}>
					<Text>Task of users:</Text>
					<TaskList/>
				</View>
            </ApolloProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });