import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import axios from 'axios'
import Spinner from "react-bootstrap/Spinner"
import { checkIfLogin } from '../util'
import "./LoadingPage.css"

export default function LoadingPage() {
    const [apiLoaded, setApiLoaded] = useState(false)
    const [count, setCount] = useState(0)
    let history = useHistory()

    let API_URL = "https://ys-dxc-loginapp.herokuapp.com/"

    useEffect(() => {
        async function checkApiLive() {
            let response = await axios.get(API_URL)
            if (response.data.live) {
                setApiLoaded(true)
            }
        }
        checkApiLive()
        setTimeout(function() {
            setCount(count+1)
        }, 2000)
    }, [count])


    useEffect(() => {
        if (apiLoaded) {
            history.push("/login")
        }
    }, [apiLoaded])


    return (
        <React.Fragment>
            

            <div id="load-div">
                <div id="load-div-item">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Booting up application...</p>
                </div>
            </div>
            
        </React.Fragment>
    )
}