import './App.css';


let a =[1,5,6,8,9];
function App() {

  return (
  
  a.map((index)=>{
    
    return (
    <div className="responsive">
      <div className="gallery">{index}
        <img src="Diablo.jpg" alt="Northern Lights" width="600" height="400"></img>
      </div>
    </div>)
    
  }
  
  )
  )


}

export default App;