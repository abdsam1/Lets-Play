import React, { Component } from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux'; 
import Home from './components/home'
import Login from './components/login';
import {connect,Provider} from 'react-redux';
var store = require('./store/configureStore').configure();
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="Login" component={Login} title="Login" initial={true}/>
            <Scene key="Home" component={Home} title="Home" />
          </Scene>
        </RouterWithRedux>
      </Provider>      
    );
  }
}

