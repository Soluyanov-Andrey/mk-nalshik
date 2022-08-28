import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react";

function App() {
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
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home = () => {
  return <div>You are in Home page</div>
}
export const About = () => {
  useEffect(() => {

    fetch('https://api.github.com/users/fabpot', {
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

  

  return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App