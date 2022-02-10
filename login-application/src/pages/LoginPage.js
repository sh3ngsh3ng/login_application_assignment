import React from 'react'
import LoginForm from '../components/LoginForm'
import NavBar from '../components/NavBar'



export default function LoginPage() {



    return (
        <React.Fragment>
            <div id="login-page">
                <NavBar/>
                <LoginForm/>
            </div>
            
        </React.Fragment>
    )


}