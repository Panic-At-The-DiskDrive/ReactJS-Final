import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger"> ERROR 404</h1>
      <p className="lead">Ups!!! La página que buscas no existe...</p>
      <img 
        src="https://i.postimg.cc/h4sTqTkR/Beru-Gaming-404.jpg" 
        alt="Imagen graciosa 404" 
        className="img-fluid my-4"
      />
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  )
}

export default Error404
