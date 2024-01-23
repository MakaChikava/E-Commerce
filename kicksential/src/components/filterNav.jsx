
const filter = (props) => {    

    return (
        <div className="bg-gray-100 flex flex-col h-screen w-[250px] sticky top-20 z-0">
            <h1 className="flex justify-center text-4xl mb-5 p-2">Filter</h1>
            
                <h1 className="flex ml-2 mb-2 divide-x font-bold text-lg text-gray-700">TYPE</h1>
                <p onClick={props.getAll} className="pl-2 cursor-pointer">All</p>
                <p onClick={props.getRunning} className="pl-2 cursor-pointer">Running</p>
                <p onClick={props.getLifestyle} className="pl-2 cursor-pointer">Lifestyle</p>
                <p onClick={props.getSoccer} className="pl-2 cursor-pointer">Soccer</p>
                <p onClick={props.getBasketball} className="pl-2 cursor-pointer">Basketball</p>
                <p onClick={props.getFootball} className="pl-2 cursor-pointer">Football</p>

                <h1 className="flex ml-2 mb-2 mt-2 font-bold text-lg text-gray-700">COLOR</h1>

                <div className="flex flex-row flex-wrap w-5/6">
                    <p 
                    onClick={props.getGreen}
                    name='green' 
                    className="m-5 w-5 h-5 rounded-full bg-green-500"></p>
                    <p 
                    onClick={props.getRed}
                    name='red' 
                    className="m-5 w-5 h-5 rounded-full bg-red-500"></p>
                    <p 
                    onClick={props.getYellow}
                    name='yellow' 
                    className="m-5 w-5 h-5 rounded-full bg-yellow-500"></p>
                    <p 
                    onClick={props.getBlack}
                    name='black' 
                    className="m-5 w-5 h-5 rounded-full bg-black"></p>
                    <p 
                    onClick={props.getWhite}
                    name='white' 
                    className="m-5 w-5 h-5 rounded-full bg-white"></p>
                    <p 
                    onClick={props.getBlue}
                    name='blue' 
                    className="m-5 w-5 h-5 rounded-full bg-blue-500"></p>
                    
                    <p 
                    onClick={props.getGrey}
                    name='grey' 
                    className="m-5 w-5 h-5 rounded-full bg-gray-500"></p>
                    <p 
                    onClick={props.getPink}
                    name='pink' 
                    className="m-5 w-5 h-5 rounded-full bg-pink-500"></p>
                    
                </div>
        
        </div>
    );
}

export default filter;