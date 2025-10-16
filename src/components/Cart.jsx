import React from 'react'
import { useCart } from '../context/CartContext'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, removeItem, clearCart, getItemCount, getTotalPrice } = useCart()
  const total = getTotalPrice()
  const count = getItemCount()

  if (cart.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h2>Carrito</h2>
        <p className="text-muted">Tu carrito está vacío</p>
        <Button as={Link} to="/" variant="primary">
          Volver al catálogo
        </Button>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.qty}</td>
              <td>${(item.price / 100).toFixed(2)}</td>
              <td>${((item.price * item.qty) / 100).toFixed(2)}</td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <strong>Total ({count} items):</strong> ${ (total / 100).toFixed(2) }
        </div>
        <div className="d-flex gap-2">
          <Button as={Link} to="/checkout" variant="primary">
            Ir al checkout
          </Button>
          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
