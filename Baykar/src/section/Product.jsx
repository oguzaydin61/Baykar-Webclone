import React from 'react';
import ProductComponent from "../components/ProductComponent.jsx";

const Product = () => {
    return (
        <div className="bg-[#0F172A] xl:flex flex-col  min-h-[48.5rem] h-full  w-full xl:px-20 px-4 relative">



                <div className="hidden xl:block xl:absolute w-72 h-72 bottom-16 left-3 rounded-[3.125rem] bg-[#BE185D] opacity-75"></div>
                <div className="hidden xl:block xl:absolute w-40 h-40 top-1/3 left-1/3 rounded-[3.125rem] bg-[#0369A1] opacity-75"></div>
                <div  className="hidden xl:block xl:absolute w-32 h-32 bottom-32 right-1/3 rounded-[3.125rem] bg-[#B45309] opacity-75"></div>
                <div className="hidden xl:block xl:absolute w-36 h-36 bottom-16 right-48 rounded-[3.125rem] bg-[#A21CAF] opacity-75"></div>
                <div className="hidden xl:block xl:absolute w-60 h-60 top-1/3 right-5 rounded-[3.125rem] bg-[#15803D] opacity-75"></div>


            <div>

            </div>

            <div className="xl:flex w-full justify-between h-full items-start py-16">
                <h1 className="text-center xl:text-left text-3xl xl:text-[3.5rem] text-white font-roboto font-extrabold">
                    The best of the best
                </h1>
                <button className="xl:mt-0 mt-2 text-white text-2xl font-roboto border-2 rounded-lg border-white h-16 w-60 flex xl:mx-0 mx-auto items-center justify-center">

                    Sign up now
                </button>

            </div>
            <div className="xl:flex z-10 items-center justify-center gap-x-16 p-3 mb-2  xl:h-[29.5rem] h-full w-full">
                <ProductComponent title={"Title"} img={"https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nqrrF1H0hktIWDiQwKbY7QFxmryvGKmS1I6Bzf8PES~bBzAk2K2FK03jXNzSVEfcD0gvaO~mBmmdGZEfmrah2Uu2amwOF1MOS~d2FZjxe8zKV75PTvFpwL9SHkBPXWzcSU5Ub39mNbtlXJXDhp3SSpY~XfSnooqQrctOOoSndDZoBzmPtPkO6Kn5DwHJZqIMNAACceWwG3kuJYnJ5KLXXsp7m5SzpJKpYpyDhHZkq3qrylpYckN8Sz3B6ZPw9AouEp6CSnYhT5-UhR2IPiGQxiwaXB4mFPP9WLxfz3HX-jJDAxLjrC8~~TVERk2q7VOz8t60QcvuYZ8pZwVJrxQKMQ__"} desc={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />
                <ProductComponent title={"Title"} img={"https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HNTdneinE2wWJ49A7fnfxTIkjQfhBsRHjH2xIZ6diXvLq51opgK6JgJihbhq-EV78T93CBC5jUVc~hHa0Q-HvfkOaCRIsFMSoHrkFaSgrK8Q5rLJIpUmOa~IPwLTXv9g8rbtqqbqsdVbgRPtf5NRFqProa546qzeGTgMlH8vmg-mqHtM5lqOgu3FT5mJb2jN7s8h8ApEAZbILRr0m6Olt-kCmUP49nTlaeVB-AXIS4rr8ZSRzNzDFJFvWbfGJRQQgCV61AQafaMqKwkw3QtLt6FUdeupOV2cIIQya402hipXNoi-XO2-sy2UzXJ6jxgd52opGQBD7ZyaGc0nVBnruw__"} desc={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />
                <ProductComponent title={"Title"} img={"https://s3-alpha-sig.figma.com/img/c5b9/139c/f57074dcff92be506ebd3ca26296b822?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKyuUQ73y-d6Nt~V0spdefxTDZU0SU5pr78ZdremIpJn0v~S3azljByfy5hjnGI4~rjEOamAFKEfYPEnTM1Re~vnlDxWd6HdhQmxBS-AuvKj7yKFgwM-EmFMWz4eJqfZBwes1FPBuYMgBvwa1eb2pQjd873EnPw8nz6PNs4eMbBiHt2TUp2z4lQz-BnTOqPkW2MWCl-9b6jK2btaE4IrvNr5~S2lMzuGBvV8~MKDGsGPN2PnG-~FTpRwHYBuIb0ZOu7kb1Y6K1a7IaxEQ27y1TD37LK~Ye7cIa6L6obEfLTaWeFFHq0z9-5KBd0LBC1mpgCOmgenlbCBS6wxuOsKxA__"} desc={"Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."} />



            </div>


        </div>
    );
};

export default Product;