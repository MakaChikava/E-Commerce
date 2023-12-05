import React, {useEffect, useState} from 'react';
import Filter from './components/filterNav';
import Intro from './components/introPage';
import axios from 'axios'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
// --------------------GET API CALLS, CATEGORIES-------------------------- //
  const getAllProducts = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/all-products/')
        .then(res => {
          setProducts(res.data)
          console.log(res.data)
        })
  }

  const getTypeLifestyle = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/products/lifestyle/')
        .then(res =>{
        setProducts(res.data.products)
        console.log(res.data.products)
        })
}

  const getTypeRunning = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/products/running/')
        .then(res =>{
        setProducts(res.data.products)
        console.log(res.data.products)
        })
}

const getTypeSoccer = () =>{
  axios
      .get('http://127.0.0.1:8000/api/v1/products/soccer/')
      .then(res =>{
      setProducts(res.data.products)
      console.log(res.data.products)
      })
}

const getTypeBasketball = () =>{
  axios
      .get('http://127.0.0.1:8000/api/v1/products/basketball/')
      .then(res =>{
      setProducts(res.data.products)
      console.log(res.data.products)
      })
}

const getTypeFootball = () =>{
  axios
      .get('http://127.0.0.1:8000/api/v1/products/football/')
      .then(res =>{
      setProducts(res.data.products)
      console.log(res.data.products)
      })
}


// -------------------- GET COLORS ------------------------//
  const getColorGreen = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/green/')
        .then((res)=>{
          setProducts(res.data)
        })}
  const getColorPink = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/pink/')
        .then((res)=>{
          setProducts(res.data)
        })}
  const getColorRed = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/red/')
        .then((res)=>{
          setProducts(res.data)
        })}
  const getColorYellow = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/yellow/')
        .then((res)=>{
          setProducts(res.data)
        })}
  const getColorBlue = () =>{
    axios
        .get('http://127.0.0.1:8000/api/v1/blue/')
        .then((res)=>{
          setProducts(res.data)
        })}
  
    const getColorGrey = () =>{
      axios
          .get('http://127.0.0.1:8000/api/v1/grey/')
          .then((res)=>{
            setProducts(res.data)
          })}

    const getColorWhite = () =>{
      axios
          .get('http://127.0.0.1:8000/api/v1/white/')
          .then((res)=>{
            setProducts(res.data)
          })}

    const getColorBlack = () =>{
      axios
          .get('http://127.0.0.1:8000/api/v1/black/')
          .then((res)=>{
            setProducts(res.data)
          })}
// -------------------------- UPDATE FAVORITE PRODUCT ------------------------- //

const UpdateFavorite = (product) =>{
  console.log(product.id)
  axios
      .put(`http://127.0.0.1:8000/api/v1/product/${product.id}`, 
      {
        category: product.category,
        name: product.name,
        type: product.type,
        get_absolute_url: product.get_absolute_url,
        brand: product.brand,
        color: product.color,
        price: product.price,
        favorite: !product.favorite,
        get_image: product.get_image
      })
      .then(() => {
        // Make sure that if you are in another category and make a new favorite the page wont kick you out back to the all category
        if (products.length === 31){ // need to find a better way to compare than a set number
          getAllProducts()
        }else{
          const parts = product.get_absolute_url.split('/')
          let url = `/${parts[1]}/`
            axios
                .get(`http://127.0.0.1:8000/api/v1/products${url}`)
                .then(res => {
                    setProducts(res.data.products)
                    console.log(res.data.products)
                })
          
        
      }})
}


// ---------------------------SEARCH------------------------- //  
  const handleSearch = (e) =>{
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const getQuery = async () =>{
    await axios
              .post('http://127.0.0.1:8000/api/v1/products/search/', {'query' : `${query}`})
              .then((res)=>{
                console.log(res.data)
                setProducts(res.data)
              })
              .catch((error)=>{
                console.log(error)
              })
  }

  useEffect(()=>{
    getAllProducts()
  }, [])

  return (
  <div className='flex flex-col'>
    <Intro/>
    <section className='flex flex-row'>

      <Filter
      getAll={getAllProducts}
      getRunning={getTypeRunning}
      getLifestyle={getTypeLifestyle}
      getSoccer={getTypeSoccer}
      getBasketball={getTypeBasketball}
      getFootball={getTypeFootball}
      getGreen={getColorGreen}
      getPink={getColorPink}
      getRed={getColorRed}
      getBlue={getColorBlue}
      getYellow={getColorYellow}
      getGrey={getColorGrey}
      getWhite={getColorWhite}
      getBlack={getColorBlack}
      />

      <div className=' flex flex-col w-full pb-5 h-fit'>
        {/* -----------------SEARCH BAR CONTAINER----------------- */}
        <div className='flex justify-center pt-8 pb-5'>
          <input 
            type='search'
            name='query'
            onChange={handleSearch}
            className='flex w-1/3 rounded-md p-2 bg-gray-50 border border-[3px] border-solid border-gray-150'
            placeholder='Search shoes'/>

            <button onClick={getQuery}>search</button>
        </div>       

{/* -------START OF A PRODUCT CONTAINER----------- */}
        <div className='flex flex-row flex-wrap justify-center items-center justify-around w-full h-full'>
          {products.map((product)=>{
            return(
            
          
          <div key={product.id} className='flex flex-col p-8'>
            <img
            src={product.get_image}
            className='h-[300px] w-[300px]'
            alt='shoe'
            />

          <div className='flex justify-between'>
            <div className='flex flex-col p-2'>
              <p className='font-semibold'>{product.name}</p>
              <p className='text-gray-500 font-light'>{product.type}</p>
              <p className='font-semibold'>${product.price}</p>
            </div>

          <div className='flex w-[100px] p-2 justify-around'>

{/* ----------CART LOGO BUTTON--------- */}

              <svg 
                aria-hidden="true" 
                className='w-[24px h-[24px] cursor-pointer'
                focusable="false" 
                viewBox="0 0 24 24" 
                role="img" 
                fill="none">
                  <title>Cart</title>
                  <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
              </svg>

{/* --------FAVORITE BUTTON TOGGLE START----------- */}

              {product.favorite ? 
              <svg 
              aria-label="Unlike" 
              className="w-[24px] h-[24px] cursor-pointer" 
              color="rgb(255, 48, 64)" 
              fill="rgb(255, 48, 64)" 
              role="img" 
              viewBox="0 0 48 48"
              onClick={()=>{
                UpdateFavorite(product)}}>
              <title>Unfavorite</title>
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg> 
              : 
              <svg 
                aria-label="Like" 
                className="h-[24px] w-[24px] cursor-pointer" 
                color="rgb(38, 38, 38)" 
                fill="rgb(38, 38, 38)" 
                role="img" 
                viewBox="0 0 24 24"
                onClick={()=>{
                  UpdateFavorite(product)}}>
                <title>favorite</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>}
                

{/* ---------FAVORITE BUTTON TOGGLE END---------- */}
          </div>
          </div>
          </div>
            )
            })}
        </div>

      </div>
    </section>
  </div>
  );
}

export default App;
