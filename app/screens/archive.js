import React,{Component} from 'react'
import {StyleSheet, Text, View}from 'react-native'
import {Mutation} from 'react-apollo'

/*const LOGIN =( gql`
  mutation Login($username: String!, $password: String!){
    login(username: $username, password: $password) {  
      id
      username
    }
  }
`;*/

export default class archieve extends Component{

    constructor(props){
        super(props)
        this.state={
            text:'',
            text2:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                 <TextInput
                        style={{height:40, borderColor: 'gray', borderWidth: 1, flex:9}}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                    />
                 <TextInput
                        style={{height:40, borderColor: 'gray', borderWidth: 1, flex:9}}
                        onChangeText={(text2)=>this.setState({text2})}
                        value={this.state.text2}
                    />
                <Button title={"+"} onPress={this.setData.bind(this)}/>
            </View>
          /*  <Mutation mutation={LOGIN}>
                {(login, { data }) => (
                    <div>
                        <form
                        onSubmit={e => {
                            e.preventDefault();
                            addTodo({ variables: { type: input.value } });
                            input.value = "";
                        }}
                        >
                        <input
                            ref={node => {
                            input = node;
                            }}
                        />
                        <button type="submit">Add Todo</button>
                        </form>
                    </div>
                )}
            </Mutation>*/
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