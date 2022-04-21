import React, { useEffect, useState  } from 'react';

const LoginForm = () => {
    const [users, setUsers] = useState([]);
    
    const submitForm = (e) =>{

        e.preventDefault();

        fetch("http://localhost:8080/Auth", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res =>res.json())
        .then(data =>{
            alert(`The user was successfully authenticated.`)
        })
        .catch(err =>console.log(`Error:${err} `))
    }

  return (
            
    <section id="login-section">

    <div className= "container">
    
        <h1>Login</h1>

        <form action = "/" method = "POST" onSubmit = {submitForm}>

            <div className="form-control">
                <label htmlFor="email">Username</label>
                <input type="text" id="username" />
            </div>


            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>


            <div className="form-control">
                <button className="btn" type="submit">Login</button>
            </div>

        </form>

    </div>

</section>
  )
}

export default LoginForm