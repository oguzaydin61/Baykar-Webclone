import React from 'react';

const TestimonialCard = ({company, logo,text, profile,name,job}) => {
    return (
        <div className="p-4 w-full h-full rounded-3xl flex flex-col justify-around  px-8 items-start">
            <div className="flex items-center justify-start gap-x-2">
                <img src={logo} className="h-12 text-[#475569]" alt=""/>
                <h1 className="text-2xl font-roboto text-[#475569]"> {company}</h1>

            </div>
            <div>
                <p className="text-2xl">{text}</p>
            </div>

            <div className="flex items-center justify-start gap-x-2 ">
                <img src={profile} className="w-16 h-16 rounded-full" alt=""/>
                <div className="flex flex-col items-start justify-center gap-x-2 gap-y-0.5">
                    <h1 className="text-lg">
                        {name}
                    </h1>
                    <h1 className="text-sm text-gray-400">
                        {job}
                    </h1>

                </div>

            </div>

            
        </div>
    );
};

export default TestimonialCard;