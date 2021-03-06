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
    console.log(newPage);
    setPage(newPage)
    setLoading(true)
    api.get(`/produtos?perPage=8&page=${newPage}`).then(results => {
      setLoading(false)
      setProdutos([...produtos, ...results.data]);
    })
  }

  return (
    <Pagina>

      <Row>
          { produtos.map(item=>(
            <Col key={item.id} md={3} className="mb-3">
              <Cartao produto={item} />
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