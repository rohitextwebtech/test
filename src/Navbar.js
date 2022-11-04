import React from 'react'
import {Link } from "react-router-dom";
import './Navbar.css' 


const Navbar = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/table">Table</Link>
          </li>
          <li>
          <Link to="/hours">Hours</Link>
          </li>  
     
        </ul>
    </>
  )
}

export default Navbar

