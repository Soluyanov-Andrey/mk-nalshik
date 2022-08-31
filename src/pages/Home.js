import React from "react"
import './Home.css';
import Userfront from "@userfront/react";
Userfront.init("8nw8zv5b");

    const LoginForm = Userfront.build({
      toolId: "rdlrro",
    });

const Home = (props) => {
    
    return (
        
        <div className = "flex">
            <div className = "flex-textarea-button">
            <div className="blok">
            <p>Login: andrey@yandex.ru</p>
            <p>Password: test123456789</p>
            <br></br>
            <LoginForm />       
               
            </div>
           
            </div>
        </div>
        
    )
}
export default Home;