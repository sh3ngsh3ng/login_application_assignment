import React from 'react'
import NavBar from '../components/NavBar'
import SignUpForm from '../components/SignUpForm'



export default function SignUpPage(){


    return (
        <React.Fragment>
            <div id ="sign-up-page">
                <NavBar/>
                <SignUpForm/>
            </div>
            
        </React.Fragment>
    )
}