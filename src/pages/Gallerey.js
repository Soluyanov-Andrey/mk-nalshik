
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Gallerey = (props) =>  {

const [post, setPosts] = useState([]);

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


  
  return (
  
    post.map((index)=>{
      
    return (
    <div className="responsive" key={index.id}>
      <div className="gallery">
      <Link to= {`/game/${index.slug}`}>
        <img src={index.poster} alt="Northern Lights" width="600" height="400"></img>
      </Link>
        <div>
          <div>{index.name}</div>
          <div> <img id="like" src="images/like.png"  width="10" height="10"></img>{index.rating}</div>
        </div>
          
        
      </div>
    </div>)
    
  }
  
  )
  )


}

export default Gallerey;