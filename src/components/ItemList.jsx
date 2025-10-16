import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Item from './Item'

function ItemList({ items }) {

  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-center">No hay juegos para mostrar.</p>
  }

  return (
    <Row className="g-3 justify-content-center">
      {items.map((product) => (
        <Col
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center"
        >
          <Item product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList

