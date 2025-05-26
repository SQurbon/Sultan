import { useLocation, useNavigate } from "react-router-dom";
import './Shoptitle.css';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { useCart } from "../../context/CartContext"; // <-- Qo‘shildi
import Product from "../Main/PromotionProduct/Product";
import { useCart } from "./CardContext";
import { useState } from "react";

export default function Shoptitle() {
    const [count, setCount] = useState(0)
    const location = useLocation();
    const item = location.state;
  const navigate = useNavigate();
    const { dispatch } = useCart(); // <-- Contextdan dispatch olamiz

    if (!item) return <p>Mahsulot topilmadi</p>;
    console.log(item.price);
    





    const handleAddToCart = () => {
        setCount(count + 1)
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };
    const handleRemoveToCart = () => {
        setCount(count <= 0 ? 0 : count - 1)
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    }

    const handlenavigate = () => {
        navigate('/bag'); // <-- Qo‘shildi
    }



    
    return (
        <>
            <section className="shoptitle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={item.img} alt={item.h1} />
                        </div>
                        <div className="col-lg-8">
                            <h2>{item.h1}</h2>
                            <div className="total">
                                <div className="info">
                                    <div className="first"><h4>{item.h2}</h4><h5>{item.h3}</h5></div>
                                    <div className="first"><h4>{item.h4}</h4><h5>{item.h5}</h5></div>
                                    <div className="first"><h4>{item.h44}</h4><h5>{item.h55}</h5></div>
                                    <div className="first"><h4>Цена:</h4><h5>{item.price}</h5></div>
                                </div>
                                <div className="caunt">
                                    <div className="minus" onClick={handleRemoveToCart}><FaMinus /></div>
                                    <h3>{count}</h3>
                                    <div className="plus" onClick={handleAddToCart}><FaPlus /></div>
                                    <button onClick={handlenavigate}>В корзину <MdOutlineShoppingCart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Product />
        </>
    );
}
