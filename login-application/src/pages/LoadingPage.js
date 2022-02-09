import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import axios from 'axios'

export default function LoadingPage() {
    const [apiLoaded, setApiLoaded] = useState(false)
    let history = useHistory()

    let API_URL = "https://3000-sh3ngsh3ng-loginapplicat-h17zq07u389.ws-us31.gitpod.io/"

    useEffect(() => {
        async function checkApiLive() {
            let response = await axios.get(API_URL)
            setApiLoaded(response.data.live)
        }
        checkApiLive()
    },[])

    useEffect(() => {
        setTimeout(function() {
            history.push("/login")
        }, 3000)
    }, [apiLoaded])


    return (
        <React.Fragment>
            Put loading image/spinner here
        </React.Fragment>
    )
}