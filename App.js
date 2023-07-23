  import React, { useReducer } from 'react';
  import './App.css';
  import ParentComponent from './Components/ParentComponent/ParentComponent'
  import {  Routes, Route} from 'react-router-dom'
  import Home from './Components/Home/Home';
  import About from './Components/Home/About/About';
  import ChildComponent from './Components/ChildComponent/ChildComponent';
  import Layout from './Components/Layout/Layout';
  import Counter from './Components/Counter/Counter';
  import Login from './Components/Login/Login';
  import ProductList from './Components/ProductList/ProductList';

  const reducer=(state,action)=>{
    const {type,payload} =action;
    switch(type){
      case "login":
        return {...state,userData:{
          name: payload.name,
          email: payload.email,
          isLogged:true 
        }}
      case'logout':
          return{
            ...state,userData:{
              name:'',
              email:''
              ,isLogged: false
            }
          }
      case 'Add_product':
        return {
          ...state, productList: state.productList.concat(payload)
        };
        case 'Update_product':
          return {
            ...state,
            productList: state.productList.map((product) =>
              product.id === payload.id ? payload : product
            )
          };
        case 'Delete_product':
          return {
            ...state,
            productList: state.productList.filter((product) => product.id !== payload.id)
          };
      default:
          return state 
    }
  }

  const initialState={
    userData:{
      name:'',
      email:'',
      isLogged:false
    },
    productList:
      [{
        id:'',
        name:'',
        
        brand:''

      }]
    

  }

  function App() {  
    const [state,dispatch] =useReducer(reducer,initialState)
    return (
      
      <div className="App">
        <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Home state={state} dispatch={dispatch}/>}></Route>
          <Route path='/Login' element={<Login state={state} dispatch={dispatch}/>}></Route>
          <Route path='/Parent' element={<ParentComponent/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Child' element={<ChildComponent/>} ></Route>
          <Route path='/Counter' element={<Counter/>}></Route>
          
          </Route>
          <Route path='/Products' element={<ProductList state={state} dispatch={dispatch}/>}></Route>
          
        </Routes>
        
      </div>
      
    );
  }

  export default App;
