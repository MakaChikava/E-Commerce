import React, {useState} from "react";
import Jordan1 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/Jordan1poster.webp";
import Jordan4 from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/jordan4.jpeg";
import Yeezy from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/yeezy.png";
import Dunk from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/nikedunks.jpeg";
import Adidas from "/Users/maka/personal_projects/E-Commerce/kicksential/src/imgs/adidas.jpeg";
const Intro = () => {
    const [slide, setSlide] = useState(0);
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


    return (
        <section className="flex flex-col h-screen">
            <nav className="flex justify-between">
                <h1 className="text-black text-4xl font-bold m-3 p-2">KICKSENTIAL.</h1>
                <button className="bg-gray-500 text-black rounded m-3 p-2">Login/signup</button>
            </nav>

            <div className='flex max-w-[1400px] h-[780px] w-full m-auto py-16 realtive'>
                <div style={{backgroundImage: `url(${slides[3].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            </div>

        </section>
    );
}

export default Intro;