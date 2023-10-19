const filter = () => {
    return (
        <div className="bg-gray-100 flex flex-col w-[250px]">
            <h1 className="flex justify-center text-5xl">Filters</h1>
            
                <h1 className="flex ml-2 divide-x font-bold text-lg text-gray-700">TYPE</h1>
                <p className="pl-2">Running</p>
                <p className="pl-2">Lifestyle</p>
                <p className="pl-2">Sports</p>
                <h1 className="flex ml-2 font-bold text-lg text-gray-700">BRAND</h1>
                <p className="pl-2">Nike</p>
                <p className="pl-2">Adidas</p>
                <p className="pl-2">New Balance</p>
                <p className="pl-2">Converse</p>
                <p className="pl-2">Under Armour</p>
                <p className="pl-2">Jordan</p>
                <p className="pl-2">Off-White</p>
                <p className="pl-2">Puma</p>
                <p className="pl-2">Yeezy</p>
                <h1 className="flex ml-2 font-bold text-lg text-gray-700">COLOR</h1>
                <div className="flex flex-row flex-wrap w-5/6">
                <p className="m-5 w-5 h-5 rounded-full bg-green-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-red-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-yellow-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-black"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-white"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-blue-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-orange-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-orange-950"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-gray-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-pink-500"></p>
                <p className="m-5 w-5 h-5 rounded-full bg-purple-500"></p>

                </div>
        
        </div>
    );
}

export default filter;