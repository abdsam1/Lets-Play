import {Alert} from 'react-native';
import firebase, {facebookProvider, firebaseRef} from '../firebase/firebase'; 
export const startLogin = (accessToken) => {
  return (dispatch,getState) => {
    var credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
    return firebase.auth().signInWithCredential(credential).then((result) => {      
      console.log('Auth worked!', result);
      console.log('state', getState());      
      // let todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
      // dispatch(loginSuccessful());
      alert('Auth worked!');

    }, (error) => {
      console.log('Unable to auth', error);
      // dispatch(loginFailed());
      alert('Auth did not work!')
    });
  };
};

const addUser = (getState,user) => {
  let uid = getState().auth.uid;
  // let user = {
  //   uid
    
  // }
};

export const loginSuccessful = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  };
};

export const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    error
  };
};



