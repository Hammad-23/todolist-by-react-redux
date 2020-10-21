import React, { useState } from 'react';
import logo from '../../../src/logo.svg';
// import './App.css';
import store from '../../store'
import { Provider } from 'react-redux'
import { updateUser } from '../../store/actions/userActions'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(props){

    const [list,setList] = useState([])
  const [text,setText] = useState('')

//   const [final,setFinal] = useState([])
 

  const val =(e)=>{
    const name = (e.target.value)
    
    setText(name)

  }

  const add =()=>{
    const newList = [...list]
    newList.push(text)
    setList(newList)
     props.updateTheUser(newList)
    setText('')
   
  }

  console.log('final data--> ',  )

  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo list By Redux</h1>
        <div>
          <input className='form-control' onChange={val} type='text' value={text}/>
          <button  onClick={add} className='btn btn-success'>Add</button>
        </div>
        <div style={{marginTop:'2rem'}}>
          {list.map(function(item){
            return(
              <ol>
                <li>{item}<button className='btn btn-primary'>delete</button></li>
              </ol>
            )
          })}
        </div>
     

      </header>
    </div>
    </Provider>
  );
}


const mapStateToProps=(state)=>{
    
    console.log(state)
     
 
    return {
        newList: state.newList
    }
}

const mapDispatchToProps=(dispatch)=>{

  return {
           updateTheUser: (newList) => dispatch(updateUser(newList))
  }

  


}

export default connect(mapStateToProps,mapDispatchToProps )( Home )