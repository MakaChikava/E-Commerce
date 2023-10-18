import React, {useState} from 'react';
import Filter from './components/filterNav';
import Intro from './components/introPage';
import './App.css';

function App() {
  return (
  <div className='flex flex-col'>
    <Intro/>
    <section className='flex flex-row'>
      <Filter/>
      <div className=' flex flex-col w-full pb-5 h-fit'>
        <div className='flex justify-center pt-8 pb-5'>
          <input 
        type='search'
        className='flex w-1/3 rounded-md p-2 bg-gray-50 border border-[3px] border-solid border-gray-150'
        placeholder='Search shoes'/>
        </div>       


        <div className='flex flex-row flex-wrap justify-center items-center justify-around w-full h-full'>
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
          <div className='flex flex-col p-8'>
            <img 
            src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c92d772-f288-472e-97f1-4e1c9b3c3265/air-force-1-07-premium-mens-shoes.png'
            className='h-[400px] w-[400px]'
            />

            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold'>Airforce I</p>
                <p className='text-gray-500 font-light'>Lifestyle</p>
                <p className='font-semibold'>$130</p>
              </div>
              <div className='flex w-[150px] justify-between'>
                <p>Add to cart</p>
                <p>Favorite</p>
              </div>
            </div>

          </div>
          {/* --------------------------------------------------- */}
        </div>

      </div>
    </section>
  </div>
  );
}

export default App;
