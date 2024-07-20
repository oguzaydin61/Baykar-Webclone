import React from 'react';
import shopCart from '../assets/shopping-cart.png';

const ProductComponent = ({ img, title, desc }) => {
    return (
        <div className="flex flex-col items-start xl:m-0 mt-4 mx-auto shadow-sm shadow-white bg-[#0F172A] justify-between rounded-xl w-full xl:h-full h-[29rem]">
            <div className="w-full h-1/2">
                <img src={img} className="rounded-t-xl w-full h-full object-cover" alt={title} />
            </div>
            <div className="px-10 flex flex-col gap-y-4 w-full">
                <h1 className="text-white font-roboto font-medium text-2xl">
                    {title}
                </h1>
                <p className="text-lg text-white font-roboto">
                    {desc}
                </p>
            </div>
            <div className="w-full px-10 py-2">
                <button className="border-2 h-16 border-white rounded-lg w-full flex justify-center items-center gap-x-4">
                    <img src={shopCart} className="h-6 w-6" alt="Shopping Cart" />
                    <h1 className="text-white text-xl font-roboto font-medium">
                        Shop Now
                    </h1>
                </button>
            </div>
        </div>
    );
};

export default ProductComponent;
