
import { Link } from "react-router-dom"
import './Gallerey.css';
import { useEffect, useState, useRef } from "react"

const Gallerey = (props) =>  {
  const [post, setPosts] = useState([]);
  
  const current= useRef([]);
  const sort = useRef(false);
  
  useEffect(() => {
    
      fetch('http://localhost/games', {
       headers: new Headers({                     // устанавливаем заголовки
        "Content-Type": "text/html; charset=utf-8",
        Authorization: `Bearer ${props.cur}`
         
       })
       })
     .then(response => response.json())        // получаем ответ в виде промиса
     .then(data => setPosts(data))
     .catch(error => console.error(error))     // или ошибку, если что-то пошло не так 
     

 }, []);



  let choice_fn = () => { 
    
      (sort.current)? sort.current = false : sort.current = true;
    
  };


  let sorting = () => { 
  
    if(!sort.current){
      
      // Записываем исходный вариант.
      let newArray = post.slice();
      current.current = post.slice();

      // Производим сортировку.
      newArray.sort((a, b)=>{return a.rating - b.rating});
      newArray.reverse();
      setPosts(newArray);
      choice_fn();
      return;
    }
    choice_fn();
    setPosts(current.current);
    
    
    
  };


  return(
    
  <div id="family">
    <div id="sort">
      <img onClick={() => sorting()} src="images/sort.png"  width="30" height="30" title ="Сортировать"></img>
    </div>
    {
      post.map((index)=>{
        
      return(  
      <div className="responsive" key={index.id}>
        <div className="gallery">

        <Link to= {`/game/${index.slug}`}>
          <img className="img" src={index.poster}  alt="Northern Lights" width="600" height="400"></img>
        </Link>
          <div>
            <div className="Completed_name">{index.name}</div>
            <div><img className="like" src="images/like.png"  width="10" height="10"></img>{index.rating}</div>
          </div>
        </div>
      </div>
      )})
    }
  </div>
  )

  

}

export default Gallerey;