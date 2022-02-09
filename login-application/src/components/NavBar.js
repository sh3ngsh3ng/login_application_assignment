import React from 'react'
import {Navbar, Container} from 'react-bootstrap'



export default function NavBar() {

    return (
        <React.Fragment>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                </Container>
            </Navbar>
        </React.Fragment>
    )

}