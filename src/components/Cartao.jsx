import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cartao = ({produto}) => {

  return (
    <>
      <Card>
        <Link to={'/produtos/' + produto.id}>
          <Card.Img variant="top" src={"http://localhost:3000/assets/img/" + produto.capa} />
        </Link>
        <Card.Body>
          <Card.Text>
            {produto.nome}
          </Card.Text>
          <Card.Title>R$ {produto.preco}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default Cartao