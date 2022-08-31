import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Gallerey from "./pages/Gallerey"
import CompletedPage from "./pages/CompletedPage"
import Home from "./pages/Home"
import Userfront from "@userfront/react";
Userfront.init("8nw8zv5b");

function App() {
 
  const [post, setPosts] = useState([]);
  const [current, currentPosts] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    
      fetch('http://localhost/games', {
       headers: new Headers({                     // устанавливаем заголовки
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.accessToken()}`,
         
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
     
      <div className="main">

        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="game" element={<Gallerey get = {post} choice = {sorting}/>}></Route>
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