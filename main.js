import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import Card from './cardView'

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
        }
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
                </View>
                <View style={styles.dataArea}>
                    {/* <ScrollView> */}
                        {/* {this.state.DATA.map((data) => {
                            <CardView name={data.name} email={data.email}/>
                        })} */}
                        {/* <Card /> */}
                    {/* </ScrollView> */}
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
        backgroundColor:'blue'
    },
    dataArea:{
        flex:7,
    },
    textInputStyle:{
        margin:5,
        backgroundColor:'whitesmoke'
    }   

})