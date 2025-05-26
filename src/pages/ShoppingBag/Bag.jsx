import React from 'react';
import { useCart } from '../../pages/Shop/CardContext';
// import { useCart } from '../context/CartContext';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import './Bag.css'
export default function Cart() {
    const { cart, dispatch } = useCart();


       const total = cart.reduce((sum, product) => sum + product.price, 0);



    return (
        <section className='bag'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Корзина</h1>
                        <h1>{total}</h1>
                        {cart.length === 0 ? (
                            <p>Savat bo‘sh</p>
                        ) : (
                            <div >
                                {cart.map(item => (
                                    <div className='main' key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className="about">
                                            <h2>{item.h1}</h2>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                                            </p>
                                        </div>
                                        <div className="chart">
                                            <div><FaMinus /></div>
                                            <h6>0</h6>
                                            <div><FaPlus /></div>
                                            <h5>{item.price}</h5>

                                            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
