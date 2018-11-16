import React,{Component} from 'react'
import {Image,TouchableOpacity,StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, List, Alert} from 'react-native'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";
import {gql} from 'apollo-boost';
import {TaskList} from '../components/TaskLists'

/*const getTasksQuery = gql`
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
const TaskList = () => (
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
            console.log(data)
            sub=data.tasks
            //Alert.alert(JSON.stringify(data));
            return sub
                /*<View style={styles.container}>
                    <FlatList
                        data = {data.tasks}
                        keyExtractor = {(item, index) => index.toString()}
                        renderItem = {
                            ({item}) => <Text style={styles.item}>{item.title}</Text>
                        }
                    />
               </View>*/
                /*<Text>
                    {JSON.stringify(data)}
                </Text>
            
        }}
    </Query>
)*/

export default class todo extends Component{

    constructor(props){
        super(props);
        //console.log(TaskList)
        this.state = {
            text:"",
            datas: `${TaskList}`,
            uri:"",
            //sub:[]
        };
    }

        //this.doSth = this.doSth.bind(this);
     
    doSth(index){
        this.setState(()=> {
            //this.setState({datas: [..this.state.datas,this.state.text]})
            this.state.datas.splice(index,1)
            this.setState({datas: this.state.datas})
            this.setState()
        })
    }

    /*checkb(uri){
        this.setState({uri: require('../assets/checkedbox.png')})
        this.setState()
    }*/

    setData(){
        if (this.state.text){
            this.setState(()=> {
                //this.setState({datas: [...this.state.datas,this.state.text]})
                this.setState(prevState => ({datas: [...prevState.datas,this.state.text]}))
            })
            this.setState({text: ''})
            //this.setState({todo: this.state.text})
        }
    }


   /* added(){
        this.state.datas.push(this.state.text);
    }*/

    render(){
        //TaskLists();
        //datas=TaskList()
    /*      let notes=this.state.datas.map((val,key)=>{
            return <Note key={key} keyval={key} val={val} onDeleteMethod={()=>this.deletenote(key)}></Note>

            <TouchableOpacity style={styles.checkbox} onPress={() => this.checkb(item.uri)}>
                                            <Image
                                                style={styles.checkbox}
                                                source={item.uri}/>
                                        </TouchableOpacity>
        });*/
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={{height:40, borderColor: 'gray', borderWidth: 1, flex:9}}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                    />
                    <Button title={"+"} onPress={this.setData.bind(this)} />
                </View>
                
                    <FlatList
                            data={this.state.datas}
                            //data={this.tasks}
                            extraData={this.state}
                            renderItem={(item)=>{
                                console.log(item)
                                return(
                                    <View style={styles.note}>
                                        <Text style={styles.noteText}> {item.item} </Text>
                                        <TouchableOpacity style={styles.noteDelete} onPress={() => this.doSth(item.index.toString())}>
                                            <Image
                                                style={styles.noteDelete}
                                                source={require('../assets/trash.png')}/>
                                        </TouchableOpacity>
                                        
                                    </View>
                                );
                            }}
                            keyExtractor={(item,index)=>index.toString()}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    note: {
        position: 'relative',
        left: 10,
        padding: 20,
        paddingLeft: 50,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ed8ded',
        backgroundColor: '#FFFFFF'
    },
    noteText: {
        paddingLeft: 12,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        backgroundColor: '#FFFFFF'
    },
    noteDelete: {
        position: 'absolute',
        right: 10,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#2980b9',
        height: 50,
        width: 30,
        marginTop: 2,
        //marginRight: -90
    },
    checkbox: {
        position: 'absolute',
        left: 4,
        top: 4,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2980b9',
        height: 30,
        width: 30,
        marginTop: 3,
        //marginRight: -90
    },
})