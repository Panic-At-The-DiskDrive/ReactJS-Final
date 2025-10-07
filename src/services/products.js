import catalogo from '../data/catalogo.json'

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(catalogo), 600)
  })
}

export function getProductsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = catalogo.filter(
        (p) => p.category.toLowerCase() === categoryId.toLowerCase()
      )
      resolve(filtered)
    }, 600)
  })
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = catalogo.find((p) => p.id === id)
      if (product) resolve(product)
      else reject(new Error('Producto no encontrado'))
    }, 600)
  })
}
