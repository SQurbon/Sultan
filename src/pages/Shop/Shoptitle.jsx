import { useLocation, useNavigate } from "react-router-dom";
import './Shoptitle.css';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Product from "../Main/PromotionProduct/Product";
import { useCart } from "./CardContext";
import { Badge } from "react-bootstrap";
import { useCartIcon } from "../../components/Navbar/CartIconProvider";
import { useRef } from "react";

export default function Shoptitle() {
    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();
    const { count, dispatch } = useCart(); // <-- Contextdan dispatch olamiz



    const cartRef = useCartIcon(); // Navbar savat ikonkasi
    const imgRef = useRef(null);









    if (!item) return <p>Mahsulot topilmadi</p>
    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: item });

        const img = imgRef.current;
        const cart = cartRef.current; // cartRef DOM div bo‘lishi kerak
        if (!img || !cart || !img.complete) return;

        const imgRect = img.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();

        // Klon yaratish
        const clone = img.cloneNode(true);
        clone.style.position = "fixed";
        clone.style.left = imgRect.left + "px";
        clone.style.top = imgRect.top + "px";
        clone.style.width = imgRect.width + "px";
        clone.style.height = imgRect.height + "px";
        clone.style.transition = "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
        clone.style.zIndex = 1000;
        clone.style.pointerEvents = "none"; // hover va clicklarga aralashmasin
        document.body.appendChild(clone);

        // Animatsiya boshlanishi
        requestAnimationFrame(() => {
            const dx = cartRect.left - imgRect.left - 70;
            const dy = cartRect.top - imgRect.top - 85; // tepaga silkina
            clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`; // kichrayadi va silkina
            clone.style.opacity = 0.7;
        });

        // Animatsiya tugagandan keyin klonni olib tashlash
        setTimeout(() => {
            document.body.removeChild(clone);
        }, 1200); // transition vaqtiga mos
    };



    const handleRemoveToCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });

        const img = imgRef.current;
        const cart = cartRef.current; // cartRef DOM div bo‘lishi kerak
        if (!img || !cart || !img.complete) return;

        const imgRect = img.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();

        // Klon yaratish (savatchadan chiqayotgan animatsiya)
        const clone = img.cloneNode(true);
        clone.style.position = "fixed";
        clone.style.left = cartRect.left + "px"; // savatchadan boshlanadi
        clone.style.top = cartRect.top + "px";
        clone.style.width = imgRect.width * 0.2 + "px"; // kichik rasm bilan boshlash
        clone.style.height = imgRect.height * 0.2 + "px";
        clone.style.opacity = 2;
        clone.style.transition = "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
        clone.style.zIndex = 1000;
        clone.style.pointerEvents = "none";
        document.body.appendChild(clone);

        requestAnimationFrame(() => {
            const dx = imgRect.left - cartRect.left - -20;
            const dy = imgRect.top - cartRect.top - -20;
            const newWidth = imgRect.width - cartRect.width - 5;
            const newHeight = imgRect.height - cartRect.height - 5;

            clone.style.transform = `translate(${dx}px, ${dy}px)`; // faqat silkina
            clone.style.width = `${newWidth}px`; // width o‘zgardi
            clone.style.height = `${newHeight}px`; // height o‘zgardi
            clone.style.opacity = 0.5; // so‘nadi
        });
        setTimeout(() => {
            document.body.removeChild(clone);
        }, 1200);
    };


    const handlenavigate = () => {
        navigate('/bag'); // <-- Qo‘shildi
    }

    return (
        <>
            <section className="shoptitle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img ref={imgRef} src={item.img} alt={item.h1} />
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
                                    <button onClick={handlenavigate}>В корзину < MdOutlineShoppingCart className="shop" /><Badge variant="default |outline | secondary | destructive"><p>{count}</p></Badge></button>
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
