import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class CardView extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        return(
            <View>
                <Text style={styles.textStyle} >dsfds</Text>
                <Text style={styles.textStyle}>dfds</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        padding:10,

    },
    textStyle:{
        fontSize:17,
        fontWeight:'bold',
    }
})