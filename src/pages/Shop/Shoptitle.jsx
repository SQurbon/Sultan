import { useLocation, useNavigate } from "react-router-dom";
import './Shoptitle.css';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Product from "../Main/PromotionProduct/Product";
import { useCart } from "./CardContext";
import { Badge } from "react-bootstrap";

export default function Shoptitle() {
    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();
    const {count, dispatch } = useCart(); // <-- Contextdan dispatch olamiz

    if (!item) return <p>Mahsulot topilmadi</p>;

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const handleRemoveToCart = () => {
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
                                    <div className="plus" onClick={handleAddToCart}><FaPlus /></div>
                                    <button onClick={handlenavigate}>В корзину < MdOutlineShoppingCart  className="shop"/><Badge     variant="default |outline | secondary | destructive"><p>{count}</p></Badge></button>
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
