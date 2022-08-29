import './App.css';


let a =[1,5,6,8,9];

const Gallerey = (props) =>  {
console.log(props)
  return (
  
  a.map((index)=>{
    
    return (
    <div className="responsive" key ={index}>
      <div className="gallery">{index}
        <img src="Diablo.jpg" alt="Northern Lights" width="600" height="400"></img>
      </div>
    </div>)
    
  }
  
  )
  )


}

export default Gallerey;