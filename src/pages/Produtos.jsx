import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cartao from '../components/Cartao';
import InfiniteScroll from '../components/InfiniteScroll';
import Pagina from '../components/Pagina';
import api from '../services/api';

const Produtos = () => {

  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    fetchMore()
  }, [])

  async function fetchMore(){
    let newPage = page + 1
    setPage(newPage)
    setLoading(true)
    api.get(`/produtos?perPage=8&page=${newPage}`).then(results => {
      console.log(results.data);
      setProdutos([...produtos, ...results.data.data]);
      setLoading(false)
    })
  }

  return (
    <Pagina titulo="Produtos">

      <Row>
          { produtos.map(item=>(
            <Col key={item.id} md={3} className="mb-3">
              <Cartao />
            </Col>
          )) }
      </Row>
      {produtos.length && !loading &&
      <InfiniteScroll fetchMore={fetchMore} />
      }

    </Pagina>
  )
}

export default Produtos