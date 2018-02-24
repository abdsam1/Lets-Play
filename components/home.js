import React,{ Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Constants } from 'expo';
import {Actions} from 'react-native-router-flux'; 
export default class Home extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text 
        style={styles.paragraph}
        onPress = {() => Actions.Login()  }
        >
          Logged In!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});