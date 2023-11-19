// 'use client'; // Turns this (and any other component it depends on into a Client Component)
// Here we commented out the above line because we made a smaller AddToCart Client Component, allowing us to keep this whole component as a Server Component!

import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.scss';


const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  )
}

export default ProductCard