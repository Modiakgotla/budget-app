import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import Home from './components/home'
import Login from './components/login';
import SignUp from './components/signup';
import DisplayTransaction from './components/displayTransaction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {collection,getDocs} from 'firebase/firestore';
function App() {

  const [transaction, setTransaction] = useState([]);
  useEffect(()=>{

  })

  const addTransaction = ((amount, items, transactionType) => {
    setTransaction((item) => [...item, {
      amount: amount,
      items: item,
      transactionType: transactionType
    }])

    console.log(transaction);
  })
  return (

    <Router>
  
  



      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
         <Route path="/home" element={<Home/>}>
        
        </Route> 
        
      </Routes>
    </Router>
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
