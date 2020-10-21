import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import Router from './config/router'
import { Provider } from 'react-redux'
import store from './store'
// import { Provider } from 'react-redux'
// import { updateUser } from './store/actions/userActions'
// import { connect } from 'react-redux'



function App() {

  return(
  
    <Provider store={store}>


    <Router/>


</Provider>
    
  )

//   const [list,setList] = useState([])
//   const [text,setText] = useState('')

//   const val =(e)=>{
//     const name = (e.target.value)
//     // const newList = [...list]
//     // newList.push(name)
//     // setList(newList)
//     setText(name)

//   }
//   const add =()=>{
//     const newList = [...list]
//     newList.push(text)
//     setList(newList)
//      props.updateTheUser(newList)
//     setText('')
//     //  console.log(newList)
//   }


//   return (
//     <Provider store={store}>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Todo list By Redux</h1>
//         <div>
//           <input onChange={val} type='text' value={text}/>
//           <button onClick={add} style={{backgroundColor: 'green',padding: '7px'}}>Add</button>
//         </div>
//         <div>
//           {list.map(function(item){
//             return(
//               <ol>
//                 <li>{item}<button>delete</button></li>
//               </ol>
//             )
//           })}
//         </div>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           todo list by react redux
//           <p>hello world</p>
//         </a> */}

//       </header>
//     </div>
//     </Provider>
//   );
// }

// const mapStateToProps=()=>{

// }

// const mapDispatchToProps=(dispatch)=>{

//   return {
//            updateTheUser: (newList) => dispatch(updateUser(newList))
//   }

}

export default  App;
