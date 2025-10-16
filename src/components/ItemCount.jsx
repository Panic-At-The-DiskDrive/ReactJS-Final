import React, { useState, useEffect } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

function ItemCount({ stock = 10, initial = 1, onAdd }) {

  const [count, setCount] = useState(Math.min(Math.max(initial, 1), stock))

  useEffect(() => {

    if (count > stock) setCount(stock)
  }, [stock, count])

  const increment = () => setCount(c => Math.min(c + 1, stock))
  const decrement = () => setCount(c => Math.max(c - 1, 1))

  const handleAdd = () => {
    if (onAdd) onAdd(count)
  }

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <InputGroup style={{ width: 140 }}>
        <Button variant="outline-secondary" onClick={decrement} disabled={count <= 1}>
          -
        </Button>
        <FormControl value={count} readOnly />
        <Button variant="outline-secondary" onClick={increment} disabled={count >= stock}>
          +
        </Button>
      </InputGroup>
      <Button variant="success" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ItemCount

