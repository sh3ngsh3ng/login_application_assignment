import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import logo from "../images/login-app-logo.png"
import "./LoginForm.css"

export default function LoginForm() {

    let history = useHistory()

    const [form, setForm] = useState({
        "username": "",
        "password": ""
    })

    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <div id="login-form-div" className="container">
            <div id="login-form">
            <div id="login-form-brand-logo-div">
                <img class="form-brand-logo" src={logo}/>
            </div>
            <div id="login-username-div">
                <input id="userIdInput" placeholder="Enter Username" name="username" className="form-control" value={form.username} onChange={onUpdateFormField} />
            </div>
            <div id="login-password-div">
                <input id="passwordInput" type="password" placeholder="Password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField} />
            </div>

            <div id="login-btn-div">
                {/* <btn id="login-btn" className="btn btn-success" onClick={() => submitForm(form)}>Login</btn> */}
            </div>
            <div id="sign-up-prompt-div">
                <span id="sign-up-prompt">Don't have an account?</span>
            </div>
            
            <div id="sign-up-btn-div">
                <btn id="sign-up-btn"className="btn btn-secondary" onClick={() => history.push("/sign-up")}>Sign Up</btn>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}