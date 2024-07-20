import React, {useState} from 'react';
import Hamburger from '../assets/menu-scale.png'

const Header = () => {
    const [toggle,setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }
    return (
        <>
        <div className="hidden xl:flex py-6 px-20 w-full justify-between items-center h-24">
            <div className="w-1/2 h-full flex items-center font-roboto font-bold text-header text-headerColor">
                <h1>
                    Collers
                </h1>

            </div>
            <div className="flex h-full w-headerList justify-between font-medium text-headerColor text-base">
                <button className="p-2">Products </button>
                <button className="p-2">Solutions</button>
                <button className="p-2">Pricing</button>
                <button className="p-2">Resources</button>
                <button className="p-2">Log in</button>
                <button className="h-12 w-headerButton border-2 border-headerColor  rounded-lg flex p-0 bor justify-center">
                    <p className="p-2">Sign up now</p>

                </button>

            </div>

        </div>
            <div className="flex  z-50 w-full xl:hidden p-4 justify-between items-center">
                <div className=" w-1/2 h-full flex items-center font-roboto font-bold text-header text-headerColor">
                    <h1>
                        Collers
                    </h1>

                </div>
                <div className=" h-full items-end flex flex-col ">

                <button className="" onClick={handleToggle}>
                    <img src={Hamburger} className="w-6 h-6" alt=""/>

                </button>
                    <div className={`${!toggle ? 'hidden' : ''} absolute w-2/3 min-h-48 h-1/2 z-50 rounded-xl bottom-0 top-12 border-2 border-headerColor mt-4 bg-[#FEFBEB]`}>
                        <div className="flex flex-col text-xl font-medium font-roboto justify-between gap-y-6">
                            <button className="p-2">Products</button>
                            <button className="p-2">Solutions</button>
                            <button className="p-2">Pricing</button>
                            <button className="p-2">Resources</button>
                            <button className="p-2">Log in</button>
                            <button
                                className="h-12 w-headerButton mx-auto border-2 border-headerColor text-headerColor  rounded-lg flex p-0 bor justify-center">
                                <p className="p-2">Sign up now</p>

                            </button>


                        </div>


                    </div>
                </div>


            </div>
        </>

    );
};

export default Header;