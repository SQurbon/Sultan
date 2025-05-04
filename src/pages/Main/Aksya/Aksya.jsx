import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Aksya.css'
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
export default function Aksya() {
  return (
    <section className='swipersection'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h4>*Акция действует до 04/09/22</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h1>Название Акции</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Условия акции в пару строк, Условия акции <br />
            в пару строк, Условия акции в пару строк
            </p>
          </div>
          <button>ПРИНЯТЬ УЧАСТИЕ</button>
        </SwiperSlide>
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            <h4>*Акция действует до 04/09/22</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h1>Название Акции</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Условия акции в пару строк, Условия акции <br />
            в пару строк, Условия акции в пару строк
            </p>
          </div>
          <button>ПРИНЯТЬ УЧАСТИЕ</button>
        </SwiperSlide>
        <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
            <h4>*Акция действует до 04/09/22</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h1>Название Акции</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Условия акции в пару строк, Условия акции <br />
            в пару строк, Условия акции в пару строк
            </p>
          </div>
          <button>ПРИНЯТЬ УЧАСТИЕ</button>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
