import React from 'react';
import Home from './Home'
import './App.css';
import Contextapi from './Contextapi'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Table from './Table';
import Hours from './Hours'
import Test from './Test';

function App() {
  return (
    <>
      <Contextapi>
      <Navbar/>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/hours" element={<Hours/>}/>
      </Routes>
      </Contextapi>
      {/* <Test/> */}
      </>
   
   
  );
}

export default App;
