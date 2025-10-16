import { db } from './firebase'
import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore'

const productsCollection = collection(db, 'games')

export function getProducts() {
  return getDocs(productsCollection).then((snapshot) => {
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    return products
  })
}

export function getProductsByCategory(categoryId) {
  const q = query(productsCollection, where('category', '==', categoryId))
  return getDocs(q).then((snapshot) => {
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    return products
  })
}

export function getProductById(id) {
  const docRef = doc(db, 'games', id)
  return getDoc(docRef).then((snapshot) => {
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() }
    } else {
      throw new Error('Producto no encontrado')
    }
  })
}

