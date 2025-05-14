import React from 'react'
import { PromotionProduct } from '../../../contexts/Promotionproduct/Productcontext'
import { FiShoppingCart } from "react-icons/fi";
import './Product.css'
import { useNavigate } from 'react-router-dom';
export default function Product() {
    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate(`/shop/${item.id}`, { state: item });
    };
    
    return (
        <section>
            <h1><span>Акционные</span> товары</h1>

            <div className="container">
                {PromotionProduct.map(item => (
                    <div className="mainbox" onClick={() => handleClick(item)} key={item.id}>
                        <div className="xit"><h6>ПОПУЛЯРНОЕ</h6></div>
                        <img src={item.img} alt="" />
                        <h2>{item.h1}</h2>
                        <div className="info">
                            <div className="first"><h4>{item.h2}</h4><h5>{item.h3}</h5></div>
                            <div className="first"><h4>{item.h4}</h4><h5>{item.h5}</h5></div>
                            <div className="first"><h4>{item.h44}</h4><h5>{item.h55}</h5></div>
                        </div>
                        <div className="bottom">
                            <h6>{item.price}</h6>
                            <button>{item.btn}</button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
