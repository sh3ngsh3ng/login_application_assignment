import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import axios from 'axios'
import Spinner from "react-bootstrap/Spinner"
import { checkIfLogin } from '../util'


export default function LoadingPage() {
    const [apiLoaded, setApiLoaded] = useState(false)
    let history = useHistory()

    let API_URL = "https://3000-sh3ngsh3ng-loginapplicat-h17zq07u389.ws-us31.gitpod.io/"

    useEffect(() => {
        async function checkApiLive() {
            let response = await axios.get(API_URL)
            if (response.data.live) {
                setTimeout(function(){
                    setApiLoaded(true)
                }, 3000)
            }
        }
        checkApiLive()
    },[])

    useEffect(() => {
        if (apiLoaded) {
            history.push("/login")
        }
    }, [apiLoaded])


    return (
        <React.Fragment>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </React.Fragment>
    )
}