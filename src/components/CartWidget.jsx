import React from 'react'
import { Badge, Dropdown, Button } from 'react-bootstrap'
import { BsCart4 } from 'react-icons/bs'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const { cart, getItemCount, clearCart, getTotalPrice, removeItem } = useCart()
  const count = getItemCount()
  const total = getTotalPrice()

  return (
    <Dropdown align="end">
      <Dropdown.Toggle id="cart-dropdown" className="btn-cart-toggle">
        <BsCart4 size={22} color="white" aria-hidden="true" />
        <Badge bg="success" className="ms-2" pill aria-label="Cantidad de items en carrito">
          {count > 0 ? count : '0'}
        </Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: 260, padding: '0.75rem' }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="mb-1">Carrito vacío</p>
            <small className="text-muted">Agrega productos desde el catálogo</small>
          </div>
        ) : (
          <>
            <div style={{ maxHeight: 220, overflowY: 'auto' }}>
              {cart.map((it) => (
                <div key={it.id} className="d-flex align-items-center mb-2">
                  <img
                    src={it.img}
                    alt={it.title}
                    style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6 }}
                  />
                  <div className="ms-2" style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{it.title}</div>
                    <div style={{ fontSize: 13 }} className="text-muted">
                      {it.qty} × ${(it.price / 100).toFixed(2)}
                    </div>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeItem(it.id)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-2">
              <strong>Total:</strong>
              <span>${(total / 100).toFixed(2)}</span>
            </div>

            <div className="d-flex gap-2">
              <Button as={Link} to="/checkout" replace variant="primary" size="sm" className="flex-grow-1">
                Ir al checkout
              </Button>
              <Button variant="outline-danger" size="sm" onClick={clearCart}>
                Vaciar
              </Button>
            </div>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CartWidget



