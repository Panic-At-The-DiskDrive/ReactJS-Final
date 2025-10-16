import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'
import { Spinner, Alert } from 'react-bootstrap'

function ItemDetail({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando producto...</p>
      </div>
    )
  }

  const handleAdd = (qty) => {
    addItem(product, qty)
    setAdded(true)
  }

  const formatPrice = (price) => {
    return price?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    })
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{product.title}</h2>

      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4"
        style={{ minHeight: '60vh' }}
      >
        <img
          src={product.img}
          alt={product.title}
          className="rounded shadow-sm"
          style={{ width: 300, objectFit: 'cover' }}
        />

        <div style={{ maxWidth: 480 }}>
          <p className="text-muted mb-1">Categoría: {product.category}</p>
          <p>{product.description}</p>
          <h4 className="fw-bold mb-3">{formatPrice(product.price)}</h4>

          {!added ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <Alert variant="success" className="mt-3">
              Producto agregado al carrito ✅
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
