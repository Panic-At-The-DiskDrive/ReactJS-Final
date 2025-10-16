import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import ItemDetail from './ItemDetail'
import { Spinner, Alert } from 'react-bootstrap'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    setError(null)

    getProductById(id)
      .then((res) => {
        if (!res) {
          setError('Producto no encontrado')
          setProduct(null)
        } else {
          setProduct(res)
        }
      })
      .catch((err) => {
        console.error('Error al obtener el producto:', err)
        setError('Error al cargar el producto')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <div className="container mt-4">
      {loading && (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Cargando detalle del producto...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && product && <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer

