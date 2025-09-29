import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay} from 'swiper/modules'
import Header from "./header"
import '../less/main.less'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRigth.svg'
import { useRef } from 'react'


export default function Main(){
    const swiperRef = useRef(null);

    return(
        <>
            <main className="first">
                <Header/>
                <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true} className='mainSwiper' onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    
                    }}>
                    <div className="arrows">
                        <nav onClick={()=> swiperRef.current.slidePrev()}>
                        <img src={arrowLeft}  />
                        </nav>
                        <nav onClick={()=> swiperRef.current.slideNext()}>
                            <img src={arrowRight}  />
                        </nav>
                    </div>
                    <SwiperSlide>
                        <div className="slide slide1">
                            <h2>Наглядное<br /> обучающее<br /> <span>3D</span> пособие</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide2">
                            <h2>Наглядное<br /> обучающее<br /> <span>3D</span> пособие</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide3">
                            <h2>Наглядное<br /> обучающее<br /> <span>3D</span> пособие</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}