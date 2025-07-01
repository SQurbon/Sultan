import React, { useEffect, useRef, useState, } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxCross1, RxDashboard } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import './Navbar.css'
import logo from '../../assets/images/3.1 Лого Султан RGB.svg'
import user from '../../assets/images/Group 100.svg'
import { PromotionProduct } from '../../contexts/Promotionproduct/Productcontext';

// import { Badge } from "@/components/ui/badge"
export default function Navbar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [isVisible, setIsVisible] = useState(!isMobile);
    const [catalog, setCatalog] = useState(false)
    const [search, setSearch] = useState("");



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

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setIsVisible(!mobile); // Mobil bo‘lsa: false, Desktop bo‘lsa: true
        };

        handleResize(); // birinchi yuklanganda tekshir
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // serach qismi

    const handle = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }


    useEffect(() => {
        const searched = () => { 
            
        }
        searched()
        
    }, [search])
    



    return (
        <>
            <div className="topnone">
                <div onClick={() => setIsVisible(!isVisible)} className="bars" >
                    {isVisible ? <RxCross1 /> : <FaBars style={{ transition: "1s" }} />}

                </div>
                <img className='mediaLogo' src={logo} alt="" />
                <div className="topshop">
                    <LiaShoppingCartSolid />
                </div>

            </div>
            <div className="BTN">
                <button onClick={() => setCatalog(!catalog) && alert("salom")} >{catalog ? <RxCross1 /> : <RxDashboard />}  Каталог</button>
                <div className="poisk">
                    <FaSearch />
                    <input type="text" placeholder='Поиск' onChange={(e) => handle(e)} />
                </div>
            </div>

            {isVisible && (
                <div className="nav">
                    <div className="navTop">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="navTopLeft">
                                        <div className="location">
                                            <CiLocationOn />
                                            <h5>г. Кокчетав, ул. Ж. Ташенова 129Б  <br /><span>(Рынок Восточный)</span></h5>
                                        </div>
                                        <div className="mail">
                                            <CiMail />
                                            <h5>opt.sultan@mail.ru <br />
                                                <span>На связи в любое время</span></h5>
                                        </div>
                                    </div>
                                    <ul ref={navbarRef}>
                                        <div className="highlight" ref={highlightRef}></div>
                                        <li>
                                            <a onMouseOver={moveHighlight} href="">О компании</a>
                                        </li>
                                        <li>
                                            <a onMouseOver={moveHighlight} href="/delivery">Доставка и оплата</a>
                                        </li>
                                        <li>
                                            <a onMouseOver={moveHighlight} href="">Возврат</a>
                                        </li>
                                        <li>
                                            <a onMouseOver={moveHighlight} href="">Контакты</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                        <button className='toplastbtn'>Прайс-лист <IoMdDownload /></button>
                    </div>


                    <div className="navBottom">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <img src={logo} alt="" />
                                    <button onClick={() => setCatalog(!catalog) && alert("salom")}>Каталог {catalog ? <RxCross1 /> : <RxDashboard />}</button>
                                    <form action="">
                                        <input className='mainLogo' type="text" placeholder='Поиск...' required />
                                        <div className="back">
                                            <FaSearch className='search' />
                                        </div>
                                    </form>
                                    <div className="info">
                                        <div>
                                            <h4>+7 (777) 490-00-91</h4>
                                            <h5>время работы: 9:00-20:00</h5>
                                            <a href="">Заказать звонок</a>
                                        </div>
                                        <img src={user} alt="" />
                                    </div>
                                    <button>Прайс-лист <IoMdDownload /></button>
                                    <div className="shop">
                                        <LiaShoppingCartSolid />
                                        <h4><span>Корзина</span> <br /> ₸</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            )}
            {catalog && (
                <div className="catalogBtn">
                    <button>Бытовая химия</button>
                    <button>Косметика и гигиена</button>
                    <button>Товары для дома</button>
                    <button>Товары для детей и мам</button>
                    <button>Посуда</button>
                </div>
            )}
        </>
    )
}
