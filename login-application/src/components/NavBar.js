import React, {useState} from 'react'
import {Navbar, Container, Offcanvas, Nav} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { checkIfLogin } from '../util'
import "./NavBar.css"
import logo from "../images/login-app-logo.png"


export default function NavBar() {
    let history = useHistory()

    const logoutUser = () => {
        localStorage.removeItem("accessToken")
        history.push("/login")
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <React.Fragment>
            <Offcanvas id="logout-confirmation-box" show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h1 id="logout-confirmation-text">Do you want to logout?</h1>
                    <div id="logout-btns-div">
                        <button className="btn btn-danger logout-btns" onClick={handleClose}>No</button>
                        <button className="btn btn-success logout-btns" onClick={() => {
                            logoutUser()
                            handleClose()
                        }}>Yes</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Navbar>
                <Container>
                    <Navbar.Brand href={checkIfLogin() ? "/home": "/"}>
                        <img id="nav-bar-logo" src={logo}/>
                    </Navbar.Brand>


                    {checkIfLogin() ? 
                    <Nav.Link onClick={() => handleShow()}><button className="btn btn-danger">Logout</button></Nav.Link>
                    :
                    null
                    }
                    



                </Container>
            </Navbar>
        </React.Fragment>
    )

}