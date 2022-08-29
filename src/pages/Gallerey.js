
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Gallerey = (props) =>  {

const [post, setPosts] = useState([]);

let Sort = () => { 

  let newArray = post.slice();
  newArray.sort((a, b)=>{return a.rating - b.rating});
  newArray.reverse();
  setPosts(newArray);


};

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


  
  return(
    
  <div id="family">
    <div id="sort">
      <img onClick={() => Sort()} src="images/sort.png"  width="30" height="30" title ="Сортировать"></img>
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