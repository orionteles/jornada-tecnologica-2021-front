import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import Pagina from '../components/Pagina';
import api from '../services/api';

const ProdutosDetalhe = (props) => {

  const [produto, setProduto] = useState({})
  const [caracteristicas, setCaracteristicas] = useState([])

  useEffect(()=>{

    const id = props.match.params.id
    
    api.get(`/produtos/${id}`).then(results => {
      setProduto(results.data);
    })

    api.get(`/produtos/${id}/caracteristicas`).then(results => {
      console.log(results.data);
      setCaracteristicas(results.data);
    })
  }, [props])

  return (
    <Pagina>

      {produto.id && 
        <Row>
          <Col>
            <Card.Img variant="top" src={"http://localhost:3000/assets/img/" + produto.capa} />
          </Col>
          <Col>
            <Alert  variant='primary'>
            {produto.nome}
            </Alert>
            <p><strong>Preço:</strong> R$ {produto.preco}</p>
            <p><strong>Marca:</strong> {produto.marca.nome}</p>
            <p><strong>Modelo:</strong> {produto.modelo.nome}</p>
            { caracteristicas.map(item=>(
              <p key={item.id}><strong>{item.caracteristica.nome}:</strong> {item.valor}</p>
            )) }
            
          </Col>
        </Row>
      }

    </Pagina>
  )
}

export default ProdutosDetalhe