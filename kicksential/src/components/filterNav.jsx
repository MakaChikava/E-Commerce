const filter = () => {
    return (
        <div className="bg-blue-200 flex flex-col w-1/5">
            <h1 className="flex justify-center text-5xl">Filter</h1>
            
                <h1 className="flex ml-2 divide-x font-bold text-lg text-gray-700">TYPE</h1>
                <p>Running</p>
                <p>Lifestyle</p>
                <p>Sports</p>
                <p>Favorites</p>
                <h1 className="flex ml-2 font-bold text-lg text-gray-700">BRAND</h1>
                <p>Nike</p>
                <p>Adidas</p>
                <p>New Balance</p>
                <p>Converse</p>
                <p>Under Armour</p>
                <p>Jordan</p>
                <p>Off-White</p>
                <p>Puma</p>
                <p>Yeezy</p>
                <h1 className="flex ml-2 font-bold text-lg text-gray-700">COLOR</h1>
                <div>
                <p className="m-5 w-5 h-5 rounded-full bg-green-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-red-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-yellow-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-black"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-white"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-blue-500"></p>
                </div>
        
        </div>
    );
}

export default filter;