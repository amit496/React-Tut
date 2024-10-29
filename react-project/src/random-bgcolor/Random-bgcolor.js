import { useState } from "react";

const Randombgcolor = () => {
    const color_character = '0123456789ABCDEF';
    const [generated_color, setColor] = useState('#fff');

    const generateColor = () => {
        let color_val = '';
        for (let index = 0; index < 6; index++) {
            color_val += color_character[Math.floor(Math.random() * 16)];
        }
        setColor('#' + color_val);
    }

    return (
        <div
            className="w-screen h-screen flex justify-center items-center flex-col p-4 pl-6 pr-6"
            style={{ backgroundColor: generated_color }}
        >
            <p>{generated_color}</p>
            <button
                onClick={generateColor}
                className="bg-black text-white mt-4 p-3 pl-5 pr-5 rounded-md font-semibold"
            >
                Generate Color
            </button>
        </div>
    );
}

export default Randombgcolor;
