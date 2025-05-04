import React from 'react'
import Header from '../../pages/Main/Header/Header'
import Product from '../../pages/Main/PromotionProduct/Product'
import CategoryProduct from '../../pages/Main/CategoryProduct/CategoryProduct'
import Aksya from '../../pages/Main/Aksya/Aksya'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Product/>
        <CategoryProduct/>
        <Aksya/>
    </div>
  )
}
