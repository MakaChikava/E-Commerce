import Filter from './components/filterNav';
import Intro from './components/introPage';
import './App.css';

function App() {
  return (
  <div className='flex flex-col'>
    <Intro/>
    <section className='flex flex-row'>
      <Filter/>
      <div className='flex flex-col w-full h-screen bg-red-500'>
        <h1>Main container</h1>
        <input 
        type='search'
        className=''
        placeholder='Search item'/>

        <div className='flex justify-around'>
          <button className='bg-gray-50 rounded mt-5'>category</button>
          <button className='bg-gray-50 rounded mt-5'>category</button>
          <button className='bg-gray-50 rounded mt-5'>category</button>
          <button className='bg-gray-50 rounded mt-5'>category</button>
          <button className='bg-gray-50 rounded mt-5'>category</button>
        </div>

        <div className='flex flex-row flex-wrap justify-center items-center justify-around bg-gray-500 w-full h-full'>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card1</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card2</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card3</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card4</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card5</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card6</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>
          <div className='bg-yellow-500 h-60 w-60 rounded'>
            <h1>card7</h1>
          </div>

        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
