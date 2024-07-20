import React, {useState} from 'react';
import Waves from '../assets/Waves.png'
import search from '../assets/Vector.png'
import secure from '../assets/Vector-1.png';
import rocket from '../assets/rocket.png'
import tv from '../assets/screen.png'
import settings from '../assets/settings-alt.png'
import  podcast from '../assets/podcast.png';
import arrow from '../assets/arrow-right.png'
import desktopShoe from '../assets/DesktopShoe.png'
import desktopSport from '../assets/DesktopSport.png'
import frameShoe from '../assets/FrameShoe.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from 'swiper/modules';



const Collection = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div className=" w-full h-full xl:min-h-screen pt-16">
            <div className="flex xl:py-20 xl:px-20 flex-col gap-y-12 w-full">
                <h1 className="text-3xl text-center xl:text-left xl:text-6xl font-roboto font-extrabold">Grow your collection</h1>
                <p className="text-base font-roboto font-normal text-center xl:text-left px-4 xl:text-lg">Enim neque massa porta adipiscing elit. Sem libero id
                    faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam
                    tellus.</p>
            </div>
            <div className="hidden xl:block w-full h-[42.75rem] relative bg-[#fffcee]">
                <div className="xl:absolute xl:w-full xl:h-full  z-0">
                    <img src={Waves} className="w-full h-full object-fill" alt=""/>
                </div>
                <div className="relative h-full  w-full z-10">
                    <div className="px-4 xl:px-20  xl:flex items-start justify-start gap-x-72">
                        <div className="flex flex-col gap-y-1 h-full items-center justify-start ">
                            <button onClick={() => handleClick(1)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 1 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={search} className="h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Bibendum tellus</h1>
                                {activeButton === 1 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>
                            <button onClick={() => handleClick(2)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 2 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={secure} className="object-contain h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Cras eget</h1>
                                {activeButton === 2 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>
                            <button onClick={() => handleClick(3)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 3 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={rocket} className="h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Dolor pharetra</h1>
                                {activeButton === 3 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>
                            <button onClick={() => handleClick(4)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 4 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={tv} className="h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Amet, fringilla</h1>
                                {activeButton === 4 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>
                            <button onClick={() => handleClick(5)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 5 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={podcast} className="h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Amet nibh</h1>
                                {activeButton === 5 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>
                            <button onClick={() => handleClick(6)}
                                    className={`w-72 h-14 rounded-xl ${activeButton === 6 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                                <img src={settings} className="h-6 w-6" alt=""/>
                                <h1 className="text-xl font-roboto font-medium">Sed velit</h1>
                                {activeButton === 6 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                            </button>


                        </div>
                        <div className=" w-full xl:w-[65%] xl:h-[34.75rem] xl:mt-0 mt-20 pt-44 h-auto  p-0 m-0 relative">
                            <div className="absolute top-0 left-0 xl:w-[47.438rem] w-[18.438rem] h-[12.625rem] xl:h-[28.188rem]  ">
                                <img src={desktopSport} className="w-full h-full object-fill" alt=""/>


                            </div>
                            <div
                                className="absolute left-1/2 bottom-0 xl:w-[47.438rem] w-[18.438rem] h-[12.625rem] xl:h-[28.188rem]  transform -translate-x-1/2">
                                <img src={desktopShoe} className="w-full h-full object-fill" alt=""/>
                                <div className="absolute xl:h-72 xl:w-64 w-[5.875rem] h-[6.563rem] top-1/2 -right-0 transform -translate-y-1/2 translate-x-1/2 ">
                                    <img src={frameShoe} className="w-full h-full object-cover" alt=""/>


                                </div>

                        </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className="block xl:hidden bottom-0">

            <div className="px-4 w-full min-h-16 h-full  flex items-center justify-center">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={240}

                    scrollbar={{
                        hide: true,
                    }}

                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <button onClick={() => handleClick(1)}
                                         className={`w-72 h-14 rounded-xl ${activeButton === 1 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                        <img src={search} className="h-6 w-6" alt=""/>
                        <h1 className="text-xl font-roboto font-medium">Bibendum tellus</h1>
                        {activeButton === 1 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                    </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => handleClick(2)}
                                className={`w-72 h-14 rounded-xl ${activeButton === 2 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                            <img src={secure} className="object-contain h-6 w-6" alt=""/>
                            <h1 className="text-xl font-roboto font-medium">Cras eget</h1>
                            {activeButton === 2 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                        </button>
                    </SwiperSlide> <SwiperSlide>
                    <button onClick={() => handleClick(3)}
                            className={`w-72 h-14 rounded-xl ${activeButton === 3 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                        <img src={rocket} className="h-6 w-6" alt=""/>
                        <h1 className="text-xl font-roboto font-medium">Dolor pharetra</h1>
                        {activeButton === 3 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                    </button>
                </SwiperSlide> <SwiperSlide>
                    <button onClick={() => handleClick(4)}
                            className={`w-72 h-14 rounded-xl ${activeButton === 4 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                        <img src={tv} className="h-6 w-6" alt=""/>
                        <h1 className="text-xl font-roboto font-medium">Amet, fringilla</h1>
                        {activeButton === 4 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                    </button>
                </SwiperSlide> <SwiperSlide>
                    <button onClick={() => handleClick(5)}
                            className={`w-72 h-14 rounded-xl ${activeButton === 5 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                        <img src={podcast} className="h-6 w-6" alt=""/>
                        <h1 className="text-xl font-roboto font-medium">Amet nibh</h1>
                        {activeButton === 5 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                    </button>
                </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => handleClick(6)}
                                className={`w-60 h-14 rounded-xl ${activeButton === 6 ? 'border shadow-md' : ''}  flex items-center justify-start gap-x-6 px-5 py-4   transition-all" `}>
                            <img src={settings} className="h-6 w-6" alt=""/>
                            <h1 className="text-xl font-roboto font-medium">Sed velit</h1>
                            {activeButton === 6 ? <img src={arrow} className="w-6 h-6" alt=""/> : null}


                        </button>
                    </SwiperSlide>


                </Swiper>


            </div>
                <div className="flex items-center pt-20 justify-center relative">
                    <div className="xl:absolute xl:w-full xl:h-full  z-0">
                        <img src={Waves} className="w-full h-full object-fill" alt=""/>
                        <div className="absolute top-0 left-0 xl:w-[47.438rem] w-[18.438rem] h-[12.625rem] xl:h-[28.188rem]  ">
                            <img src={desktopSport} className="w-full h-full object-fill" alt=""/>


                        </div>
                        <div
                            className="absolute left-1/2 bottom-0 xl:w-[47.438rem] w-[18.438rem] h-[12.625rem] xl:h-[28.188rem]  transform -translate-x-1/2">
                            <img src={desktopShoe} className="w-full h-full object-fill" alt=""/>
                            <div className="absolute xl:h-72 xl:w-64 w-[5.875rem] h-[6.563rem] top-1/2 -right-0 transform -translate-y-1/2 translate-x-1/2 ">
                                <img src={frameShoe} className="w-full h-full object-cover" alt=""/>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Collection;