import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import './CompletedPage.css';
const CompletedPage =() =>{
    
  const {id} = useParams();

  const [post, setPosts] = useState(null);

    useEffect(() => {

        fetch(`http://localhost/games/${id}`, {
        headers: new Headers({                     // устанавливаем заголовки
        'User-agent': 'Chrome/64.0 My Own Agent'
        })
    })
    .then(response => response.json())        // получаем ответ в виде промиса
    .then(data => setPosts(data))
    .catch(error => console.error(error))     // или ошибку, если что-то пошло не так 

    }, [id]);

  return(
      <div>
          {
              post&&(
                  
                  <div className="CompletedPage">
                  <img src={post.poster} alt="Northern Lights" width="600" height="400"></img>
                  <p className="Completed_name">{post.name}</p>
                  <p>{post.released}</p>
                  <p>{post.description}</p>    
                  <p> <img id="like" src="../images/like.png"  width="10" height="10"></img> {post.rating}</p> 
                  </div>
                  
                  
              )
          }
      </div>
  )
}
export default CompletedPage;