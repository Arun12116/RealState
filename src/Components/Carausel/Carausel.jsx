import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import data from "../Utiles/Slider.json"
import { SliderSetting } from '../Utiles/Common';
import './Carasuel.css'

const Carausel = () => {
   

    return (
        <>
            <div className='residenciesconatiner'>
                <div className='residencyparts'>
                    <div className='upperpart'>
                        <span className='bestplaces'>Best Choices</span>
                        <span className='popularResidencies'>Popular Residencies</span>
                    </div>

                    <Swiper {...SliderSetting}>
                        <SliderButtons />
                        {
                            data.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className='residencyCard'>
                                        <img src={card.image} alt="home" />
                                        <span className='dollerandprice'>
                                            <span style={{ color: "orange", fontSize: "1.3rem" }}>$</span>
                                            <span className='cardprice'>{card.price}</span>
                                        </span>
                                        <span className='cardname'>{card.name}</span>
                                        <span className='carddetail'>{card.detail}</span>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='sliderpart'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Carausel;

const SliderButtons = () => {
    const swiper = useSwiper()
    return <>
        <div className='sliderbuttons'>
            <button className="btn"  onClick={() => swiper.slidePrev()}>-</button>
            <button className="btn" onClick={() => swiper.slideNext()}>+</button>
        </div>
    </>
}
