import { useEffect, useState } from "react";
import "./Login.css"
import { Navigate, useNavigate } from "react-router-dom"


export default function Login(){
    const [formData, setFormData] = useState({username: "", password: ""});
    const navigate = useNavigate();


    function handleFormChange(e){
        let fieldName = e.target.name
        let fieldValue = e.target.value
        setFormData(prev => ({...prev, [fieldName]: fieldValue}));

    }


    async function loginUser(e){
        e.preventDefault()
        const response = await fetch("http://localhost:3000/users/login", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        });
        const jsonData = await response.json();
        if (jsonData.login){
            console.log(jsonData.login)
            navigate('/dashboard', {state: {user: jsonData.login}})
        }

    }

    return (


        <div className="login-form">

            
<div className="login-form-container">
                
                {/* <div className="login-image">
                    <img id="login-image" src="/public/blue-art.jpg" width={"320px"} height={"700px"}/>
                </div> */}

                <div className="form">
                    <form onSubmit={loginUser}>

                        <h2 className="form-title">L O G I N</h2>
                        <div className="input-field">
                            <input onChange={handleFormChange} value={formData.username} id="username" name="username" type="text" required />
                            <label htmlFor="username">Enter username</label>
                        </div>
                        <div className="input-field">
                            <input onChange={handleFormChange} value={formData.password} id= "password" name="password" type="password" required />
                            <label htmlFor="password">Enter password</label>
                        </div>
                        <button type="submit">Login</button>
                        <div className="Create-account">
                            <p>Create An Account? <a href="#">Register</a></p>
                        </div>
                    </form>
                     </div>
                </div>
            </div>
    )
}