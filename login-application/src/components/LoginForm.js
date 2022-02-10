import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import logo from "../images/login-app-logo.png"
import "./LoginForm.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import language from "./language.json"

export default function LoginForm() {

    let API_URL = "https://ys-dxc-loginapp.herokuapp.com/"

    let history = useHistory()

    const [form, setForm] = useState({
        "username": "",
        "password": ""
    })

    const [lang, setLang] = useState("en")

    const onUpdateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    

    const submitForm = async (form) => {
        let result = await axios.post(API_URL + "login", {
            form
        })
        if (result.data.message == "success") {
            localStorage.setItem("accessToken", result.data.accessToken)
            history.push("/home")
        } else {
            const showAlert = () => toast.error("Invalid username or password", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
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
                <input id="userIdInput" placeholder={language[lang].loginUsernameField} name="username" className="form-control" value={form.username} onChange={onUpdateFormField} />
            </div>
            <div id="login-password-div">
                <input id="passwordInput" type="password" placeholder={language[lang].loginPasswordField} name="password" className="form-control" value={form.password} onChange={onUpdateFormField} />
            </div>

            <div id="login-btn-div">
                <btn id="login-btn" className="btn btn-success" onClick={() => submitForm(form)}>{language[lang].loginButtonText}</btn>
            </div>
            <div id="sign-up-prompt-div">
                <span id="sign-up-prompt">{language[lang].signUpPrompt}</span>
            </div>
            
            <div id="sign-up-btn-div">
                <btn id="sign-up-btn"className="btn btn-secondary" onClick={() => history.push("/sign-up")}>{language[lang].signUpButtonText}</btn>
            </div>
            <div style={{"display": "flex", "justifyContent": "center", "margin-top": "10px"}}>
                <span className="language-text" role="button" title="en" onClick={(evt) => setLang(evt.target.title)}>{language["en"].selectLang}</span>
                <span>&nbsp;/&nbsp; </span>
                <span className="language-text" role="button" title="chi" onClick={(evt) => setLang(evt.target.title)}>{language["chi"].selectLang}</span>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}