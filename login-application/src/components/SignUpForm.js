
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from 'axios'
import "./SignUpForm.css"
import logo from "../images/login-app-logo.png"

export default function SignUpForm() {

    let history = useHistory()

    let API_URL = "https://3000-sh3ngsh3ng-loginapplicat-h17zq07u389.ws-us31.gitpod.io/"

    const [form, setForm] = useState({
        "username": "",
        "email": "",
        "password": "",
        "confirm_password": ""
    })


    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (form) => {
        // front end validation
        let result = await axios.post(API_URL + "sign-up", {
            form
        })
        console.log(result.data.message)
    }


    return (
        <React.Fragment>
            <div id="sign-up-form-div" className="container">
                <div id="sign-up-form">
                    <div id="sign-up-form-brand-logo-div">
                        <img class="form-brand-logo" src={logo}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="userIdInput" name="username" placeholder="Enter Username"className="form-control" value={form.username} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="passwordInput" type="password" placeholder="Password" name="password" className="form-control" value={form.password} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirm_password" className="form-control" value={form.confirm_password} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <input id="emailInput" name="email" placeholder="Enter Email"className="form-control" value={form.email} onChange={onUpdateFormField}/>
                    </div>
                    <div class="sign-up-input-div">
                        <button id="sign-up-submit-btn" className="btn btn-success" onClick={() => submitForm(form)}>Submit</button>
                    </div>
                    <div id="login-prompt-div">
                        <i class="bi bi-arrow-left-circle" onClick={() => history.push("/login")}></i>
                        <span id="login-prompt">Back to Login</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}