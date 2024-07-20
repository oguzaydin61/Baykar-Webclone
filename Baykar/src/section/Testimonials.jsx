
import sliderButton from '../assets/ButtonSlider.png';
import TestimonialCard from "../components/TestimonialCard.jsx";
import React, { useRef, useState, useCallback } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination,Navigation } from 'swiper/modules';
import zoomer from '../assets/zoomerLogo.png'
import artVenue from '../assets/artVenueLogo.png'
import shells from '../assets/shellsLogo.png'


const Testimonials = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="w-full xl:h-[45.75rem] relative">
            <div className="px-20 py-6 xl:flex justify-between items-center">
                <h1 className="font-extrabold  text-3xl xl:text-6xl">
                    Because they love us
                </h1>
                <div className="hidden xl:flex  items-center justify-center gap-x-8">
                    <button onClick={handlePrev}>
                        <img src={sliderButton} className="h-12 w-12" alt="" />
                    </button>
                    <button onClick={handleNext} className="rotate-180">
                        <img src={sliderButton} className="h-12 w-12" alt="" />
                    </button>
                </div>
            </div>
            <div className="relative w-full h-[26.313rem]">
                <div className="absolute inset-0 bg-[#FDE68A] xl:mx-20 h-full">
                </div>
                <div className="absolute inset-0 w-full h-full">
                    <div className="w-full  xl:h-[26.313rem] flex items-center justify-center">
                        <Swiper ref={sliderRef}
                            slidesPerView={1}
                            spaceBetween={10}
                                breakpoints={
                            {
                                960: {
                                    slidesPerView: 5,
                                    spaceBetween: 150,
                                },
                            }

                                }
                            freeMode={true}




                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination,Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                    <TestimonialCard logo={zoomer}
                                    job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                    <TestimonialCard logo={shells}
                                                     job={"Co-founder"} company={"SHELLS"}name={"Hellena John"}profile={"https://picsum.photos/200"}text={"Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."}/>


                                </div>
                            </SwiperSlide>                            <SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={artVenue}
                                                 job={"Manager"} company={"ArtVenue"}name={"David Oshodi"}profile={"https://picsum.photos/200"}text={"A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."}/>


                            </div>
                        </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                    <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                     job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                                </div>
                            </SwiperSlide>                            <SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                 job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                            </div>
                        </SwiperSlide>                            <SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                 job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                            </div>
                        </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                    <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                     job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                                </div>
                            </SwiperSlide><SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                 job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                 job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className="w-[24rem] h-[18.5rem] xl:h-[26.875rem] mt-24 bg-white  rounded-3xl">
                                <TestimonialCard logo={"https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1721154972~exp=1721158572~hmac=5a8cf470c67dc49531a01592c2564c4649c4c36194e8e75eafe8f66cbeb8edbe&w=826"}
                                                 job={"Team Leader"} company={"Zoomerr"}name={"Hellen Jummy"}profile={"https://picsum.photos/200"}text={"Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."}/>


                            </div>
                        </SwiperSlide>


                        </Swiper>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
