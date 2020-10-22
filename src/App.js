import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import Router from './config/router'
import { Provider } from 'react-redux'
import {store,  persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'




function App() {

  return(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>


             <Router/>

</PersistGate>
     </Provider>
    
  )



}

export default  App;
