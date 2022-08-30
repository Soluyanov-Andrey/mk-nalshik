import React from "react"
import './Home.css';


const Home = (props) => {

    const messageRef = React.useRef();
    const text = "Любое значение для получения токена.";

    function handleSubmit(event) {
        event.preventDefault();
        props.token()
        console.log('message:', messageRef.current.value);
      }

    return (
        <form onSubmit={handleSubmit}>
        <div className = "flex">
            <div className = "flex-textarea-button">
            <div className="blok1">
                    <textarea spellCheck="false" className="colortext" name="comment" ref={messageRef} defaultValue={text}>
                    
                    </textarea>
               
            </div>
            <div className="blok2">
              <button type="submi" className="button">Ввод</button>
            </div>
            </div>
        </div>
        </form>
    )
}
export default Home;