import React, { useState } from 'react';
import worldMap from '../assets/WorldMap.png';
import toolTipShoe from '../assets/tooltipShoe.png';

const Map = () => {
    const [tooltipState, setTooltipState] = useState({
        showTooltip1: false,
        showTooltip2: false,
        showTooltip3: false,
    });

    return (
        <div className="overflow-x-hidden w-full h-full min-h-screen flex items-center justify-center bg-[#78350F]">
            <div className="xl:w-3/4 xl:h-3/4 w-full h-full mx-auto xl:px-20 py-4 px-4 relative">
                <img src={worldMap} className="mx-auto object-cover" alt="" />
                <div className="top-0 absolute left-0 flex flex-col font-extrabold items-center justify-center w-full h-full">
                    <h1 className="text-white text-5xl xl:text-8xl font-roboto">11,658,467</h1>
                    <p className="text-white text-3xl xl:text-5xl font-roboto">Shoes Collected</p>
                </div>


                <div
                    onMouseEnter={() => setTooltipState({ ...tooltipState, showTooltip1: true })}
                    onMouseLeave={() => setTooltipState({ ...tooltipState, showTooltip1: false })}
                    className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full border-2 border-[#A3E635] hover:bg-[#D9F99D] transition-all">
                    {tooltipState.showTooltip1 && (
                        <div className="absolute bg-white p-4 shadow-lg rounded-lg xl:w-64 w-32 -left-1/2 transform -translate-x-1/2 top-full mt-2">
                            <div className="flex flex-col items-center">
                                <img src={toolTipShoe} className="w-full h-auto object-cover" />
                                <div className="bg-[#E2E8F0] w-full">
                                    <p className="text-sm text-[#0F172A] font-roboto">John Doe collected two pairs of Running Shoes.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    onMouseEnter={() => setTooltipState({ ...tooltipState, showTooltip2: true })}
                    onMouseLeave={() => setTooltipState({ ...tooltipState, showTooltip2: false })}
                    className="absolute top-1/4 left-3/4 w-6 h-6 rounded-full border-2 border-[#A3E635] hover:bg-[#D9F99D] transition-all">
                    {tooltipState.showTooltip2 && (
                        <div className="absolute bg-white p-4 shadow-lg rounded-lg xl:w-64 w-32 -left-1/2 transform -translate-x-1/2 top-full mt-2">
                            <div className="flex flex-col items-center">
                                <img src={toolTipShoe} className="w-full h-auto object-cover" />
                                <div className="bg-[#E2E8F0] w-full">
                                    <p className="text-sm text-[#0F172A] font-roboto">Emma Simpson collected one pair of Cool Shoes.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div
                    onMouseEnter={() => setTooltipState({ ...tooltipState, showTooltip3: true })}
                    onMouseLeave={() => setTooltipState({ ...tooltipState, showTooltip3: false })}
                    className="absolute bottom-1/2 left-[20%] w-6 h-6 rounded-full border-2 border-[#A3E635] hover:bg-[#D9F99D] transition-all">
                    {tooltipState.showTooltip3 && (
                        <div className="absolute bg-white p-4 shadow-lg rounded-lg xl:w-64 w-32 -left-1/2 transform -translate-x-1/2 top-full mt-2">
                            <div className="flex flex-col items-center">
                                <img src={toolTipShoe} className="w-full h-auto object-cover" />
                                <div className="bg-[#E2E8F0] w-full">
                                    <p className="text-sm text-[#0F172A] font-roboto">Michael Johnson collected three pairs of Sport Shoes.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Map;
