import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <Card className="h-100 item-card">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.title}
        style={{ height: 180, objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-muted">{product.category}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>${(product.price / 100).toFixed(2)}</strong>
          <Button as={Link} to={`/item/${product.id}`} variant="primary" size="sm">
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item
