import React from "react"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Gallerey from "./pages/Gallerey"
import CompletedPage from "./pages/CompletedPage"
function App() {
 
  const [post, setPosts] = useState([]);
  const [current, currentPosts] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {

      fetch('http://localhost/games', {
       headers: new Headers({                     // устанавливаем заголовки
         'User-agent': 'Chrome/64.0 My Own Agent'
       })
       })
     .then(response => response.json())        // получаем ответ в виде промиса
     .then(data => setPosts(data))
     .catch(error => console.error(error))     // или ошибку, если что-то пошло не так 
     

 }, []);



  let choice_fn = () => { 
   
      (sort)? setSort(false) : setSort(true);
    
  };


  let sorting = () => { 
  
    if(!sort){
      
      // Записываем исходный вариант.
      let newArray = post.slice();
      currentPosts(post.slice());

      // Производим сортировку.
      newArray.sort((a, b)=>{return a.rating - b.rating});
      newArray.reverse();
      setPosts(newArray);
      choice_fn();
      return;
    }
    choice_fn();
    setPosts(current);
    
    
    
  };
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
          <Route path="game" element={<Gallerey get = {post} choice = {sorting} />}></Route>
          <Route path="game/:id/" element={<CompletedPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      
    </div>
  )
}

export const Home = () => {

  return <div>You are in Home page</div>
}

export const NotFound = () => {
  return <div>This is a 404 page</div>
}

export default App