import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../services/products'
import ItemList from './ItemList'

function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts()

    fetcher
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        setError(err.message || 'Error al cargar productos')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  const heading = categoryId ? `Categoría: ${categoryId}` : (mensaje || 'Catálogo completo')

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">{heading}</h2>

      {loading && <p className="text-center">Cargando productos...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer



