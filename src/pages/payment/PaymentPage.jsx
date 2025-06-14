import React from 'react'
import './Payment.css'
import Card from './CreditCard'
import Bag from '../ShoppingBag/Bag'

function PaymentPage() {
  return (
    <div className='payment'>

      {/* <div className='payment-navigate'>
        <a href="">

          Главная
        </a>
        <a href="">

          Корзина
        </a>
        <a href="">

          Оформление заказа
        </a>
      </div>
      <h1 className='banner-text'>
        Оформление заказа
      </h1>
      <div className="payment-conteiner">
        <div className="first-line">

          <div className="first-line-title">
            <div className="h1-background">
              <h1>

                1
              </h1>
            </div>
            <h2>Контактные данные</h2>
          </div>

          <label>
            Имя*
          </label>
          <input
            type="text"
            value={'Введите ваше имя'}
          />

          <label>
            Телефон*
          </label>
          <input
            type="text"
            value={'Введите ваш телефон'}
          />

          <label>
            E-mail*
          </label>
          <input
            type="text"
            value={'Введите ваш E-mail'}
          />

          <label>
            Название организации
          </label>
          <input
            type="text"
            value={'Введите название организации'}
          />

          <label>
            Имя*
          </label>
          <input
            type="text"
            value={'Введите ваше имя'}
          />


          <div className="first-line-title">
            <div className="h1-background">
              <h1>

                2
              </h1>
            </div>
            <h2>
              адрес доставки
            </h2>
          </div>





          <label>
          Город
          </label>
          <input
            type="text"
            value={'Выберите ваш город'}
          />
          <label>
          Адрес
          </label>
          <input
            type="text"
            value={'Введите адрес доставки'}
          />

<button className='payment-btn'>
Подтверждение заказа
</button>




        </div>
      </div> */}

      <div className="left">
        <Bag />
      </div>    
      <div className="right">
       
        <Card />
        <button>Потвердить</button>
      </div>

    </div>
  )
}

export default PaymentPage
