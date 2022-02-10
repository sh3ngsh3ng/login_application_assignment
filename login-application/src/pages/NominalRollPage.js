import React, {useEffect, useState} from "react"
import NavBar from "../components/NavBar"
import axios from "axios"
import { sendJwt } from "../util"
import { useHistory } from "react-router-dom"


export default function NominalRollPage() {
    let history = useHistory()

    let API_URL = "https://3000-sh3ngsh3ng-loginapplicat-h17zq07u389.ws-us31.gitpod.io/"

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let result = await axios.get(API_URL + "list", sendJwt())
            setData(result.data)
            console.log(result)
        }
        getData()
    },[])

    const renderContent = () => {

        return (
            <React.Fragment>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((each) => {
                                return <tr>
                                    <td>{each.username}</td>
                                    <td>{each.email}</td>
                                    <td>{each.role}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <button className="btn btn-secondary" onClick={() => history.push("/home")}>Back</button>
                </div>
            </React.Fragment>
        )

    }

    return (
        <React.Fragment>
            <NavBar/>
            {renderContent()}
        </React.Fragment>
    )
}




