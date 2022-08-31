import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Gallerey from "./pages/Gallerey"
import CompletedPage from "./pages/CompletedPage"
import Home from "./pages/Home"
import { useNavigate } from 'react-router-dom';
import Userfront from "@userfront/react";
import { useEffect, useState, useRef } from "react"

Userfront.init("8nw8zv5b");

function App() {
 
  

  return (
    <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">game</Link>
            </li>
            <li>
              <Link to="/input">input</Link>
            </li>
          </ul>
        </nav> */}
      <div className="main">
      
        {/* Define all the routes */}
      
        <Routes>
          {/* Userfront.accessToken()) ?<Gallerey/>:<Home/> */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="game" element={<Gallerey/>}></Route>
          <Route path="game/:id/" element={<CompletedPage/>}></Route>
          <Route path="input" element={<Input/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      
    </div>
  )
}

export const Input= () => {

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/game")
  }, []);
  
  return (
    <></>
  );
}


export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App