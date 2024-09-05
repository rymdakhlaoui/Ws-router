import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { RiMovie2Line } from "react-icons/ri";
import {Link, useNavigate} from 'react-router-dom'

const Navigation = ({isAdmin}) => {
    const navigate = useNavigate()
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <RiMovie2Line size={35} color="red" />
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            { isAdmin ? <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link> : null }

            {/* <a href='/features'>Link to Features</a>

            <Link to='/features'>Link to Features 2</Link> */}

          </Nav>
        </Container>
        <Button variant="outline-danger" onClick={()=> navigate('/login')}>Login</Button>
      </Navbar>
    </div>
  )
}

export default Navigation