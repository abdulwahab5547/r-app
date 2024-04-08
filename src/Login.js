import React, { useState } from 'react';
import './Login.css';

function Login({darkBG, bgColor, textColor, setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (event) => {
    event.preventDefault();
    // Check if username and password are both 'a' for now
    if (username === 'a' && password === 'a') {
      setIsLoggedIn(true);
      alert("You've successfully logged in!");
    } else {
      // Handle invalid login attempts (e.g., display an error message)
      alert("Invailed password or username!");
    }
  };

  return (
    <div className='login-page align-items-center justify-content-center d-flex'>
        <div className="login-form p-4" style={{backgroundColor: darkBG}}>
            <h2 className='login-h2 text-center my-4'>Welcome Back!</h2>
            <form className='d-flex justify-content-center' onSubmit={handleLogin}> 
                <div className='text-center'>
                    <input
                    style={{backgroundColor: bgColor, color: textColor}}
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                    />

                    <br/>
                    
                    <input
                    style={{backgroundColor: bgColor, color: textColor}}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    />

                    <br/>
                    
                    <div className='login-btn-div my-4'>
                        <button className='login-button' type="submit">Login</button>
                    </div>
                    
                </div>
                
                
            </form>
        </div>
    </div>
  );
}

export default Login;