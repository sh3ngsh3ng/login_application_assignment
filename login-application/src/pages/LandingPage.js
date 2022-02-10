import React from 'react'
import NavBar from '../components/NavBar'
import { checkIfLogin } from '../components/util'
import { useHistory } from 'react-router-dom'

export default function LandingPage() {

    let history = useHistory()

    const renderContent = () => {
        if (checkIfLogin()) {
            return <h1>You are logged In</h1>
        } else {
            history.push("/login")
        }
    }


    return(
        <React.Fragment>
            <NavBar/>
            {renderContent()}
        </React.Fragment>
    )
}