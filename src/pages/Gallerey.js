
import { Link } from "react-router-dom"

const Gallerey = (props) =>  {
 
  return(
    
    <>
    {
      props.get.map((index)=>(  
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
      ))
    }
    </>
  
  )

  

}

export default Gallerey;