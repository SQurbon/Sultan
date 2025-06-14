import { useCart } from '../../pages/Shop/CardContext';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FcMoneyTransfer } from "react-icons/fc";
import './Bag.css'
export default function Bag() {
    const { cartItems, dispatch } = useCart();


    const total = cart.reduce((sum, product) => sum + product.price, 0);


    return (
        <section className='bag'>
            <div className="topcard">
                <h1>Корзина <FiShoppingCart /></h1>
                <h5>Цена: {total} <FcMoneyTransfer /></h5>
            </div>
            {cart.length === 0 ? (
                <p>Savat bo‘sh</p>
            ) : (
                <div className='father'>
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
                                <div className="caliculate">
                                    <div><FaMinus /></div>
                                    <h6>0</h6>
                                    <div><FaPlus /></div>
                                </div>
                                <h5>{item.price}</h5>

                                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}