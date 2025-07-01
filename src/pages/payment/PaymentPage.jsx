import React from 'react'
import './Payment.css'
import Card from './CreditCard'
import Bag from '../ShoppingBag/Bag'

function PaymentPage() {
  return (
    <div className='payment'>

 
      <div className="left">
        <Bag />
      </div>    
      <div className="right">
       
        <Card />
          <a href="/selectdelivery">
        <button className='payment-btn'>

          Потвердить
          
          </button>
          </a>
      </div>

    </div>
  )
}

export default PaymentPage
