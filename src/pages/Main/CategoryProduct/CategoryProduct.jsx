import React from 'react'
import { CategoryProductContext } from '../../../contexts/Categoryproductcontext/CategoryProductContext'
import './CategoryProduct.css'
export default function CategoryProduct() {
    return (
        <>
            <section className='catalog'>
                            <h1><span>категории</span> товаров</h1>
                            <p className="text">10 000+ ходовых позиций по спецмальным ценам</p>
                        
                <div className="container">

                    {CategoryProductContext.map(item => (
                        <div className='box'>
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <h3>{item.h3}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
