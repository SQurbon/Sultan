import React from 'react'
import './Payment.css'
import Card from './CreditCard'
import Bag from '../ShoppingBag/Bag'
import { useCart } from '../Shop/CardContext';

function PaymentPage() {
  const { cartItems } = useCart();

  console.log(cartItems);


  const sendToBot = () => {
    cartItems.forEach((item) => {
      console.log("Mahsulot:", item); // 💡 Hamma fieldni tekshirish uchun

      fetch("http://localhost:5000/send-to-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: item.title || item.h1 || "Nomaʼlum mahsulot",  // fallback
          price: item.price || 0,
          image: item.image || item.img || "",   // 💡 fallback bilan
        }),
      });
    });
  };

  return (
    <div className='payment'>

      <div className="left">
        <Bag />
      </div>
      <div className="right">

        <Card />
        <a href="/selectdelivery">
          <button className='payment-btn' onClick={sendToBot}>

            Потвердить

          </button>
        </a>
      </div>

    </div>
  )
}

export default PaymentPage
