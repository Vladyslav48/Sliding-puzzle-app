import React, { useState } from "react"
import { Navbar, Nav} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useAuth } from "../../hooks/AuthContext"



const Header = () => {
    const [setError] = useState("")
    const {logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }

    // async function handleCollection() {
    //   try {
       
    //     history.push("/my-collection")
    //   } catch {
    //     setError("Failed to my collection")
    //   }
    // }

    return (
      <div>
      <div className="row">
          <div className="col-md-12">
                  <Navbar className="navbar navbar-dark bg-primary"  expand="lg" sticky="top">
                      <Navbar.Brand href="#game">Sliding-puzzle game</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ml-auto">
                          <Nav.Link href="/game">Game</Nav.Link>
                          <Nav.Link href="/my-collection">My Collection</Nav.Link>
                          <Nav.Link href="/update-profile">Update Profile</Nav.Link>
                          <Nav.Link href="#link" onClick={handleLogout}>Log out</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>
                  <br />
          </div>
      </div>
  </div>
    )
  }

export default Header;