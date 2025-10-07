import React from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext'

function ItemDetail({ product }) {
  const { addItem } = useCart()

  const handleAdd = (qty) => {
    addItem(product, qty)
    
    alert(`Se agregaron ${qty} unidad(es) de "${product.title}" al carrito.`)
  }

  return (
    <div>
      <h2 className="text-center">{product.title}</h2>
      <div className="item-detail">
        <img src={product.img} alt={product.title} />
        <div>
          <p className="text-muted">Categoría: {product.category}</p>
          <p>{product.description}</p>
          <h4>${(product.price / 100).toFixed(2)}</h4>

          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
