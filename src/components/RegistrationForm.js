import React, {useState} from 'react'

const RegistrationForm = () => {

    const [user, setUsers] = useState({
        firstname : "",
        lastname : "",
        username : "",
        email:"",
        password: ""
    });

    
    const submitForm = (e) =>{

        e.preventDefault();

        fetch("http://localhost:8080/Users", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            alert(`The user ${data.username} was successfully added.`)
        })
        .catch(err =>console.log(`Error:${err} `))
    }

  return (
    <section id="register-section">

        <div>
            <form action = "/" method = "POST" onSubmit = {submitForm}>
                
                <div>
                    <label htmlFor ="firstName">Your First Name: </label>
                    <input type = "text" name = "firstName" id = "firstName" value = {user.firstname} onChange={(event) =>{
                        setUsers({
                            ...user,
                            firstname:event.target.value
                        })
                    }}/>
                </div>
                
                <div>
                    <label htmlFor ="lastName">Your Last Name: </label>
                    <input type = "text" name = "lastName" id = "lastName" value = {user.lastname} onChange={(event) =>{
                        setUsers({
                            ...user,
                            lastname:event.target.value
                        })
                    }}/>
                </div>
                
                <div>
                    <label htmlFor ="username">Username:</label>
                    <input type = "text" name = "username" id = "username" value = {user.username} onChange={(event) =>{
                        setUsers({
                            ...user,
                            username: event.target.value
                        })
                    }}/>
                </div>

                <div>
                    <label htmlFor ="password">Password: </label>
                    <input type = "text" name = "password" id = "password" value = {user.password} onChange={(event) =>{
                        setUsers({
                            ...user,
                            password: event.target.value
                        })
                    }}/>
                </div>

                <div>
                    <label htmlFor ="email">Email: </label>
                    <input type = "textarea" cols = "20" rows = "10" name = "email" id = "email" value = {user.email} onChange={(event) =>{
                        setUsers({
                            ...user,
                            email: event.target.value
                        })
                    }}/>
                </div>

                <button type = "submit">Submit</button>
            </form>
        </div>

</section>


  )
}

export default RegistrationForm