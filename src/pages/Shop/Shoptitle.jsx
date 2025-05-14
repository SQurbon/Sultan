import { useLocation } from "react-router-dom";
import './Shoptitle.css'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Product from "../Main/PromotionProduct/Product";

export default function Shoptitle() {

    const location = useLocation();
    const item = location.state;


   
    if (!item) return <p>Mahsulot topilmadi</p>;




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
                                    <div className="first"><h4>Цена:</h4><h5> {item.price}</h5></div>
                                </div>
                                <div className="caunt">
                                    <div className="minus">
                                        <FaMinus />
                                    </div>
                                    <h3>0</h3>
                                    <div className="plus">
                                        <FaPlus />
                                    </div>
                                    <button>В корзину <MdOutlineShoppingCart /></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Product/>


        </>
    )
}
