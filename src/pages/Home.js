import React from "react"
import './Home.css';

const Home = () => {
    

    return (
        <form>
        <div className = "flex">
            <div className = "flex-textarea-button">
            <div className="blok1">
                <form id="form" action="">
                    <textarea spellcheck="false" className="colortext" name="comment">Любое значение для получения токена.</textarea>
                </form>
            </div>
            <div className="blok2">
              <button className="button">Ввод</button>
            </div>
            </div>
        </div>
        </form>
    )
}
export default Home;