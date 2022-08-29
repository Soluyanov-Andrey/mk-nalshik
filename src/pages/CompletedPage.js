import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

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
                  <>
                  <p>{post.name}</p>
                  <p>{post.released}</p>
                  <p>{post.description}</p>   
                  <p>{post.poster}</p> 
                  <p>{post.rating}</p> 
                  </>
              )
          }
      </div>
  )
}
export default CompletedPage;