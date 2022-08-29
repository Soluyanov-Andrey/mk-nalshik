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

}, []);

  return(
      <div>
          {id}
      </div>
  )
}
export default CompletedPage;