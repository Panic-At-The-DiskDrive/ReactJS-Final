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
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts()
        setItems(data)
      } catch (err) {
        console.error('Error cargando productos:', err)
        setError('No se pudieron cargar los productos. Intentalo más tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoryId])

  const heading = categoryId
    ? `Categoría: ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
    : mensaje || 'Catálogo completo'

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">{heading}</h2>

      {loading && <p className="text-center">Cargando productos...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && items.length === 0 && (
        <p className="text-center text-muted">No hay productos disponibles.</p>
      )}

      {!loading && !error && items.length > 0 && <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer




