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
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.props.data.name}</Text>
                <Text style={styles.textStyle}>{this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        padding:10,
        margin:10,

    },
    textStyle:{
        fontSize:17,
        fontWeight:'bold',
    }
})