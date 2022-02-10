import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import logo from "../images/login-app-logo.png"
import "./LoginForm.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {

    let API_URL = "https://3000-sh3ngsh3ng-loginapplicat-h17zq07u389.ws-us31.gitpod.io/"

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

    const showAlert = () => toast.error("Invalid username or password", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

    const submitForm = async (form) => {
        let result = await axios.post(API_URL + "login", {
            form
        })
        if (result.data.message == "success") {
            localStorage.setItem("accessToken", result.data.accessToken)
            history.push("/home")
        } else {
            showAlert()
        }
    }

    return (
        <React.Fragment>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
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
                <btn id="login-btn" className="btn btn-success" onClick={() => submitForm(form)}>Login</btn>
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