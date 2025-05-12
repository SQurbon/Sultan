import React from 'react'
// import of css
import './Footer.css'

// image import is starting
import footerlogo from '../../assets/images/3.1 Лого Султан RGB (1).svg'
import { IoMdDownload } from 'react-icons/io'


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <img src={footerlogo} alt="" />
                        <p className="text">
                            Компания «Султан» — снабжаем <br /> розничные магазины товарами <br />
                            "под ключ" в Кокчетаве и Акмолинской <br /> области
                        </p>
                        <p className="bottom">
                            Подпишись на скидки и акции
                        </p>

                    </div>
                    <div className="col-auto">
                        <h3>Меню сайта:</h3>
                        <ul>
                            <li><a href="">О компании</a></li>
                            <li><a href="">Доставка и оплата</a></li>
                            <li><a href="">Возврат</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <h3>Категории:</h3>
                        <ul>
                            <li><a href="">Бытовая химия</a></li>
                            <li><a href="">Косметика и гигиена</a></li>
                            <li><a href="">Товары для дома</a></li>
                            <li><a href="">Товары для детей и мам</a></li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <h3>Скачать прайс-лист:</h3>
                        <button>Прайс-лист <IoMdDownload /></button>
                        <a href="">Связь в мессенджерах:</a>
                    </div>
                    <div className="col-auto">
                        <h3>Контакты:</h3>
                        <ul>
                            <li><a href="">время работы: 9:00-20:00</a></li>
                            <li><a href="">Заказать звонок</a></li>
                            <li><a href="">opt.sultan@mail.ru
                                На связи в любое время</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
