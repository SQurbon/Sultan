import React, { useRef } from 'react'
import './Logo.css'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// images for carousel
import carousel1 from '../../../assets/images/logocarousel1.png'
import carousel2 from '../../../assets/images/logocarousel2.png'
import carousel3 from '../../../assets/images/logocarousel3.png'
import carousel4 from '../../../assets/images/logocarousel4.png'
import carousel5 from '../../../assets/images/logocarousel5.png'
import carousel6 from '../../../assets/images/logocarousel6.png'
import carousel7 from '../../../assets/images/logocarousel7.png'
import carousel8 from '../../../assets/images/logocarousel8.png'
import carousel9 from '../../../assets/images/logocarousel9.png'
import carousel10 from '../../../assets/images/logocarousel10.png'




export default function Logo() {
    const highlightRef = useRef(null);
    const navbarRef = useRef(null);

    const moveHighlight = (e) => {
        const link = e.target;
        const highlight = highlightRef.current;
        const navbar = navbarRef.current;
        const rect = link.getBoundingClientRect();
        const parentRect = navbar.getBoundingClientRect();

        highlight.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
        highlight.style.top = `${rect.top - parentRect.top}px`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.opacity = 1;
    };

    return (
        <>
            <section className="logo">
                <div className="container">
                    <div className="row">
                        <h1><span>Лучшие</span> товары</h1>
                        <p className="text">От ведущих мировых брендов</p>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navbar" ref={navbarRef}>
                                <div className="highlight" ref={highlightRef}></div>
                                <img src={carousel1} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel2} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel3} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel4} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel5} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel6} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel7} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel8} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel9} onMouseOver={moveHighlight} alt="" />
                                <img src={carousel10} onMouseOver={moveHighlight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}