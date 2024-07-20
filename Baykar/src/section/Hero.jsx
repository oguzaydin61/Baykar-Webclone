import React from 'react';
import heroShoe from '../assets/heroShoe.png'
import PlayerIcon from '../assets/PlayerIcon.png'
import tv from '../assets/tv.png';
import trophy from '../assets/trophy.png';
import tunnel from '../assets/tunnel.png'
import recBlue from '../assets/recBlue.png'


const Hero = () => {
    return (
        <div className="relative flex flex-col justify-center xl:pt-0 pt-20 items-center">

        <div className="z-10 xl:flex py-6 min-h-[36.438rem] h-full xl:h-screen px-2 xl:px-20 w-full items-center justify-between">
            <div className="flex flex-col min-h-[16rem] gap-y-8">
                <h1 className="font-roboto  font-extrabold text-5xl xl:text-7xl text-center xl:text-start text-[#0F172A]">
                    Collectible Sneakers
                </h1>
                <p className="text-lg font-normal text-center xl:text-start font-roboto text-[#0F172A]">
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                </p>
                <div className="w-full flex py-4 xl:py-0 justify-start items-center">
                    <button
                        className="h-14 w-44 border-2 rounded-lg border-headerColor flex items-center justify-center ">
                        <p className="text-xl font-roboto text-headerColor">
                            Sign up now
                        </p>

                    </button>
                    <button
                        className="h-14 w-44 rounded-lg  flex items-center gap-x-2 justify-center ">
                        <img src={PlayerIcon} className="w-6 h-6" alt=""/>
                        <p className="text-base font-medium font-roboto text-headerColor">
                            Watch Demo
                        </p>

                    </button>

                </div>

            </div>
            <div className="max-w-heroRight xl:h-heroRight items-center justify-center flex xl:w-heroRight">
                <div className="bg-[#FBBF24] h-[88%] w-[75%] rounded-[3.125rem]">
                    <img src={heroShoe} className="scale-125" alt=""/>

                </div>
                <div className="-z-10 triangle">

                </div>

            </div>


        </div>
            <div className="xl:flex xl:min-h-[22rem] py-6 xl:px-20 px-4 w-full z-10 items-center gap-x-32  justify-between">
                <div className="flex flex-col justify-start gap-y-4  items-center xl:items-start">



                    <img src={trophy} className="w-16 h-16" alt=""/>


                    <h1 className="text-xl  font-medium font-roboto">
                        Nibh viverra
                    </h1>
                    <p className="text-lg text-center xl:text-left font-normal font-roboto">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo,
                        massa.
                    </p>

                </div>
                <div className="flex flex-col justify-start gap-y-4 items-center xl:items-start">
                    <img src={tunnel}className="w-16 h-16" alt=""/>
                    <h1 className="text-xl  font-medium font-roboto">
                        Cursus amet
                    </h1>
                    <p className="text-lg text-center xl:text-left font-normal font-roboto">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </p>

                </div>
                <div className="flex flex-col justify-start gap-y-4 items-center xl:items-start">
                    <img src={tv} className="w-16 h-16" alt=""/>
                    <h1 className="text-xl  font-medium font-roboto">
                        Ipsum fermentum
                    </h1>
                    <p className="text-lg text-center xl:text-left font-normal font-roboto">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </p>

                </div>


            </div>
        </div>

    );
};

export default Hero;