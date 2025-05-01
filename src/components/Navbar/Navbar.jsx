import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
import './Navbar.css'
import logo from '../../assets/images/3.1 Лого Султан RGB.svg'
import user from '../../assets/images/Group 100.svg'
export default function Navbar() {
    return (
        <>
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
                                <ul>
                                    <li>
                                        <a href="">О компании</a>
                                    </li>
                                    <li>
                                        <a href="">Доставка и оплата</a>
                                    </li>
                                    <li>
                                        <a href="">Возврат</a>
                                    </li>
                                    <li>
                                        <a href="">Контакты</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="navBottom">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <img src={logo} alt="" />
                                <button>Каталог <RxDashboard /></button>
                                <form action="">
                                    <input type="text" placeholder='Поиск...' required />
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
                                    <h4><span>Корзина</span> <br />12 478 ₸ </h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
