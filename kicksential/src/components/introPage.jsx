import React, {useState} from "react";
import Jordan1 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/Jordan1poster.webp";
import Jordan4 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/jordan4.jpeg";
import Yeezy from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/yeezy.png";
import Dunk from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/nikedunks.jpeg";
import Adidas from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/adidas.jpeg";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
const Intro = () => {
    
    const slides = [
        {
            url: Jordan1
        },
        {
            url: Jordan4
        },
        {
            url: Yeezy
        },
        {
            url: Dunk
        },
        {
            url: Adidas
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
            <nav className="flex justify-between">
                <h1 className="text-black text-4xl font-bold m-3 p-2">KICKSENTIAL.</h1>
                <button className="bg-gray-500 text-black rounded m-3 p-2">Login/signup</button>
            </nav>

            <div className="flex w-full group">
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 realtive'>
                    <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
                    {/* left arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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