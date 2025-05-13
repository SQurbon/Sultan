import React from 'react'
import { FaPlus } from "react-icons/fa";
import './Header.css'
export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hedtitle">
                                <div className="sss">
                                    <h1>Бытовая химия,
                                        косметика
                                        и хозтовары
                                    </h1>
                                    <h2>оптом по кокчетаву и области</h2>
                                </div>
                                <button>В КАТАЛОГ</button>
                                <div className="titleBottom">
                                    <div className="box">
                                        <div className="icons"><FaPlus /></div>
                                        <h5><span>Только самые</span>
                                            выгодные предложения</h5>
                                    </div>
                                    <div className="box">
                                        <div className="icons"><FaPlus /></div>
                                        <h5><span>Бесплатная доставка </span>
                                            по Кокчетаву от 10 тыс ₸</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
