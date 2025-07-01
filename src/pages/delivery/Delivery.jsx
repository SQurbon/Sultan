import React, { useEffect, useState } from 'react';
import { BsBoxSeam } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function Delivery() {
  const [intervalValue, setIntervalValue] = useState(0);

  useEffect(() => {
    if (intervalValue < 30000) {
      setTimeout(() => {
        setIntervalValue(intervalValue + 1000);
      }, 1000);
    }
  }, [intervalValue]);

  console.log(intervalValue / 1000);

  return (
    <div className='delivery'>
      <h1 className='icons-h1'>статус заказа</h1>
      <div className="icons">
        <div className="icon-box">
          <BsBoxSeam className={intervalValue >= 10000 ? "yellow-icon" : 'ss1-icon'} />
          <h1 className={intervalValue >= 10000 ? "icon-h1" : 'ss1-h1'}>собирается</h1>
        </div>
        <div className="icon-box">
          <TbTruckDelivery className={intervalValue >= 20000 ? "yellow-icon" : 'ss1-icon'} />
          <h1 className={intervalValue >= 20000 ? "icon-h1" : 'ss1-h1'}>на доставке</h1>
        </div>
        <div className="icon-box">
          <FaCheck className={intervalValue >= 30000 ? "yellow-icon" : 'ss1-icon'} />
          <h1 className={intervalValue >= 30000 ? "icon-h1" : 'ss1-h1'}>доставлено</h1>
        </div>
      </div>

      <div className='ssdd'>
        <div className={intervalValue >= 1000 ? "yellow" : 'ss1'}></div>
        <div className={intervalValue >= 10000 ? "yellow" : 'ss1'}></div>
        <div className={intervalValue >= 20000 ? "yellow" : 'ss1'}></div>
      </div>

      <div className="delivery-footer">
        <ul className='delivery-ul'>
          <li className='delivery-li'>✅ Быстрая и надежная доставка по всей стране — от 1 до 5 рабочих дней.</li>
          <li className='delivery-li'>✅ Гарантия возврата — вы можете вернуть товар в течение 14 дней</li>
          <li className='delivery-li'>✅ Безопасная оплата — мы используем защищённые платёжные</li>
          <li className='delivery-li'>✅ Поддержка 24/7 — мы всегда готовы ответить</li>
          <li className='delivery-li'>✅ Сотни довольных клиентов — нам доверяют по всей стране</li>
        </ul>
        <ul className='delivery-ul'>
          <li className='delivery-li'>🔁 <strong>Гарантия возврата</strong> — возврат товара в течение 14 дней без лишних вопросов.</li>
          <li className='delivery-li'>🛡 <strong>Гарантия подлинности</strong> — продаём только оригинальные и сертифицированные товары.</li>
          <li className='delivery-li'>🚚 <strong>Гарантия доставки</strong> — ваш заказ точно прибудет в срок или мы вернём деньги.</li>
          <li className='delivery-li'>🔒 <strong>Гарантия безопасности</strong> — все ваши данные надёжно защищены.</li>
          <li className='delivery-li'>✅ <strong>Гарантия качества</strong> — каждый товар проходит проверку перед отправкой.</li>
        </ul>
      </div>
    </div>
  );
}

export default Delivery;
