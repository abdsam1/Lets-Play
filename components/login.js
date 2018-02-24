import React,{ Component } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import {Facebook,Constants } from 'expo';
import {Actions} from 'react-native-router-flux'; 
import {startLogin} from '../actions/actions'; 
import {connect} from 'react-redux'; 
import firebase, {facebookProvider} from '../firebase/firebase'; 
let store = require('../store/configureStore').configure();

class Login extends Component {

  async onPress() {
  const {dispatch} = this.props;
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '421538164970032',{ permissions: ['public_profile', 'email'], behavior: 'web' });
              
      if(type == 'success'){      
        dispatch(startLogin(token));
      }

      else {
        Alert.alert(
          'Oops!',
          'Login has been cancelled!',
        );
      }

    } catch (e) {
      Alert.alert(
        'Oops!',
        'Something went wrong while login!',
      );
    }
  
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPress.bind(this)}
          title="Login with Facebook"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
  }
});

export default connect()(Login);