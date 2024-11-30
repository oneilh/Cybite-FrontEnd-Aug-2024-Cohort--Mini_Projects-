import React, { useState } from "react";
import CountConfig from "./CountConfig";
import Navbar from "../components/Navbar";

const CounterApp = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(1);
  const [enableNegativeCount, setEnableNegativeCount] = useState(false);

  console.log(enableNegativeCount)
  const increment = () => {
    setValue(Number(value) + Number(count));
  };
  const decrement = () => {
    setValue(Number(value) - Number(count));
  };

  const NegativeCountCheck = () => {
    if (enableNegativeCount) {
      return value;
    }
    if (value < 0) {
      setValue(0);
      return;
    }
    return value;
  };
  return (
    <>
      <Navbar />
      <div className="w-[70%] mx-auto flex flex-col gap-32 md:w-[40%]">
        <div className=" mt-40 flex justify-between items-center">
          <div className="text-6xl cursor-pointer" onClick={increment}>
            +
          </div>
          <div className="text-9xl">{NegativeCountCheck()}</div>
          <div className="text-6xl cursor-pointer" onClick={decrement}>
            -
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="w-fit border-b-2 border-gray-400 text-gray-400">
            Config
          </div>
          <CountConfig
            setCount={setCount}
            setValue={setValue}
            setEnableNegativeCount={setEnableNegativeCount}
          />
        </div>
      </div>
    </>
  );
};

export default CounterApp;
