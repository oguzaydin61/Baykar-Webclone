import React from 'react';
import deco from '../assets/Deco-video.png'
import check from '../assets/check.png'
import player from '../assets/player.png'
const SaleOut = () => {
    return (
        <div className="w-full py-6 xl:px-20 px-4 xl:h-screen h-full  mx-auto xl:flex items-center justify-center">


            <div className="xl:flex items-center justify-center shadow-2xl rounded-3xl bg-white w-full xl:h-2/3">
                <div className="xl:flex xl:flex-col px-4  xl:items-start items-center   justify-center h-full xl:px-20 xl:w-1/2 w-full xl:py-20">
                    <h1 className="xl:text-6xl text-3xl font-roboto xl:text-left text-center  font-extrabold">Why join us</h1>
                    <div className="pt-4 gap-y-1 flex gap-x-2 items-center  font-roboto text-base xl:text-xl font-normal">
                        <img src={check} className="h-6 w-6" alt=""/>
                        <p>Est et in pharetra magna adipiscing ornare aliquam.</p>

                    </div>
                    <div className="pt-4 gap-y-2 flex gap-x-2 items-center  font-roboto text-base xl:text-xl font-normal">
                        <img src={check} className="h-6 w-6" alt=""/>
                        <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>

                    </div>
                    <div className="pt-4 gap-y-2 flex gap-x-2 items-center  font-roboto text-base xl:text-xl font-normal">
                        <img src={check} className="h-6 w-6" alt=""/>
                        <p>Ullamcorper ornare in et egestas dolor orci.</p>

                    </div>
                    <div className="py-6">

                    <button className="text-[#78350F] font-medium text-xl xl:hidden w-[11.188rem] mx-auto flex items-center justify-center border-2 border-headerColor rounded-xl h-14 ">
                        Sign up now


                    </button>
                    </div>



                </div>
                <div>
                    <div className="flex flex-col items-start  justify-start h-full  w-full ">

                        <img src={player} className="hover:scale-105 transition-all w-full h-full object-contain" alt=""/>



                    </div>


                </div>

                {/*<div className="h-full w-full">*/}
                {/*    <div className="relative w-full h-full">*/}
                {/*        <div className="absolute -top-5 right-48 rounded-full bg-[#0369A1] opacity-75 w-16 h-16">*/}

                {/*        </div>*/}
                {/*        <div className="absolute w-52 h-52 rounded-3xl bg-[#BE185D] -bottom-5 -right-5 opacity-75"></div>*/}
                {/*        <div className="absolute w-20 h-20 rounded-full bg-[#15803D] top-2/3 left-1/4"></div>*/}
                {/*        <div className="absolute w-[60rem] h-[13.621rem] -rotate-45  -translate-x-2/5 top-20 translate-y-1/2  bg-black "></div>*/}


                {/*    </div>*/}

                {/*</div>*/}

            </div>

        </div>
    );
};

export default SaleOut;