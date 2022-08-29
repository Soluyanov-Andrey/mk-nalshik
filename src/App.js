import React from "react"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Gallerey from "./pages/Gallerey"
import CompletedPage from "./pages/CompletedPage"
function App() {
  
  const [count, setCount] = useState({})

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="game">game</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="game" element={<Gallerey />}></Route>
          <Route path="game/:id/" element={<CompletedPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      
    </div>
  )
}

export const Home = (props) => {

  return <div>You are in Home page{props.last}</div>
}

export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App