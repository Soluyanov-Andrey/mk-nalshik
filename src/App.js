import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Gallerey from "./Gallerey"
import CompletedPage from "./pages/CompletedPage"
function App() {
  
  let s;
  const [count, setCount] = useState({})

  let last=6;
  useEffect(() => {

    fetch('http://localhost/games', {
    headers: new Headers({                     // устанавливаем заголовки
      'User-agent': 'Chrome/64.0 My Own Agent'
    })
  })
  .then(response => response.json())        // получаем ответ в виде промиса
  .then(data => {
     
    console.log(data)                          // выводим данные в консоль
  })
  .catch(error => console.error(error))     // или ошибку, если что-то пошло не так 

}, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home last = {last}/>}></Route>
          <Route path="about" element={<Gallerey data = {s}/>}></Route>
          <Route path="about/:id/" element={<CompletedPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home = (props) => {

  

  return <div>You are in Home page{props.last}</div>
}
export const About = () => {
  

  

  return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App