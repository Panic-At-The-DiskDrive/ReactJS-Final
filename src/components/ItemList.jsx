import React from 'react'
import Item from './Item'
import { Row, Col } from 'react-bootstrap'

function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-center">No hay juegos para mostrar.</p>
  }

  return (
    <Row className="g-3">
      {items.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList
