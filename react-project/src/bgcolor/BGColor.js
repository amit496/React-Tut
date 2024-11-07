import { useState } from "react";
let BGColor = () =>{

    let [color, setColor] = useState('bg-white');

    return(
        <div className={`flex justify-center items-center h-screen w-screen ${color} `}>
            <button onClick={() => setColor('bg-red-700')}  className={`${color === 'bg-red-700' ? 'bg-white text-black' : 'bg-red-700 text-white'} text-2xl p-2 pl-6 pr-6 rounded-md hover:bg-red-900 transition-all duration-500`} > Red </button> 
            <button onClick={() => setColor('bg-violet-700')} className={`${color === 'bg-violet-700' ? 'bg-white text-black' : 'bg-violet-700 text-white'} text-2xl p-2 pl-6 pr-6 text-white rounded-md hover:bg-violet-900 transition-all duration-500 ml-3`}>Violet</button>
            <button onClick={() => setColor('bg-yellow-700')} className={`${color === 'bg-yellow-700' ? 'bg-white text-black' : 'bg-yellow-700 text-white' } text-2xl p-2 pl-6 pr-6 text-white rounded-md hover:bg-yellow-900 transition-all duration-500 ml-3`}>Yellow</button>
            <button onClick={() => setColor('bg-sky-700')} className={` ${color === 'bg-sky-700' ? 'bg-white text-black' : 'bg-sky-700 text-white' } text-2xl p-2 pl-6 pr-6 text-white rounded-md hover:bg-sky-900 transition-all duration-500 ml-3`}>Sky</button>
            <button onClick={() => setColor('bg-green-700')} className={`${color === 'bg-green-700' ? 'bg-white text-black' : 'bg-green-700 text-white'} text-2xl p-2 pl-6 pr-6 text-white rounded-md hover:bg-green-900 transition-all duration-500 ml-3`}>Green</button>
        </div>
    );
}
export default BGColor;