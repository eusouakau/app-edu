import React, { useState, useContext} from "react";
import { AuthContext} from "../../contexts/auth";


import './auth.css';

function Auth() {
    const { authenticated, login } = useContext(AuthContext);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleClick = (e) => {
       e.preventDefault()
    login(email, password);
    }
 
    return (
        <div className="auth">         
            <form className="auth-form" onSubmit={handleClick}>
            
              <div className="input-email">
                    <input 
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /> 
              </div>
              <div className="input-password">
                    <input 
                        placeholder="Senha"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /> 
             
            </div>
            
           
            <div className="button2">
                <button className="login-button" type="submit">Entrar</button>
            </div>
              
              </form>
          </div>
          
      
    )
}
export default Auth;