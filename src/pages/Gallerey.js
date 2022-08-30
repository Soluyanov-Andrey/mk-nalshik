
import { Link } from "react-router-dom"

const Gallerey = (props) =>  {
 
  return(
    
  <div id="family">
    <div id="sort">
      <img onClick={() => props.choice()} src="images/sort.png"  width="30" height="30" title ="Сортировать"></img>
    </div>
    {
      props.get.map((index)=>{
        
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