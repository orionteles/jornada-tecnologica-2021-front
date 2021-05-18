import React from 'react'
import { Navbar } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Cabecalho = (props) => {

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Produtos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(Cabecalho)