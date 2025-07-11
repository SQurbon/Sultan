import { useCart } from '../../pages/Shop/CardContext';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FcMoneyTransfer } from "react-icons/fc";
import './Bag.css'
import { CardTitle } from 'react-bootstrap';

export default function Bag() {
    const { cartItems, dispatch } = useCart();



    const total = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );




    return (
        <section className='bag'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bagtop">
                            <h1>Корзина</h1>
                            <h3>{total.toFixed(2)} ₽</h3>
                            <button>Получить скидку</button>
                        </div>

                        {cartItems.length === 0 ? (
                            <p>В корзине ничего нет.</p>
                        ) : (
                            <div>
                                {cartItems.map(item => (
                                    <div className='main' key={item.id}>
                                        <img src={item.img} alt={item.h1} />
                                        <div className="about">
                                            <h2>{item.h1}</h2>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
                                            </p>
                                        </div>
                                        <div className="chart">
                                            <div onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}>
                                                <FaMinus />
                                            </div>
                                            <h6>{item.quantity || 1}</h6>
                                            <div onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}>
                                                <FaPlus />
                                            </div>
                                            <h5>{item.price * (item.quantity || 1)} ₽</h5>

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
    )
}
