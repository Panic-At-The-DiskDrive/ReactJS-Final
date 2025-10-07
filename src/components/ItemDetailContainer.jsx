import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProductById(id)
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => {
        setError(err.message || 'Producto no encontrado')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <div className="container mt-4">
      {loading && <p className="text-center">Cargando detalle...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && product && <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
