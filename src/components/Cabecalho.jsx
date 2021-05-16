import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const Cabecalho = (props) => {

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Produtos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link className="nav-link" to="/alunos">Alunos</Link>
              <Link className="nav-link" to="/professores">Professores</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(Cabecalho)