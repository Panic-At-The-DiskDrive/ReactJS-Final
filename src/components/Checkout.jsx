import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../services/firebase'

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError('Completa todos los campos')
      return
    }

    if (cart.length === 0) {
      setError('El carrito está vacío')
      return
    }

    setLoading(true)
    setError(null)

    const order = {
      buyer,
      items: cart.map(({ id, title, qty, price }) => ({ id, title, qty, price })),
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date())
    }

    try {
      const ordersCollection = collection(db, 'orders')
      const docRef = await addDoc(ordersCollection, order)
      setOrderId(docRef.id)
      clearCart()
    } catch (err) {
      console.error('Error creando la orden:', err)
      setError('No se pudo procesar la compra. Intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <Alert variant="success">
          <h4>¡Compra realizada con éxito!</h4>
          <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Checkout</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            placeholder="Número de teléfono"
          />
        </Form.Group>

        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? 'Procesando...' : 'Finalizar compra'}
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
