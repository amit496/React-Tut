import { useState } from 'react';

let Counter = () => {
  let [number, setNumber] = useState(0);

  let increment_fun = () => {
    setNumber(number + 1);
  };

  let decrement_fun = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center items-center">
      <div className="content_container bg-violet-500 p-5 rounded-lg text-white flex justify-center flex-col">
        <p className="p-12 font-semibold text-center">Counter: {number}</p>
        <div className="content_container flex justify-center">
          <button
            onClick={increment_fun}
            className="bg-white font-semibold text-violet-600 m-6 p-3 rounded hover:bg-violet-700 hover:text-white"
          >
            INCREMENT
          </button>
          <button
            onClick={decrement_fun}
            className={`bg-white font-semibold text-violet-600 m-6 p-3 rounded hover:bg-violet-700 hover:text-white ${number === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={number === 0}
          >
            DECREMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
