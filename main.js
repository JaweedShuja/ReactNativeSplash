import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native'
import CardView from './cardView'

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
            DATA:[
                {name:'javed', email:'javed@gmail.com'},
            ]
        }
        this.add = this.add.bind(this)
        
    }
    add(name,email){
        this.state.DATA.push({name:name,email:email})
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <Text style={{marginLeft:5, fontWeight:'bold'}}>Name</Text>
                    <TextInput
                        onChangeText={(value) => this.setState({
                            name:value
                        })}  
                        style={styles.textInputStyle}
                    />

                    <Text style={{marginLeft:5, fontWeight:'bold'}}>Email</Text>
                    <TextInput
                        onChangeText={(value) => this.setState({
                            email:value
                        })}   
                        style={styles.textInputStyle}
                    />
                    <Button title="Add" style={{margin:5}} onPress={() => this.add(this.state.name, this.state.email)}></Button>
                </View>
                <View style={styles.dataArea}>
                    <ScrollView>
                        {this.state.DATA.map(data => <CardView data={data} />)}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue'
    },
    inputArea:{
        flex:3,
    },
    dataArea:{
        flex:7,
    },
    textInputStyle:{
        margin:5,
        backgroundColor:'whitesmoke'
    }   

})