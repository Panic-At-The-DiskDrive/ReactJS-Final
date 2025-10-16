import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addItem = (product, qty) => {
    setCart(prev => {
      const existing = prev.find(it => it.id === product.id)
      if (existing) {

        const newQty = Math.min(existing.qty + qty, product.stock)
        return prev.map(it =>
          it.id === product.id ? { ...it, qty: newQty } : it
        )
      } else {
        return [...prev, { ...product, qty: Math.min(qty, product.stock) }]
      }
    })
  }

  const removeItem = id => {
    setCart(prev => prev.filter(it => it.id !== id))
  }

  const clearCart = () => setCart([])

  const getItemCount = () => cart.reduce((acc, it) => acc + it.qty, 0)
  const getTotalPrice = () =>
    cart.reduce((acc, it) => acc + it.price * it.qty, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getItemCount, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
