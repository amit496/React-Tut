import { useState } from "react";
let Counter = () =>{
    let [number, setnumber] = useState(0);


    return(
        <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
            <div className="box flex items-center flex-col">
                <p className="text-white text-3xl tracking-wider">Value : {number}</p>
                <div className="button mt-5">
                    <button onClick={() => setnumber(number + 1)} className="bg-white text-xl text-violet-900 tracking-wider p-3 pr-6 pl-6 rounded-sm">INCREMENT</button>
                    <button onClick={() => setnumber(number - 1)} className={`bg-white text-xl text-violet-900 tracking-wider p-3 rounded-sm ml-3 ${number === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={number === 0}>DECREMENT</button>
                </div>
            </div>
        </div>
    );
}
export default Counter;