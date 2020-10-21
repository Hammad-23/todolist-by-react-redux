import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import Router from './config/router'
import { Provider } from 'react-redux'
import store from './store'




function App() {

  return(
  
    <Provider store={store}>


             <Router/>


     </Provider>
    
  )



}

export default  App;
