import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Main from './main.js'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      mainScreen:false
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        mainScreen:true
      })
    },3000)
  }
  render(){
    if(this.state.mainScreen){
      return <Main />
    }
    else{
      return(
        <View style={styles.container}>
          <Text style={styles.textStyle}>Wellcome</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightgreen'
  },
  textStyle:{
    fontSize:30,
    fontWeight:'bold'
  }
})