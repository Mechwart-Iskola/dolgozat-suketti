import React from 'react'
import { Product } from '../../types/Product'
import { ProductCardProps } from '../../props/ProductCardProps'

const ProductCard = ({product} : ProductCardProps) => {
  return (
    <div>
      <div className='product-info'>
       <img src={product.image} className="product-image"></img>
       <div className='result-section product-details'>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
      </div>
    </div>
    </div>
  )
}

export default ProductCard