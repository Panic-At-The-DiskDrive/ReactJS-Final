import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ product }) {

  if (!product) return null

  const formatPrice = (price) => {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    })
  }

  return (
    <Card className="h-100 shadow-sm border-0 item-card">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.title}
        style={{
          height: 180,
          objectFit: 'cover',
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{product.title}</Card.Title>
        <Card.Text className="text-muted mb-2">{product.category}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>{formatPrice(product.price)}</strong>
          <Button
            as={Link}
            to={`/item/${product.id}`}
            variant="primary"
            size="sm"
            className="rounded-pill"
          >
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item

