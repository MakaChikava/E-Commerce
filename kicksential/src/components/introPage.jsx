import React, {useEffect, useState} from "react";
import Jordan1 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/Jordan1poster.webp";
import Jordan4 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/jordan4.jpeg";
import Yeezy from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/yeezy.png";
import Dunk from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/nikedunks.jpeg";
import Adidas from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/adidas.jpeg";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
const Intro = () => {
    
    const slides = [
        {
            url: Jordan4
        },
        {
            url: Adidas
        },
        {
            url: Yeezy
        },
        {
            url: Jordan1
        },
        {
            url: Dunk
        }
    ];
    
    const [currIndex, setCurrIndex] = useState(0);

    const nextSlide = () =>{
        const isLastSlide = currIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex)
    }
    const prevSlide = () =>{
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currIndex - 1;
        setCurrIndex(newIndex)
    };


    return (
        <section className="flex flex-col h-screen">
            <header className="bg-gray-100 fixed top-0 w-full shadow-md">
            <nav className="flex justify-between">
                <h1 className="text-black text-4xl font-bold hover:text-neutral-600 duration-500 m-3 p-2 cursor-pointer">KICKSENTIAL.</h1>
                <div className="flex w-[300px] items-center justify-around">
                <svg 
            aria-label="Like" 
            className="h-[28px] w-[28px] flex" 
            color="rgb(38, 38, 38)" 
            fill="rgb(38, 38, 38)" 
            role="img" 
            viewBox="0 0 24 24">
            <title>favorite</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
        </svg>
        <svg 
        aria-hidden="true" 
        className="h-[30px] w-[30px] flex" 
        focusable="false" 
        viewBox="0 0 24 24" 
        role="img" 
        fill="none">
                    <title>Cart</title>
                    <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                </svg>
                <button className="flex h-2/3 items-center bg-black hover:bg-neutral-600 duration-500 text-white rounded-full m-3 p-2 pl-4 pr-4">Login / signup</button>
                </div>
            </nav>
            </header>
<br/>
<br/>
            <div className="flex w-full group">
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 realtive'>
                    <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
                    {/* left arrow */}
                    <div className="hidden group-hover:block group-hover:duration-500 absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                    </div>
                        {/* right arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30}/>
                    </div> 
                </div>
            </div>

        </section>
    );
}

export default Intro;