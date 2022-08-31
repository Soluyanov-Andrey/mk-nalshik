import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Gallerey from "./pages/Gallerey"
import CompletedPage from "./pages/CompletedPage"
import Home from "./pages/Home"
import Userfront from "@userfront/react";
Userfront.init("8nw8zv5b");

function App() {
 
  
  return (
    <div className="App">
     
      <div className="main">

        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="game" element={<Gallerey/>}></Route>
          <Route path="game/:id/" element={<CompletedPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      
    </div>
  )
}



export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App