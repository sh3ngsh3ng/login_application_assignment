import React from 'react'
import NavBar from '../components/NavBar'
import { checkIfLogin, getUserDetails } from '../util'
import { useHistory } from 'react-router-dom'
import "./LandingPage.css"
import idPhoto from "../user-logo.png"
export default function LandingPage() {

    let history = useHistory()

    const renderContent = () => {
        if (checkIfLogin()) {
            let user = getUserDetails()
            return (
                <React.Fragment>
                    <h1 style={{'textAlign': "center"}}>ID Card</h1>
                    <div id="landing-page-div">
                        
                        {/* start of ID Card */}
                        <div id="id-card-div">
                            <div id="id-photo-div">
                                <img class="id-photo" src={idPhoto}/>
                            </div>
                            <div>
                                <span>Username: {user.username}</span>
                            </div>
                            <div>
                                <span>Email: {user.email}</span>
                            </div>
                            <div>
                                <span>Role: {user.role}</span>
                            </div>
                            <div>
                                {user.role == "manager" ? 
                                <button className="btn btn-primary" onClick={() => history.push("/list")}>View Nominal Roll</button>
                                : null
                                }
                            </div>
                        </div>
                        {/* end of ID Card */}
                    </div>
                </React.Fragment>
            )
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