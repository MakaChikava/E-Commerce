import Filter from './components/filterNav';
import './App.css';

function App() {
  return (
    <div className='flex'>
      <Filter/>
      <div className='flex flex-col w-full h-screen bg-red-500'>
        <h1>Main container</h1>
      </div>

    </div>
  );
}

export default App;
