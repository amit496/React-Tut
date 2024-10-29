import { useState } from "react";

let BGColor = () =>{

    let [color, BgColor ] = useState('bg-white')

    return(
        <>
            <div className={`w-screen h-screen flex justify-center items-center ${color} `}>
                <button onClick={() => BgColor('bg-red-800')} className={` ${color === 'bg-red-800' ? 'bg-white text-black' : 'bg-red-800 text-white'}  w-28 p-2 pr-5 pl-5 -tracking-tight rounded-full ml-3 font-semibold`}>Red</button>
                <button  onClick={() => BgColor('bg-yellow-500')} className={`${   color === 'bg-yellow-500' ?  'bg-white text-black' : 'bg-yellow-500 text-white' } w-28 p-2 pr-5 pl-5 -tracking-tight rounded-full ml-3 font-semibold`}> Yellow </button>
                <button onClick={() => BgColor('bg-orange-500')} className={`${color === 'bg-orange-500' ? 'bg-white text-black' : 'bg-orange-500 text-white'} w-28 p-2 pr-5 pl-5 -tracking-tight rounded-full ml-3 font-semibold`}>Orange</button>
                <button onClick={() => BgColor('bg-violet-500')} className={` ${color === 'bg-violet-500' ? 'bg-white text-black' : 'bg-violet-500 text-white'} w-28 p-2 pr-5 pl-5 -tracking-tight rounded-full ml-3 font-semibold`}>Violet</button>
                <button onClick={() => BgColor('bg-white')} className={` ${color === 'bg-white' ? 'bg-black text-white' : 'bg-black text-white'} w-28 p-2 pr-5 pl-5 -tracking-tight rounded-full ml-3 font-semibold`}>Reset</button>
            </div>

        </>
    );
}

export default BGColor