import React from 'react';
import { Card } from 'react-bootstrap';

const Cartao = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1304774950" />
        <Card.Body>
          <Card.Text>
            Smartphone Samsung Galaxy S20 128GB, 6GB RAM, 6.5
          </Card.Text>
          <Card.Title>R$ 1.000,00</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default Cartao