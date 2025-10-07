import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  
  const addItem = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.id === product.id)
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + qty } : it
        )
      } else {
        
        return [...prev, { id: product.id, title: product.title, price: product.price, img: product.img, qty }]
      }
    })
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const getItemCount = () => {
    return cart.reduce((acc, it) => acc + it.qty, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((acc, it) => acc + it.qty * it.price, 0) 
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getItemCount, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}