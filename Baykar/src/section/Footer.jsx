import React from 'react';
import GoogleApp from '../assets/GooglePlay.png'
import AppStore from '../assets/AppStore.png'
import face from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import world from '../assets/world.png'

const Footer = () => {
    return (
        <div className="w-full h-full bg-[#0F172A]">

        <div className="w-full h-full  xl:flex items-center text-center mx-auto justify-between xl:px-20 py-4 ">
            <div className="">
                <ul className="flex xl:text-left pb-16 flex-col gap-y-4  text-base">
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Product

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Pricing

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Overview

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Browse

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Accessibility

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Five

                    </button>
                </ul>

            </div>
            <div className="">
                <ul className="flex text-left pb-16 flex-col gap-y-4  text-base">
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Solutions

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Brainstorming

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Ideation

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Wireframing

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Design

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Five

                    </button>
                </ul>

            </div>
            <div className="">
                <ul className="flex text-left pb-16 flex-col gap-y-4  text-base">
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Support

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Contact Us

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Developers

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Documentation

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Integrations

                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Reports

                    </button>
                </ul>

            </div>
            <div className="">
                <ul className="flex text-left flex-col gap-y-4  text-base">
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Get the App

                    </button>
                    <button className="text-left hover:text-white xl:mx-0 mx-auto text-[#E2E8F0]">
                        <img src={AppStore} className="w-32 h-10" alt=""/>

                    </button>
                    <button className="xl:text-left items-center mx-auto xl:mx-0 hover:text-white text-[#E2E8F0]">
                        <img src={GoogleApp} className="w-36 h-10" alt=""/>


                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">


                    </button>
                    <button className="xl:text-left hover:text-white text-[#E2E8F0]">
                        Follow Us

                    </button>
                    <div className="flex items-center  justify-center xl:justify-start gap-x-4 text-left hover:text-white text-[#E2E8F0]">

                        <img src={youtube} className="w-6 h-6 object-cover" alt=""/>
                        <img src={face} className="w-6 h-6 object-cover" alt=""/>
                        <img src={twitter} className="w-6 h-6 object-cover" alt=""/>
                        <img src={insta} className="w-6 h-6 object-cover" alt=""/>
                        <img src={linkedin} className="w-6 h-6 object-cover" alt=""/>

                    </div>
                </ul>

            </div>

        </div>
            <div className="w-full xl:px-20 px-4 py-10 ">
                <hr className="opacity-20"/>
                <div className="w-full h-full pt-5  xl:flex xl:text-left text-center xl:justify-between items-center">
                    <div className="text-base flex-1 font-roboto text-[#E2E8F0]">
                        Collers @ 2023. All rights reserved.

                    </div>
                    <div className="flex gap-x-6 items-center justify-center xl:justify-end">
                        <h1 className="text-base font-roboto text-[#E2E8F0]">
                            Terms

                        </h1>

                        <h1 className="text-base font-roboto text-[#E2E8F0]">
                            Privacy

                        </h1>
                        <h1 className="text-base font-roboto text-[#E2E8F0]">
                            Contact

                        </h1>

                        <div className="flex items-center justify-start gap-x-2 text-base font-roboto text-[#E2E8F0]">
                            <img src={world} className="w-6 h-6" alt=""/>
                            <h1>EN</h1>


                        </div>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default Footer;